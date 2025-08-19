'use client'

import { DisclosureButton } from "@headlessui/react";
import { AlignJustify, X } from "lucide-react";
import { MouseEventHandler } from "react";

export default function MobileMenuButton({
	onCollapse,
	isScrolled,
	isOpened,
}: Readonly<{
	onCollapse: MouseEventHandler<HTMLButtonElement>;
	isScrolled: boolean;
	isOpened: boolean;
}>) {
	return (
		<div className="lg:hidden">
			<DisclosureButton onClick={onCollapse} className={`text-primary focus:ring-primary focus:ring-2  focus:outline-none  hover:bg-primary/10 inline-flex items-center justify-center rounded-md p-2 transition-colors hover:text-[#ffdc84] ${isScrolled ? "text-[1.2rem]" : "text-xl"}`}>
				<span className="sr-only">Open main menu</span>
				{isOpened ? <X height={30} width={30} /> : <AlignJustify />}
			</DisclosureButton>
		</div>
	);
}