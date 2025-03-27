import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";
import { UserIcon } from "lucide-react";
import Image from "next/image";

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-xs nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
				<YnsLink href="/" className="flex items-center gap-2">
					<Image src="/logo.svg" alt="S2Y Logo" width={32} height={32} className="rounded-md" />
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">S2Y</SeoH1>
				</YnsLink>

				<div className="max-w-full flex shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">
					<NavMenu />
				</div>
				<div className="mr-3 ml-auto sm:ml-0">
					<SearchNav />
				</div>
				<CartSummaryNav />
				<YnsLink href="/login">
					<UserIcon className="hover:text-neutral-500" />
				</YnsLink>
			</div>
		</header>
	);
};
