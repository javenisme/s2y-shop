import { publicUrl } from "@/env.mjs";
import { Button } from "@/ui/button";
import { Features } from "@/ui/sections/features";
import { HowItWorks } from "@/ui/sections/how-it-works";
import { Quality } from "@/ui/sections/quality";
import { Testimonials } from "@/ui/sections/testimonials";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative w-full min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50 to-white">
				<div className="container mx-auto px-4 py-20">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						<div className="lg:w-1/2 space-y-6">
							<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
								The Power of <span className="text-blue-600">HOCl</span>
								<br />
								Your Body's Natural Defender
							</h1>
							<p className="text-xl text-gray-600 max-w-2xl">
								Experience the revolutionary impact of Hypochlorous Acid - 100 times more effective than
								bleach, yet as gentle as water.
							</p>
							<div className="flex flex-wrap gap-4">
								<Button size="lg">Shop Now</Button>
								<Button size="lg" variant="outline">
									Learn More
								</Button>
							</div>
							<div className="flex items-center gap-8 pt-4">
								<div>
									<p className="text-3xl font-bold text-gray-900">99.9%</p>
									<p className="text-sm text-gray-600">Germ Kill Rate</p>
								</div>
								<div>
									<p className="text-3xl font-bold text-gray-900">60s</p>
									<p className="text-sm text-gray-600">Contact Time</p>
								</div>
								<div>
									<p className="text-3xl font-bold text-gray-900">100%</p>
									<p className="text-sm text-gray-600">Safe & Natural</p>
								</div>
							</div>
						</div>
						<div className="lg:w-1/2">
							<div className="relative w-full aspect-square max-w-lg mx-auto">
								<Image
									src="https://picsum.photos/800/800?random=5"
									alt="HOCl Product"
									fill
									className="object-contain"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Sections */}
			<Features />
			<HowItWorks />
			<Quality />
			<Testimonials />

			{/* CTA Section */}
			<section className="w-full py-20 bg-blue-600">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Power of HOCl?</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Join thousands of satisfied customers who have discovered the natural power of Hypochlorous Acid.
					</p>
					<Button size="lg" variant="secondary">
						Shop Now
					</Button>
				</div>
			</section>
		</main>
	);
}
