"use client";

import { getMDXComponent } from "next-contentlayer/hooks";

export function MdxContent({ code }: { code: string }) {
	const Content = getMDXComponent(code);
	return <Content />;
}
