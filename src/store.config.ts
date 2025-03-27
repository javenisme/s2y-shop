import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";

export const config = {
	categories: [
		{ name: "Solutions", slug: "solution", image: ApparelImage },
		{ name: "Electrolyte", slug: "electrolyte", image: ApparelImage },
		{ name: "Accessories", slug: "accessories", image: AccessoriesImage },
	],

	social: {
		x: "https://x.com/s2yhealth",
		facebook: "https://facebook.com/s2yhealth",
	},

	contact: {
		email: "support@s2y.us",
		phone: "+1 (678) 792-8330",
		address: "8 The Green STE B Dover, DE 19901",
	},
};

export type StoreConfig = typeof config;
export default config;
