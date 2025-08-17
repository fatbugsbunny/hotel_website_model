"use client";

import Image from "next/image";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, AlignJustify } from "lucide-react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

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
	const [isCollapse, setIsCollapse] = useState(false);

	useEffect(() => {
		setIsScrolled(isCollapse || window.scrollY > 75);

		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(isCollapse || scrollTop > 75); // Change background after 50px scroll
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isCollapse]);

	return (
		<Disclosure as="nav" className={`text-primary fixed top-0 z-50 w-full transition-all ${quicksand.className} font-[370] ${isScrolled ? "bg-secondary shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
			{({ open }) => (
				<>
					<div className="px-4 sm:px-6 lg:px-20">
						<div className={`flex items-center justify-between py-3 transition-all`}>
							{/* Logo */}
							<div className={`${isScrolled ? "h-13 w-21" : "h-14 w-23"} relative transition-all`}>
								<Image fill src="/logo.png" className="object-cover" alt="Logo" />
							</div>

							{/* Desktop Navigation */}
							<ul className={`hidden items-center space-x-24 lg:flex ${isScrolled ? "text-[1.2rem]" : "text-xl"}`}>
								{navItems.map((item, i) => (
									<li className="relative capitalize transition hover:text-[#ffdc84]" key={i}>
										<Link href={item.href}>{item.label}</Link>
										<span className={`bg-primary absolute right-1/2 -bottom-2 h-0.5 translate-x-1/2 transition-all ease-out ${pathName === item.href ? "w-full" : "w-0"}`} />
									</li>
								))}
								<li className="capitalize hover:text-[#ffdc84]">Language</li>
							</ul>

							{/* Mobile menu button */}
							<div className="lg:hidden">
								<DisclosureButton onClick={() => setIsCollapse(!isCollapse)} className={`text-primary hover:bg-primary/10  inline-flex items-center justify-center rounded-md p-2  transition-colors  hover:text-[#ffdc84] ${isScrolled ? "text-[1.2rem]" : "text-xl"}`}>
									<span className="sr-only">Open main menu</span>
									{open ? <X height={30} width={30} /> : <AlignJustify />}
								</DisclosureButton>
							</div>
						</div>
					</div>

					{/* Mobile Navigation Menu */}
					<DisclosurePanel className="lg:hidden">
						<div className={`space-y-1 px-4 pt-2 pb-3 ${isScrolled ? "bg-secondary/95 border-primary/10 border-t backdrop-blur-md" : "bg-black/90 backdrop-blur-md"}`}>
							{navItems.map((item, i) => (
								<DisclosureButton onClick={() => setIsCollapse(false)} key={i} as={Link} href={item.href} className={`block px-3 py-2 text-base font-medium capitalize transition-colors hover:text-[#ffdc84] ${pathName === item.href ? "border-l-2 border-[#ffdc84] text-[#ffdc84]" : "text-primary"}`}>
									{item.label}
								</DisclosureButton>
							))}
							<DisclosureButton as="button" className="text-primary block px-3 py-2 text-base font-medium capitalize transition-colors hover:text-[#ffdc84]">
								Language
							</DisclosureButton>
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
