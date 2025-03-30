import { YnsLink } from "@/ui/yns-link";

export const NavItems = () => {
	return (
		<>
			<YnsLink href="/" className="text-sm font-medium">
				Home
			</YnsLink>
			<YnsLink href="/blog" className="text-sm font-medium">
				Blog
			</YnsLink>
		</>
	);
};
