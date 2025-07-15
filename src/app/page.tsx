import Image from "next/image";
import {Montserrat} from "next/font/google"
import Facility from "@/app/components/facility";

const montserrat = Montserrat({
    subsets: ['latin']
})

export default function Home() {
    return (
        <>
            <div className={`relative h-[80vh]`}>
                <Image src="/hotel-hero-photo.jpg" alt="Landing page" fill priority className="object-cover brightness-65"></Image>
                <div className={`absolute left-1/2 top-1/2 -translate-1/2 text-center ${montserrat.className} text-gray-200`}>
                    <p className={`py-1 text-[1.3rem]`}>Welcome To</p>
                    <p className={`py-1 text-7xl`}>HOTEL NAME</p>
                    <p className={`py-1 text-[1.4rem]`}>Memories That Last Forever</p>
                    <p className={`py-1`}>☆ ☆ ☆ ☆</p>
                </div>
            </div>

            <div className={`grid grid-cols-3 place-items-center pt-[20vh]`}>
                <Image className={``} src={`/interior1.jpg`} width={`340`} height={`340`} alt={`interior1`}></Image>
                <div className={``}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aut consectetur ea neque nihil porro quidem repellat. Accusantium aperiam at cupiditate dicta, ipsa iure molestias nisi non quam rem.</p>
                </div>
                <Image className={``} src={`/interior2.jpg`} width={`340`} height={`340`} alt={`interior2`}></Image>
            </div>




        </>

    );
}
