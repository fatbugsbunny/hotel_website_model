import Image from "next/image";
import {Montserrat} from "next/font/google";


const montserrat = Montserrat({
    subsets: ['latin']
})


export default function HeroSection({text}: Readonly<{ text: string }>) {
    return(
        <div className={`relative h-[65vh] z-10`}>
        <Image src="/hotel-hero-photo.jpg" alt="Landing page" fill priority
               className="object-cover brightness-60"/>
        <div
            className={`absolute left-1/2 top-1/2 -translate-1/2 text-center ${montserrat.className} text-gray-200`}>
            <Image className={`mx-auto`} src={`/line.png`} width={`140`} height={`20`} alt={`line art`}/>
            <p className={`py-1 text-6xl`}>{text}</p>
            <p className={`py-1`}>☆ ☆ ☆ ☆</p>
        </div>
    </div>
    )
}