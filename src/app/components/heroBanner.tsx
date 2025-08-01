import {Montserrat} from "next/font/google";
import Image from 'next/image'

const montserrat = Montserrat({
    subsets: ['latin']
})

export default function HeroBanner() {
    return (
        <div className={`relative h-[90vh]`}>
            <Image src="/hotel-hero-photo.jpg" alt="Landing page" fill priority
                   className="object-cover brightness-65"/>
            <div
                className={`absolute left-1/2 top-1/2 -translate-1/2 text-center ${montserrat.className} text-gray-200`}>
                <p className={`py-1 text-[1.3rem]`}>Welcome To</p>
                <p className={`py-1 text-7xl`}>HOTEL NAME</p>
                <p className={`py-1 text-[1.4rem]`}>Memories That Last Forever</p>
                <p className={`py-1`}>☆ ☆ ☆ ☆</p>
            </div>
        </div>
    )
}