import { Award, CheckCircle, Shield, Star } from "lucide-react";
import Image from "next/image";

const certifications = [
	{
		icon: Shield,
		title: "FDA Registered",
		description: "Manufactured in FDA registered facilities following strict quality control standards",
	},
	{
		icon: CheckCircle,
		title: "Lab Tested",
		description: "Every batch undergoes rigorous testing for purity and effectiveness",
	},
	{
		icon: Star,
		title: "ISO Certified",
		description: "Production follows ISO 9001:2015 quality management standards",
	},
	{
		icon: Award,
		title: "EPA Registered",
		description: "Registered with the Environmental Protection Agency for safety and efficacy",
	},
];

export function Quality() {
	return (
		<section className="w-full py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Our commitment to safety and quality is backed by rigorous testing and certifications
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{certifications.map((cert, index) => {
						const Icon = cert.icon;
						return (
							<div key={index} className="flex flex-col items-center text-center p-6">
								<Icon className="w-12 h-12 text-blue-600 mb-4" />
								<h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
								<p className="text-gray-600">{cert.description}</p>
							</div>
						);
					})}
				</div>

				<div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
					<div className="flex flex-col lg:flex-row items-center gap-8">
						<div className="lg:w-1/2">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Our Quality Promise</h3>
							<p className="text-gray-600 mb-4">
								Every batch of our HOCl solution undergoes comprehensive testing to ensure:
							</p>
							<ul className="space-y-2">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Consistent concentration and pH levels</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Free from harmful contaminants</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Maximum stability and shelf life</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span>Meets all safety standards</span>
								</li>
							</ul>
						</div>
						<div className="lg:w-1/2">
							<Image
								src="https://picsum.photos/800/600?random=4"
								alt="Laboratory Testing"
								width={500}
								height={300}
								className="rounded-lg object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
