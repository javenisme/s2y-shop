import Image from "next/image";

const steps = [
	{
		title: "Your Body's Natural Defender",
		description: "HOCl is your body's natural defender, produced by your immune system to fight infections.",
		image: "https://picsum.photos/800/800?random=1",
	},
	{
		title: "Safe, Powerful, and Effective",
		description: "100 times more effective than bleach, with a safety profile similar to water.",
		image: "https://picsum.photos/800/800?random=2",
	},
	{
		title: "Medical Grade Technology",
		description: "Uses FDA approved electrodes with aerospace-grade materials for optimal performance.",
		image: "https://picsum.photos/800/800?random=3",
	},
];

export function HowItWorks() {
	return (
		<section className="w-full py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Discover the science behind our revolutionary HOCl technology
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{steps.map((step, index) => (
						<div key={index} className="flex flex-col items-center">
							<div className="relative w-full aspect-square mb-6 rounded-3xl overflow-hidden">
								<Image src={step.image} alt={step.title} fill className="object-cover" />
							</div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
							<p className="text-gray-600 text-center">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
