"use server";

import { clearCartCookie, getCartCookieJson, setCartCookieJson } from "@/lib/cart";
import * as Commerce from "commerce-kit";
import { revalidateTag } from "next/cache";

export async function getCartFromCookiesAction() {
	const cartJson = await getCartCookieJson();
	if (!cartJson) {
		return null;
	}

	const cart = await Commerce.cartGet(cartJson.id);
	if (cart) {
		return structuredClone(cart);
	}
	return null;
}

export async function setInitialCartCookiesAction(cartId: string, linesCount: number) {
	await setCartCookieJson({
		id: cartId,
		linesCount,
	});
	revalidateTag(`cart-${cartId}`);
}

export async function findOrCreateCartIdFromCookiesAction() {
	const cart = await getCartFromCookiesAction();
	if (cart) {
		return structuredClone(cart);
	}

	const newCart = await Commerce.cartCreate();
	await setCartCookieJson({
		id: newCart.id,
		linesCount: 0,
	});
	revalidateTag(`cart-${newCart.id}`);

	return newCart.id;
}

export async function clearCartCookieAction() {
	const cookie = await getCartCookieJson();
	if (!cookie) {
		return;
	}

	await clearCartCookie();
	revalidateTag(`cart-${cookie.id}`);
	// FIXME not ideal, revalidate per domain instead (multi-tenant)
	revalidateTag(`admin-orders`);
}

export async function addToCartAction(formData: FormData) {
	const productId = formData.get("productId");
	if (!productId || typeof productId !== "string") {
		throw new Error("Invalid product ID");
	}

	let cart = await getCartFromCookiesAction();
	let cartId: string;

	if (!cart) {
		const newCart = await Commerce.cartCreate();
		cartId = newCart.id;
		await setCartCookieJson({
			id: cartId,
			linesCount: 0,
		});
	} else {
		cartId = cart.cart.id;
	}

	try {
		const updatedCart = await Commerce.cartAdd({ productId, cartId });

		if (updatedCart) {
			await setCartCookieJson({
				id: updatedCart.id,
				linesCount: Commerce.cartCount(updatedCart.metadata),
			});

			revalidateTag(`cart-${updatedCart.id}`);
			return structuredClone(updatedCart);
		}
	} catch (error) {
		if (error instanceof Error && error.message.includes("currency")) {
			throw new Error(
				"Cannot mix different currencies in the same cart. Please empty your cart first or choose a product with the same currency.",
			);
		}
		throw error;
	}
}

export async function increaseQuantity(productId: string) {
	const cart = await getCartFromCookiesAction();
	if (!cart) {
		throw new Error("Cart not found");
	}
	await Commerce.cartChangeQuantity({
		productId,
		cartId: cart.cart.id,
		operation: "INCREASE",
	});
}

export async function decreaseQuantity(productId: string) {
	const cart = await getCartFromCookiesAction();
	if (!cart) {
		throw new Error("Cart not found");
	}
	await Commerce.cartChangeQuantity({
		productId,
		cartId: cart.cart.id,
		operation: "DECREASE",
	});
}

export async function setQuantity({
	productId,
	cartId,
	quantity,
}: {
	productId: string;
	cartId: string;
	quantity: number;
}) {
	const cart = await getCartFromCookiesAction();
	if (!cart) {
		throw new Error("Cart not found");
	}
	await Commerce.cartSetQuantity({ productId, cartId, quantity });
}

export async function commerceGPTRevalidateAction() {
	const cart = await getCartCookieJson();
	if (cart) {
		revalidateTag(`cart-${cart.id}`);
	}
}
