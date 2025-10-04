import Image from "next/image";

export default function Facility({
	facility,
	icon,
	switchColor,
}: Readonly<{
	facility: string;
	icon: string;
	switchColor?: boolean;
}>) {
	return (
		<div className={`${switchColor ? "bg-primary text-tertiary" : "bg-tertiary text-primary"} grid w-full grid-cols-1 items-center p-2 transition duration-250 hover:-translate-y-1/16 hover:shadow-xl`}>
			<div className={`${switchColor ? "border-tertiary" : "border-primary"} border-2 p-2`}>
				<Image src={icon} width={`64`} height={`64`} alt={`facility icon`} className={`mx-auto`}></Image>
				<p className={`text-center text-xl capitalize`}>{facility}</p>
			</div>
		</div>
	);
}
