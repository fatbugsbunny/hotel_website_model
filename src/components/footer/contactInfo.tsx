"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type { FooterContactInfo } from "@/types";

const handleAddressClick = () => {
	const address = "123 Luxury Avenue, Downtown District, New York, NY 10001";
	const encodedAddress = encodeURIComponent(address);
	window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
};

const handlePhoneClick = () => {
	window.open("tel:+1-555-123-4567", "_self");
};

export default function ContactInfo({ contactInfo }: Readonly<{ contactInfo: FooterContactInfo }>) {
	return (
		<div className="space-y-4">
			<h4 className="mb-4 text-lg font-semibold text-[#ffe6a7] capitalize">{contactInfo.heading}</h4>
			<div className="space-y-3">
				<div className="group flex cursor-pointer items-start space-x-3 transition-colors duration-200 hover:text-[#ffe6a7]" onClick={handleAddressClick}>
					<MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#99582a] group-hover:text-[#ffe6a7]" />
					<span className="text-sm leading-relaxed text-[#bb9457] group-hover:text-[#ffe6a7]">{contactInfo.address}</span>
				</div>

				<div className="group flex cursor-pointer items-center space-x-3 transition-colors duration-200 hover:text-[#ffe6a7]" onClick={handlePhoneClick}>
					<Phone className="h-5 w-5 text-[#99582a] group-hover:text-[#ffe6a7]" />
					<span className="text-sm text-[#bb9457] group-hover:text-[#ffe6a7]">{contactInfo.phoneNumber}</span>
				</div>

				<div className="flex items-center space-x-3">
					<Mail className="h-5 w-5 text-[#99582a]" />
					<span className="text-sm text-[#bb9457]">{contactInfo.email}</span>
				</div>
			</div>
		</div>
	);
}
