"use client";

import { Quicksand } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import MobileMenu from "@/components/navbar/mobileMenu";
import DesktopMenu from "@/components/navbar/desktopMenu";
import Logo from "@/components/navbar/logo";
import MobileMenuButton from "@/components/navbar/mobileMenuButton";

const quicksand = Quicksand({
	subsets: ["latin"],
});

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/rooms", label: "Rooms" },
	{ href: "/contact", label: "Contact" },
	{ href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
	const pathName = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);

	useEffect(() => {
		setIsScrolled(isCollapsed || window.scrollY > 75);

		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(isCollapsed || scrollTop > 75); // Change background after 50px scroll
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isCollapsed]);

	return (
		<Disclosure as="nav" className={`text-primary fixed top-0 z-50 w-full transition-all ${quicksand.className} font-[370] ${isScrolled ? "bg-secondary shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
			{({ open }) => (
				<>
					<div className="px-4 sm:px-6 lg:px-20">
						<div className={`flex items-center justify-between py-3 transition-all`}>
							<Logo isScrolled={isScrolled} />

							<DesktopMenu pathName={pathName} navItems={navItems} isScrolled={isScrolled} />

							<MobileMenuButton onCollapse={() => setIsCollapsed(!isCollapsed)} isScrolled={isScrolled} isOpened={open} />
						</div>
					</div>

					<MobileMenu pathName={pathName} navItems={navItems} onPathChange={() => setIsCollapsed(false)} />
				</>
			)}
		</Disclosure>
	);
}
