import { Quote } from "lucide-react";

const testimonials = [
	{
		quote:
			"HOCL is a less harmful alternative to bleach that kills mold after 1 minute of contact. I also recommend high quality air filtration & dehumidification.",
		author: "Kara Lucas",
		role: "Mold Remediation Contractor",
	},
	{
		quote:
			"Fascinating! Haloperoxidase enzymes convert chlorine ions to highly reactive hypochlorous acid (HOCl) - a potent oxidant that rips pathogens apart.",
		author: "Mike Cohen",
		role: "Scientist",
	},
	{
		quote:
			"Calling all skincare lovers! Did you know that derms are raving about the benefits of adding hypochlorous acid to your routine? It's a game-changer!",
		author: "Laura Smith",
		role: "Makeup blogger",
	},
];

export function Testimonials() {
	return (
		<section className="w-full py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">What People Are Saying</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Hear from our satisfied customers and industry experts
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="flex flex-col p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							<Quote className="w-12 h-12 text-blue-600 mb-4" />
							<p className="text-lg text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
							<div>
								<p className="font-semibold text-gray-900">{testimonial.author}</p>
								<p className="text-gray-500">{testimonial.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
