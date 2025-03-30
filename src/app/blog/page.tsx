import { type Post, allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function BlogPage() {
	return (
		<div className="py-10">
			<h1 className="text-3xl font-bold leading-none tracking-tight text-foreground mb-8">Blog</h1>
			<div className="grid gap-8 md:grid-cols-2">
				{allPosts
					.sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime())
					.map((post: Post) => (
						<article key={post._id} className="group relative flex flex-col space-y-2">
							<Link
								href={post.url}
								className="block rounded-lg border border-neutral-200 p-6 transition-all hover:border-blue-500 hover:shadow-md"
							>
								<h2 className="text-2xl font-semibold tracking-tight text-gray-800 group-hover:text-blue-600">
									{post.title}
								</h2>
								<time dateTime={post.date} className="block text-sm text-gray-600 mt-2">
									{new Date(post.date).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</time>
								<p className="mt-4 text-gray-600 line-clamp-3">{post.description}</p>
								<span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
									Read more <span className="ml-1">→</span>
								</span>
							</Link>
						</article>
					))}
			</div>
		</div>
	);
}
