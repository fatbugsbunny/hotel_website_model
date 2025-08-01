import Image from "next/image";
import {Jost, Quicksand} from "next/font/google"
import Facility from "@/app/components/facility";
import HeroBanner from "@/app/components/heroBanner";

const jost = Jost({
    subsets: ["latin"]
})

const quicksand = Quicksand({
    subsets: ['latin']
})


const border = {boxShadow:'-40px -40px 0 -35px #824b24, 40px 40px 0 -35px #824b24'};


export default function HomePage() {
    return (
        <>
            <HeroBanner />

            <div className={`relative mt-[26vh]`}>
                <div className={`grid grid-cols-4 mt-[20vh] px-30 z-3`}>
                    <div className={` col-span-1 z-3 relative ${quicksand.className} self-center w-3/2 border-[#824b24] border-l-10 pl-2`}>
                        <p className={`uppercase text-[#cc7e46] font-[500] text-xl`}>Make. memories.</p>
                        <p className={`text-5xl capitalize text-tertiary mb-4.5`}>Experience luxury</p>
                        <p className={`text-xl font-[400] ${jost.className} text-`}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Amet animi aut consectetur ea neque nihil porro quidem repellat. Accusantium
                            aperiam at cupiditate dicta, ipsa iure molestias nisi non quam rem.Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Amet animi aut consectetur ea neque nihil porro quidem repellat. Accusantium
                            aperiam at cupiditate dicta, ipsa iure molestias nisi non quam rem. </p>
                    </div>
                    <div className={`col-span-3 relative pl-40 mt-3 left-17`}>
                        <div className={`relative w-65 h-85 -top-25 left-7 z-3`} style={border}>
                            <Image className={`object-cover  p-1`} src={`/interior2.jpg`} fill
                                   alt={`interior1`}/>
                            <div className={`absolute top-full -right-50 mt-17 w-75 h-45 z-3`} style={border}>
                                <Image className={`object-cover  p-1 `} src={`/interior2.jpg`} fill
                                       alt={`interior2`}/>
                            </div>
                        </div>

                        <div className={`absolute h-105 w-105 right-7 -top-32 z-3 `} style={border}>
                            <Image className={`object-cover  p-1`} src={`/interior1.jpg`} fill
                                   alt={`interior1`}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-3 place-items-center mt-50`}>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
            </div>
        </>

    );
}
