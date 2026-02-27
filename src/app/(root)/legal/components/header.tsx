import { HeaderLink } from "./links-with-active";

export const Header = () => {
	return (
		<header className="border-b bg-card pt-9 sm:pt-12 md:pt-14">
			{/* <h1 className="pb-16 text-center text-primary-900 text-title-1 sm:pb-20">
				{title}
			</h1> */}
			<ul className="mx-auto flex items-center justify-center gap-1">
				<li>
					<HeaderLink href="/legal/privacy">Privacy Policy</HeaderLink>
				</li>
				<li>
					<HeaderLink href="/legal/data-protection">
						Data protection policy
					</HeaderLink>
				</li>
				<li>
					<HeaderLink href="/legal/acceptable-use-policy">
						Acceptable use policy
					</HeaderLink>
				</li>
				<li>
					<HeaderLink href="/legal/terms-of-services">
						Terms of Service
					</HeaderLink>
				</li>
			</ul>
		</header>
	);
};
