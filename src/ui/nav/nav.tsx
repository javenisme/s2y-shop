import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { YnsLink } from "@/ui/yns-link";
import { UserIcon } from "lucide-react";
import Image from "next/image";

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-xs nav-border-reveal">
			<div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
				<YnsLink href="/" className="flex items-center gap-2">
					<Image src="/s2y_logo_dark.png" alt="S2Y Logo" width={40} height={11} className="dark:hidden" />
					<Image
						src="/s2y_logo_light.png"
						alt="S2Y Logo"
						width={40}
						height={11}
						className="hidden dark:block"
					/>
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
