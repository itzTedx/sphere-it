"use client";

import { type SVGProps, useState } from "react";

import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import { IconBox } from "@/components/icon-box";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
	IconAssure,
	IconAugment,
	IconAutomate,
	IconElevate,
	IconEvaluate,
} from "@/assets/icons/services";

import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { ResourcesSubmenu, SubmenuLink } from "@/types/layout";

import type { NavService } from "./nav-types";

const SERVICE_ICON_MAP: Record<
	string,
	(props: SVGProps<SVGSVGElement>) => React.JSX.Element
> = {
	elevate: IconElevate,
	automate: IconAutomate,
	evaluate: IconEvaluate,
	assure: IconAssure,
	augment: IconAugment,
};

const mapServicesToSubmenuLinks = (services: NavService[]): SubmenuLink[] =>
	services.map((service, index) => {
		const Icon =
			SERVICE_ICON_MAP[service.id as keyof typeof SERVICE_ICON_MAP] ??
			IconElevate;

		const name =
			service.id.charAt(0).toUpperCase() + service.id.slice(1).toLowerCase();

		return {
			id: index + 1,
			image: service.image,
			label: name,
			description: service.description,
			href: `/services/${service.id}` as Route,
			Icon,
		};
	});

type DesktopNavLinksProps = {
	services: NavService[];
};

