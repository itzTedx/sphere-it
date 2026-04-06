import type { Route } from "next";

import { listLegalPages } from "@/modules/legal-pages/actions/query";

import { HeaderLink } from "./links-with-active";

export const Header = async () => {
	const legalPages = await listLegalPages();

	return (
		<header className="border-b bg-card pt-9 sm:pt-12 md:pt-14">
			<h1 className="sr-only">Legal Pages</h1>
			<ul className="mx-auto flex flex-wrap items-center justify-center gap-1">
				{legalPages.map((page) => (
					<li key={page.id ?? page.slug}>
						<HeaderLink href={`/legal/${page.slug}` as Route}>
							{page.title}
						</HeaderLink>
					</li>
				))}
			</ul>
		</header>
	);
};
