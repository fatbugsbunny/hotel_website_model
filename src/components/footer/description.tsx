"use client";

import Image from "next/image";

export default function Description({ description }: Readonly<{ description: string }>) {
	return (
		<div className="space-y-4">
			<h3 className="mb-4 text-2xl font-bold text-[#ffe6a7]">Hotel Name</h3>
			<p className="leading-relaxed text-[#bb9457]">{description}</p>
			<div className="flex space-x-4 pt-2">
				<Image className={"cursor-pointer"} src={"/facebook.png"} width={20} height={20} alt={"instagram"} onClick={() => window.open("https://facebook.com/hotelname", "_blank")}></Image>
				<Image className={"cursor-pointer"} src={"/instagram.png"} width={20} height={20} alt={"instagram"} onClick={() => window.open("https://instagram.com/hotelname", "_blank")}></Image>
			</div>
		</div>
	);
}
