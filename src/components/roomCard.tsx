import Image from 'next/image'
import {Jost} from "next/font/google";
import {Room} from '@/types'
import Link from 'next/link';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import RoomCarousel from "@/app/rooms/components/roomCarousel";
import RoomFooter from "@/app/rooms/components/roomFooter";

const jost = Jost({
    subsets: ["latin"]
})

export default function RoomCard({className, photos, name, amenities, isInHomePage}: Room) {
    return (
        <div className={`${className} shadow-2xl mx-0 p-3 transition ease-in  hover:shadow-zinc-500`}>
            {isInHomePage ?
                <div className={`relative w-20 h-20`}><Image src={photos[0]} fill alt={`room image`}/></div>
                :
                <RoomCarousel photos={photos}/>
            }

            <div className={`${jost.className} grid grid-cols-1 justify-items-start p-5 font-[400] leading-[1.5]`}>
                <p className={`text-[2.2rem] text-quinary ${jost.className} font-light`}>{name}</p>
                <p className={`mb-4 text-[1.14rem]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto
                    atque eum mollitia neque
                    temporibus, voluptas? Amet blanditiis laboriosam laborum odio quam quis tempore. Aliquam dolorem
                    facilis maxime quibusdam totam. Odio?</p>

                <RoomFooter amenities={amenities} isInHomePage={isInHomePage}/>
            </div>
        </div>
    )
}