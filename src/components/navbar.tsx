'use client'

import Image from "next/image";
import {Quicksand} from "next/font/google"
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

const quicksand = Quicksand({
    subsets: ['latin']
})

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
    const pathName = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 75); // Change background after 50px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`flex justify-between fixed top-0 z-50 w-full px-20  transition-all  text-primary ${quicksand.className} font-[370] py-4.5 ${
                isScrolled
                    ? 'bg-secondary backdrop-blur-md shadow-lg text-[1.2rem]'
                    : 'bg-transparent text-xl'
            }`}>
            <div className={`${isScrolled ? 'h-13 w-21' : 'h-14 w-23'} relative transition-all`}>
                <Image fill src="/logo.png" className="object-cover" alt="Logo"></Image>
            </div>
            <ul className="flex space-x-24 items-center ">
                {navItems.map((item, i) => (
                    <li className={`capitalize relative transition hover:text-[#ffdc84]`} key={i}>
                        <Link href={item.href}>{item.label}</Link>
                        <span
                            className={`absolute -bottom-2 right-1/2 translate-x-1/2 transition-all h-0.5 ease-out bg-primary ${pathName == item.href ? 'w-full' : 'w-0'}`}></span>
                    </li>
                ))}
                <li className={`capitalize hover:text-[#ffdc84]`}>Language</li>
            </ul>
        </nav>
    );
}