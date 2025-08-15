'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Image from 'next/image'
import './mySwiper.css'

export default function RoomCarousel({photos} : Readonly<{ photos: string[] }>){
    return (
        <Swiper className={`my-swiper`} modules={[Navigation]} slidesPerView={1} navigation loop={true}>
            {photos.map((photo, i) => (
                <SwiperSlide key={i}>
                    <div className={`relative h-94 w-full`}><Image className={`object-cover`} src={photo} fill alt={`room image`}/></div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}