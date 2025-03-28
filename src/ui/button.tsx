import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
}

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				"inline-flex items-center justify-center rounded-lg font-medium transition-colors",
				// Variants
				{
					"bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
					"bg-white text-blue-600 hover:bg-blue-50": variant === "secondary",
					"border-2 border-gray-900 text-gray-900 hover:bg-gray-50": variant === "outline",
				},
				// Sizes
				{
					"text-sm px-4 py-2": size === "sm",
					"px-6 py-3": size === "md",
					"text-lg px-8 py-4": size === "lg",
				},
				className,
			)}
			{...props}
		/>
	);
}
