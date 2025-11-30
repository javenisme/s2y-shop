"use client";

import { formatMoney } from "@/lib/utils";
import { YnsLink } from "@/ui/yns-link";
import type * as Commerce from "commerce-kit";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ProductList = ({ products, locale }: { products: Commerce.MappedProduct[]; locale: string }) => {
	const [filteredProducts, setFilteredProducts] = useState(products);

	useEffect(() => {
		// Get preferred currency from localStorage
		const preferredCurrency = localStorage.getItem("preferredCurrency") || "usd";

		// Filter products based on currency
		const filtered = products.filter(
			(product) => product.default_price.currency.toLowerCase() === preferredCurrency,
		);
		setFilteredProducts(filtered);
	}, [products]);

	// Listen for currency changes
	useEffect(() => {
		const handleStorageChange = () => {
			const newCurrency = localStorage.getItem("preferredCurrency") || "usd";
			const filtered = products.filter(
				(product) => product.default_price.currency.toLowerCase() === newCurrency,
			);
			setFilteredProducts(filtered);
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, [products]);

	return (
		<ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{filteredProducts.map((product, idx) => {
				return (
					<li key={product.id} className="group">
						<YnsLink href={`/product/${product.metadata.slug}`}>
							<article className="overflow-hidden bg-white">
								{product.images[0] && (
									<div className="rounded-lg aspect-square w-full overflow-hidden bg-neutral-100">
										<Image
											className="group-hover:rotate hover-perspective w-full bg-neutral-100 object-cover object-center transition-opacity group-hover:opacity-75"
											src={product.images[0]}
											width={768}
											height={768}
											loading={idx < 3 ? "eager" : "lazy"}
											priority={idx < 3}
											sizes="(max-width: 1024x) 100vw, (max-width: 1280px) 50vw, 700px"
											alt=""
										/>
									</div>
								)}
								<div className="p-2">
									<h2 className="text-xl font-medium text-neutral-700">{product.name}</h2>
									<footer className="text-base font-normal text-neutral-900">
										{product.default_price.unit_amount && (
											<p>
												{formatMoney({
													amount: product.default_price.unit_amount,
													currency: product.default_price.currency,
													locale,
												})}
											</p>
										)}
									</footer>
								</div>
							</article>
						</YnsLink>
					</li>
				);
			})}
		</ul>
	);
};
