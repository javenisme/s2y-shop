import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "files.stripe.com",
			},
			{
				protocol: "https",
				hostname: "s2y.us",
			},
		],
	},
	// ... other config options ...
};

export default withContentlayer(nextConfig);
