import { Heart, Leaf, Shield, Sparkles } from "lucide-react";

const features = [
	{
		icon: Shield,
		title: "Medical-Grade Sterilization",
		description: "Eliminates 99.9% of bacteria, fungi, spores, and viruses within 60 seconds",
	},
	{
		icon: Heart,
		title: "Gentle Yet Effective",
		description: "Safe for skin, oral care and more while maintaining powerful antimicrobial properties",
	},
	{
		icon: Sparkles,
		title: "Advanced Technology",
		description: "Uses medical-grade water electrolysis technology with precise control",
	},
	{
		icon: Leaf,
		title: "100% Safe & Natural",
		description: "Eco-friendly solution that breaks down into simple salt and water",
	},
];

export function Features() {
	return (
		<section className="w-full py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">The Power of Hypochlorous Acid</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Experience the revolutionary impact of HOCl - your body's natural defender, now available in a
						convenient form
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors"
						>
							<div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
								<feature.icon className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
