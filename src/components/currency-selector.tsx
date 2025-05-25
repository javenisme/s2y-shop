"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SUPPORTED_CURRENCIES = [
	{ value: "usd", label: "USD" },
	{ value: "cny", label: "CNY" },
];

export function CurrencySelector() {
	const router = useRouter();
	const [currency, setCurrency] = useState("usd");

	useEffect(() => {
		// Initialize currency from localStorage
		const storedCurrency = localStorage.getItem("preferredCurrency");
		if (storedCurrency) {
			setCurrency(storedCurrency);
		}
	}, []);

	const handleCurrencyChange = (newCurrency: string) => {
		setCurrency(newCurrency);
		localStorage.setItem("preferredCurrency", newCurrency);
		// Refresh the page to update product listings
		router.refresh();
	};

	return (
		<div className="fixed bottom-4 left-4 z-50">
			<Select value={currency} onValueChange={handleCurrencyChange}>
				<SelectTrigger className="w-[100px]">
					<SelectValue placeholder="Currency" />
				</SelectTrigger>
				<SelectContent>
					{SUPPORTED_CURRENCIES.map((curr) => (
						<SelectItem key={curr.value} value={curr.value}>
							{curr.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
