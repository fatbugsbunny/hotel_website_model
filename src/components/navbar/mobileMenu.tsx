"use client";

import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { LanguageSwitcher } from "@/components/navbar/languageSwitcher";
import type { Navbar } from "@/types";

export default function MobileMenu({
	nav,
	pathName,
	onPathChange,
}: Readonly<{
	nav: Navbar;
	pathName: string;
	onPathChange: MouseEventHandler<HTMLAnchorElement>;
}>) {
	return (
		<DisclosurePanel className="lg:hidden">
			<div className={`bg-secondary/95 border-primary/10 space-y-1 border-t px-4 pt-2 pb-3 backdrop-blur-md`}>
				{nav.navItems.map((item) => (
					<DisclosureButton onClick={onPathChange} key={item.label} as={Link} href={item.href} className={`block px-3 py-2 text-base font-medium capitalize transition-colors hover:text-[#ffdc84] ${pathName === item.href ? "border-l-2 border-[#ffdc84] text-[#ffdc84]" : "text-primary"}`}>
						{item.label}
					</DisclosureButton>
				))}
				<LanguageSwitcher className={"text-primary block px-3 py-2 text-base font-medium capitalize transition-colors hover:text-[#ffdc84]"} text={nav.language} />
			</div>
		</DisclosurePanel>
	);
}
