import Image from "next/image";

type contactInfo = Readonly<{
	className?: string;
	switchColor: boolean;
	img: string;
	heading: string;
	info: string;
}>;

export default function ContactInfo({ className, switchColor, img, heading, info }: contactInfo) {
	return (
		<div className={`mx-3 grid min-w-[94vw] grid-cols-4 self-center p-6 sm:min-w-[450px] lg:mx-0 lg:w-[28%] lg:min-w-[350px] ${className} ${switchColor ? "bg-primary text-tertiary" : "bg-tertiary text-primary"}`}>
			<Image className={`col-span-1`} src={img} width={`64`} height={`64`} alt={`Call icon`} />
			<div className={`col-span-3`}>
				<p className={`text-3xl`}>{heading}</p>
				<p className={`text-[1.35rem`}>{info}</p>
			</div>
		</div>
	);
}
