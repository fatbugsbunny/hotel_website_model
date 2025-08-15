import Link from "next/link";

export default function QuickLinks(){
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#ffe6a7] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
                <li><Link href="/public"
                          className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors duration-200">Home</Link>
                </li>
                <li><Link href="/rooms"
                          className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors duration-200">Rooms
                    & Suites</Link></li>
                <li><Link href="/contact"
                          className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors duration-200">Contact
                    Us</Link></li>
                <li><Link href="/gallery"
                          className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors duration-200">Gallery</Link>
                </li>
            </ul>
        </div>
    )
}