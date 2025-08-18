import Link from "next/link";

export default function DesktopMenu({
	navItems,
	pathName,
	isScrolled,
}: Readonly<{
	navItems: { href: string; label: string }[];
	pathName: string;
	isScrolled: boolean;
}>) {
	return (
		<ul className={`hidden items-center space-x-24 lg:flex ${isScrolled ? "text-[1.2rem]" : "text-xl"}`}>
			{navItems.map((item, i) => (
				<li className="relative capitalize transition hover:text-[#ffdc84]" key={i}>
					<Link href={item.href}>{item.label}</Link>
					<span className={`bg-primary absolute right-1/2 -bottom-2 h-0.5 translate-x-1/2 transition-all ease-out ${pathName === item.href ? "w-full" : "w-0"}`} />
				</li>
			))}
			<li className="capitalize hover:text-[#ffdc84]">Language</li>
		</ul>
	);
}
