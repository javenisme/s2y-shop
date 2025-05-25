import { safeJsonParse } from "@/lib/utils";
import Cookies from "js-cookie";

export const CART_COOKIE = "yns_cart";

export type CartCookieJson = { id: string; linesCount: number };

export function setCartCookieJson(cartCookieJson: CartCookieJson) {
	try {
		Cookies.set(CART_COOKIE, JSON.stringify(cartCookieJson), {
			expires: 7, // Cookie expires in 7 days
			path: "/",
			sameSite: "strict",
		});
	} catch (error) {
		console.error("Failed to set cart cookie", error);
	}
}

export function clearCartCookie(): void {
	Cookies.remove(CART_COOKIE, { path: "/" });
}

export function getCartCookieJson(): null | CartCookieJson {
	const cartCookieValue = Cookies.get(CART_COOKIE);
	const cartCookieJson = safeJsonParse(cartCookieValue);

	if (
		!cartCookieJson ||
		typeof cartCookieJson !== "object" ||
		!("id" in cartCookieJson) ||
		!("linesCount" in cartCookieJson) ||
		typeof cartCookieJson.id !== "string" ||
		typeof cartCookieJson.linesCount !== "number"
	) {
		return null;
	}
	return cartCookieJson as CartCookieJson;
}
