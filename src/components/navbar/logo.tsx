import Image from "next/image";

export default function Logo({ isScrolled }: Readonly<{ isScrolled: boolean }>) {
	return (
		<div className={`${isScrolled ? "h-13 w-21" : "h-14 w-23"} relative transition-all`}>
			<Image fill src="/logo.png" className="object-cover" alt="Logo" />
		</div>
	);
}
