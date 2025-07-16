import Image from "next/image";
import {Jost} from "next/font/google"
import Link from "next/link";

const jost = Jost({
    subsets: ["latin"]
})

export default function Navbar() {
    return (
        <nav className={`flex justify-between sticky top-0 z-10 w-full py-4 px-20 bg-secondary text-primary ${jost.className}`}>
            <a><Image width="35" height="35" src="file.svg" className="" alt="Logo"></Image></a>
            <ul className="flex space-x-24 items-center text-[1.15rem]">
                <li className={`text-shadow-lg text-shadow-zinc-800`}><Link href={`/`}>Home</Link></li>
                <li className={`text-shadow-lg text-shadow-zinc-800`}><Link href={`/rooms`}>Rooms & Suites</Link></li>
                <li className={`text-shadow-lg text-shadow-zinc-800`}><Link href={`/gallery`}>Gallery</Link></li>
                <li className={`text-shadow-lg text-shadow-zinc-800`}><Link href={`/contact`}>Contact us</Link></li>
                <li className={`text-shadow-lg text-shadow-zinc-800`}><a>Language</a></li>
            </ul>
        </nav>
    );
}