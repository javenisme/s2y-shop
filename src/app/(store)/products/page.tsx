import { publicUrl } from "@/env.mjs";
import { getLocale, getTranslations } from "@/i18n/server";
import { JsonLd, mappedProductsToJsonLd } from "@/ui/json-ld";
import { ProductList } from "@/ui/products/product-list";
import * as Commerce from "commerce-kit";
import type { Metadata } from "next/types";

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations("/products.metadata");
	return {
		title: t("title"),
		alternates: { canonical: `${publicUrl}/products` },
	};
};

export default async function AllProductsPage() {
	const products = await Commerce.productBrowse({ first: 100 });
	const t = await getTranslations("/products.page");
	const locale = await getLocale();

	return (
		<main className="pb-8">
			<h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">{t("title")}</h1>
			<ProductList products={products} locale={locale} />
			<JsonLd jsonLd={mappedProductsToJsonLd(products)} />
		</main>
	);
}