export const DesktopNavLinks = ({ services }: DesktopNavLinksProps) => {
	const servicesSubmenu =
		Array.isArray(services) && services.length > 0
			? mapServicesToSubmenuLinks(services)
			: null;

	return (
		<NavigationMenu aria-label="Main navigation" viewport={true}>
			<NavigationMenuList role="menubar">
				{NAV_LINKS.map(({ id, label, href, submenu, resources }) => {
					const isServices = id === 1;

					const resolvedSubmenu =
						isServices && servicesSubmenu && servicesSubmenu.length > 0
							? servicesSubmenu
							: submenu;

					const hasDropdown = resolvedSubmenu || resources;

					return (
						<NavigationMenuItem key={id}>
							{hasDropdown ? (
								<>
									<NavigationMenuTrigger>
										{href ? (
											<Link
												aria-label={label}
												href={href}
												tabIndex={-1}
												title={label}
											>
												{label}
											</Link>
										) : (
											label
										)}
									</NavigationMenuTrigger>
									<NavigationMenuContent
										aria-label={`${label} submenu`}
										role="menu"
									>
										<ul
											className="grid gap-2 md:w-[400px] lg:w-[1180px]"
											role="none"
										>
											{id === 1 && resolvedSubmenu && (
												<ServicesMegaMenu data={resolvedSubmenu} />
											)}
											{id === 2 && resources && (
												<ResourcesMegaMenu data={resources} />
											)}
										</ul>
									</NavigationMenuContent>
								</>
							) : (
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									{href && (
										<Link aria-label={label} href={href} title={label}>
											{label}
										</Link>
									)}
								</NavigationMenuLink>
							)}
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

// ListItem component for navigation menu links
function ListItem({
	title,
	children,
	hoveredIdx,
	href,
	Icon,
	...props
}: React.ComponentPropsWithoutRef<"li"> & {
	href: Route;
	title: string;
	hoveredIdx?: string | null;
	Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
}) {
	const isHovered = hoveredIdx === title;

	return (
		<li {...props}>
			<NavigationMenuLink
				asChild
				className="group rounded-xl border border-transparent px-4 py-5 transition-colors hover:bg-transparent focus-visible:border-primary-600"
			>
				<Link
					className="relative flex-row items-center gap-2"
					href={href}
					title={title}
				>
					{Icon && (
						<IconBox>
							<Icon className="delay-100 group-hover:text-primary-600 group-focus-visible:text-primary-600" />
						</IconBox>
					)}
					<div className="relative z-10 space-y-1">
						<div className="font-display text-subhead-base leading-none transition-colors delay-100 group-hover:text-primary-600 group-focus-visible:text-primary-600">
							{title}
						</div>
						<p className="line-clamp-2 font-display text-muted-foreground text-xs transition-colors delay-100 group-hover:text-primary-600 group-focus-visible:text-primary-600">
							{children}
						</p>
					</div>
					<AnimatePresence>
						{isHovered && (
							<motion.span
								animate={{
									opacity: 1,
									transition: { duration: 0.05 },
								}}
								className={cn(
									"absolute inset-0 z-0 block h-full w-full rounded-xl bg-stone-100"
								)}
								exit={{
									opacity: 0,
									transition: { duration: 0.01, delay: 0.1 },
								}}
								initial={{ opacity: 0 }}
								layoutId="cardHoverEffect"
							/>
						)}
					</AnimatePresence>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}

function ServicesMegaMenu({ data }: { data: SubmenuLink[] }) {
	const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);

	return (
		<li className="grid gap-5 p-2 lg:grid-cols-[1fr_.6fr]">
			<div className="space-y-3 p-3">
				<h5 className="font-display font-medium text-sm text-stone-400 uppercase">
					Explore
				</h5>
				<ul className="grid grid-cols-2">
					{data.map((menu) => (
						<ListItem
							hoveredIdx={hoveredIdx}
							href={menu.href}
							Icon={menu.Icon}
							key={menu.id}
							onMouseLeave={() => setHoveredIdx(null)}
							onMouseOver={() => setHoveredIdx(menu.label)}
							title={menu.label}
						>
							{menu.description}
						</ListItem>
					))}
				</ul>
			</div>
			<NavigationMenuLink asChild className="overflow-hidden rounded-xl">
				<Link
					className="relative flex h-full w-full select-none flex-col justify-end border bg-primary-900 p-4 no-underline outline-hidden transition-all duration-200 focus:shadow-md focus-visible:border-primary-600 md:p-6"
					href="/services"
					title="Explore our services"
				>
					{!hoveredIdx && (
						<div className="relative z-10 font-medium text-background text-lg">
							Services
						</div>
					)}
					<div className="absolute inset-x-0 bottom-0 z-9 h-1/4 bg-linear-to-t from-primary-900 to-transparent" />
					<AnimatePresence mode="wait">
						<motion.div
							animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
							className="absolute inset-0"
							exit={{ opacity: 0.5, x: -20, filter: "blur(10px)" }}
							initial={{ opacity: 0.5, x: 20, filter: "blur(10px)" }}
							key={hoveredIdx}
							transition={{ duration: 0.1, ease: "easeIn" }}
						>
							<Image
								alt="Service Image"
								className={cn("object-cover")}
								fill
								src={
									data.find((menu) => menu.label === hoveredIdx)?.image ||
									"/images/dubai-city.webp"
								}
							/>
						</motion.div>
					</AnimatePresence>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}

function ResourcesMegaMenu({ data }: { data: ResourcesSubmenu[] }) {
	return (
		<li className="grid font-display lg:grid-cols-[1fr_1fr]">
			{data.map((link) => (
				<div className="flex h-full flex-col p-2" key={link.id}>
					<small className="px-2 pb-1 font-display font-medium text-sm text-stone-400 uppercase">
						{link.id}
					</small>
					<div className="grid h-full grid-cols-2 gap-2">
						{link.links.map((link) => (
							<NavigationMenuLink asChild className="group" key={link.label}>
								<Link
									className="group relative flex aspect-4/3 h-full w-full flex-1 select-none flex-col justify-between overflow-hidden rounded-md border bg-primary-950 p-4 no-underline outline-hidden transition-all duration-200 hover:bg-primary-900 focus:shadow-md group-hover:border-primary-600 group-focus-visible:bg-primary-900 md:p-6"
									href={link.href}
									title="Explore our services"
								>
									<link.Icon className="relative z-10 size-7 text-primary-500 transition-colors group-hover:text-primary-400 group-focus-visible:text-primary-400" />
									<div className="relative z-10">
										<div className="font-medium text-card text-lg sm:mt-4">
											{link.label}
										</div>
										<p className="text-primary-200 text-sm leading-tight">
											{link.description}
										</p>
									</div>
									{link.image && (
										<Image
											alt={link.label}
											className="object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-110"
											fill
											src={link.image}
										/>
									)}
								</Link>
							</NavigationMenuLink>
						))}
					</div>
				</div>
			))}
		</li>
	);
}
