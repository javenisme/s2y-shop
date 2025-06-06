"use client";
import { addToCartAction } from "@/actions/cart-actions";
import { Button } from "@/components/ui/button";
import { useCartModal } from "@/context/cart-modal";
import { useTranslations } from "@/i18n/client";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export const AddToCartButton = ({
	productId,
	disabled,
	className,
}: {
	productId: string;
	disabled?: boolean;
	className?: string;
}) => {
	const t = useTranslations("Global.addToCart");
	const [pending, startTransition] = useTransition();
	const isDisabled = disabled || pending;
	const { setOpen } = useCartModal();

	return (
		<Button
			id="button-add-to-cart"
			size="lg"
			type="submit"
			className={cn("rounded-full text-lg relative", className)}
			onClick={async (e) => {
				if (isDisabled) {
					e.preventDefault();
					return;
				}

				setOpen(true);

				startTransition(async () => {
					try {
						const formData = new FormData();
						formData.append("productId", productId);
						await addToCartAction(formData);
					} catch (error) {
						if (error instanceof Error && error.message.includes("Cannot mix different currencies")) {
							toast.error("购物车中不能混合不同币种的商品，请先清空购物车或选择相同币种的商品。");
						} else {
							toast.error("添加到购物车失败，请重试。");
						}
					}
				});
			}}
			aria-disabled={isDisabled}
		>
			<span className={cn("transition-opacity ease-in", pending ? "opacity-0" : "opacity-100")}>
				{disabled ? t("disabled") : t("actionButton")}
			</span>
			<span
				className={cn(
					"ease-out transition-opacity pointer-events-none absolute z-10",
					pending ? "opacity-100" : "opacity-0",
				)}
			>
				<Loader2Icon className="h-4 w-4 animate-spin" />
			</span>
		</Button>
	);
};
