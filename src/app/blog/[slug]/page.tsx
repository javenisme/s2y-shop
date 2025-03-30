import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { YnsLink } from "@/ui/yns-link";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxContent } from "./mdx-content";

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post._raw.flattenedPath,
	}));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) return { title: "Post Not Found" };
	return { title: post.title };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) notFound();

	return (
		<div className="py-10">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<YnsLink href="/blog">Blog</YnsLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{post.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<article className="prose prose-lg dark:prose-invert mx-auto mt-8">
				<header className="mb-8 text-center">
					<h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
					<time dateTime={post.date} className="text-gray-600">
						{new Date(post.date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
				</header>
				<MdxContent code={post.body.code} />
			</article>
		</div>
	);
}
