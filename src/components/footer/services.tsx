import {Car, Clock, Coffee, Waves} from "lucide-react";
import Link from "next/link";

export default function Services(){
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#ffe6a7] mb-4">Services & Hours</h4>
            <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-[#99582a]"/>
                    <span className="text-[#bb9457]">24/7 Front Desk</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Car className="w-4 h-4 text-[#99582a]"/>
                    <span className="text-[#bb9457]">Private Parking</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Coffee className="w-4 h-4 text-[#99582a]"/>
                    <span className="text-[#bb9457]">Room Service</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Waves className="w-4 h-4 text-[#99582a]"/>
                    <span className="text-[#bb9457]">Private Beach</span>
                </div>
            </div>

            <div className="pt-4">
                <Link href={'/contact'}
                      className="bg-[#99582a] text-[#ffe6a7] px-6 py-2 text-sm font-medium rounded hover:bg-[#6f1d1b] transition-colors duration-200">
                    Book Now
                </Link>
            </div>
        </div>
    )
}