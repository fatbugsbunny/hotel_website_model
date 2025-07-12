import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-[#ffe6a7] w-full py-4 px-20 text-gray-800">
            <a><Image width="35" height="35" src="file.svg" className="" alt="Logo"></Image></a>

            <ul className="flex space-x-24 items-center">
                <li className=""><a>Home</a></li>
                <li><a>Rooms & Suites</a></li>
                <li><a>Gallery</a></li>
                <li><a>Contact us</a></li>
                <li><a>Language</a></li>
            </ul>
        </nav>
    );
}