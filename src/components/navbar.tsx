import Image from "next/image";
import {Quicksand} from "next/font/google"
import Link from "next/link";

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function Navbar() {
    return (
        <nav className={`flex justify-between sticky top-0 z-50 w-full py-4 px-20 bg-secondary text-primary ${quicksand.className} font-[370] py-4.5`}>
            <a><Image width="35" height="35" src="file.svg" className="" alt="Logo"></Image></a>
            <ul className="flex space-x-24 items-center text-[1.15rem]">
                <li className={`hover:text-[#ffdc84]`}><Link href={`/`}>Home</Link></li>
                <li className={`hover:text-[#ffdc84]`}><Link href={`/rooms`}>Rooms & Suites</Link></li>
                <li className={`hover:text-[#ffdc84]`}><Link href={`/gallery`}>Gallery</Link></li>
                <li className={`hover:text-[#ffdc84]`}><Link href={`/contact`}>Contact us</Link></li>
                <li className={`hover:text-[#ffdc84]`}><a>Language</a></li>
            </ul>
        </nav>
    );
}