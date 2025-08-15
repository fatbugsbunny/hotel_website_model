'use client'

import {Mail, MapPin, Phone} from "lucide-react";

const handleAddressClick = () => {
    const address = "123 Luxury Avenue, Downtown District, New York, NY 10001";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
};

const handlePhoneClick = () => {
    window.open('tel:+1-555-123-4567', '_self');
};

export default function ContactInfo(){
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#ffe6a7] mb-4">Contact Us</h4>
            <div className="space-y-3">
                <div className="flex items-start space-x-3 cursor-pointer hover:text-[#ffe6a7] transition-colors duration-200 group"
                    onClick={handleAddressClick}>
                    <MapPin className="w-5 h-5 text-[#99582a] group-hover:text-[#ffe6a7] flex-shrink-0 mt-0.5"/>
                    <span className="text-[#bb9457] group-hover:text-[#ffe6a7] text-sm leading-relaxed">
                        123 Luxury Avenue<br/>
                        Downtown District<br/>
                        New York, NY 10001
                    </span>
                </div>

                <div className="flex items-center space-x-3 cursor-pointer hover:text-[#ffe6a7] transition-colors duration-200 group"
                    onClick={handlePhoneClick}>
                    <Phone className="w-5 h-5 text-[#99582a] group-hover:text-[#ffe6a7]"/>
                    <span className="text-[#bb9457] group-hover:text-[#ffe6a7] text-sm">+1 (555) 123-4567</span>
                </div>

                <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#99582a]"/>
                    <span className="text-[#bb9457] text-sm">reservations@hotelName.com</span>
                </div>
            </div>
        </div>
    )
}