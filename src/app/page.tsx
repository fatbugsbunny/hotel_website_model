import Image from "next/image";
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
    subsets: ['latin']
})

export default function Home() {
    return (
        <div className={`relative h-[80vh]`}>
            <Image src="/hotel-hero-photo.jpg" alt="Landing page" fill priority className="object-cover brightness-65 "></Image>
            <div className={`absolute left-1/2 top-1/2 -translate-1/2 text-center ${montserrat.className} text-gray-200`}>
                <p className={`py-1 text-[1.3rem] `}>Welcome To</p>
                <p className={`py-1 text-7xl  text-shadow-`}>HOTEL NAME</p>
                <p className={`py-1 text-[1.4rem] `}>Memories That Last Forever</p>
                <p className={`py-1  `}>☆ ☆ ☆ ☆</p>
            </div>
        </div>
    );
}
