import Link from "next/link";
import { LanguageSwitcher } from "@/components/navbar/languageSwitcher";
import type { Navbar } from "@/types";

export default function DesktopMenu({
	nav,
	pathName,
	isScrolled,
}: Readonly<{
	nav: Navbar;
	pathName: string;
	isScrolled: boolean;
}>) {


	return (
		<ul className={`hidden items-center space-x-24 lg:flex ${isScrolled ? "text-[1.2rem]" : "text-xl"}`}>
			{nav.navItems.map((item) => (
				<li className="relative capitalize transition hover:text-[#ffdc84]" key={item.label}>
					<Link href={item.href}>{item.label}</Link>
					<span className={`bg-primary absolute right-1/2 -bottom-2 h-0.5 translate-x-1/2 transition-all ease-out ${pathName === item.href ? "w-full" : "w-0"}`} />
				</li>
			))}
			<li className="capitalize hover:text-[#ffdc84]">
				<LanguageSwitcher text={nav.language} />
			</li>
		</ul>
	);
}
