'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper/modules";
import Image from 'next/image'
import Link from "next/link";
import {Jost} from "next/font/google";
import {Room} from '@/types'

const jost = Jost({
    subsets: ["latin"]
})

export default function RoomCard({className, photos, name, amenities, isInHomePage}: Room) {
    return (
        <div className={`${className} shadow-2xl mx-0 p-3 transition ease-in  hover:shadow-zinc-500`}>
            {isInHomePage ?
                <div className={`relative w-20 h-20`}><Image src={photos[0]} fill alt={`room image`}/></div>
                :
                <Swiper className={``} modules={[Navigation]} slidesPerView={1} navigation loop={true}>
                    {photos.map((photo, i) => (
                        <SwiperSlide key={i}>
                            <div className={`relative h-94 w-full`}><Image className={`object-cover`} src={photo} fill
                                                                           alt={`room image`}/></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
            <div className={`${jost.className} grid grid-cols-1 justify-items-start p-5 font-[400] leading-[1.5]`}>
                <p className={`text-[2.2rem] text-quinary ${jost.className} font-light`}>{name}</p>


                <p className={`mb-4 text-[1.14rem]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                    atque eum mollitia neque
                    temporibus, voluptas? Amet blanditiis laboriosam laborum odio quam quis tempore. Aliquam dolorem
                    facilis maxime quibusdam totam. Odio?</p>

                <div className={`flex w-full justify-between text-[1.14rem]`}>
                    <div className={`flex space-x-3 text-quinary font-medium`}>
                        {amenities.map((amenity) => (
                            <span className={`flex justify-center items-center space-x-2`}
                                  key={amenity.id}> <Image src={amenity.img} width={18} height={18}
                                                           alt={amenity.name}/> <p>{`${amenity.name}`}</p></span>))}
                    </div>
                    {isInHomePage ? <Link className={``} href='/rooms'>See more</Link> : <Link
                        className={`transition py-4 px-7 rounded bg-primary text-tertiary font-medium  hover:bg-tertiary hover:text-primary `}
                        href='/contact'>Book now</Link>}
                </div>
            </div>
        </div>
    )
}