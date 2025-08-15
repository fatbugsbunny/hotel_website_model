'use client'

import {Room} from "@/components/roomCard/types";
import {Quicksand} from "next/font/google";
import Link from "next/link";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import './home-swiper.css'
import RoomCard from "@/components/roomCard/roomCard";

const quicksand = Quicksand({
    subsets: ['latin']
})

const rooms: Room[] = [
    {
        id: 1,
        name: 'Double Room',
        photos: ['/room5.jpg', '/room2.jpg', '/room3.jpg', '/room4.jpg'],
        amenities: [{id: 0, name: 'Tv ', img: '/monitor.png'}, {
            id: 1,
            name: 'Personal wifi ',
            img: '/wi-fi-icon.png'
        }, {id: 2, name: 'Sea view ', img: '/tsunami.png'}],
        isInHomePage: false
    },
    {
        id: 2,
        name: 'Double Room',
        photos: ['/room5.jpg', '/room2.jpg', '/room3.jpg', '/room4.jpg'],
        amenities: [{id: 0, name: 'Tv ', img: '/monitor.png'}, {
            id: 1,
            name: 'Personal wifi ',
            img: '/wi-fi-icon.png'
        }, {id: 2, name: 'Sea view ', img: '/tsunami.png'}],
        isInHomePage: false
    },
    {
        id: 3,
        name: 'Double Room',
        photos: ['/room5.jpg', '/room2.jpg', '/room3.jpg', '/room4.jpg'],
        amenities: [{id: 0, name: 'Tv ', img: '/monitor.png'}, {
            id: 1,
            name: 'Personal wifi ',
            img: '/wi-fi-icon.png'
        }, {id: 2, name: 'Sea view ', img: '/tsunami.png'}],
        isInHomePage: false
    },
    {
        id: 4,
        name: 'Double Room',
        photos: ['/room5.jpg', '/room2.jpg', '/room3.jpg', '/room4.jpg'],
        amenities: [{id: 0, name: 'Tv ', img: '/monitor.png'}, {
            id: 1,
            name: 'Personal wifi ',
            img: '/wi-fi-icon.png'
        }, {id: 2, name: 'Sea view ', img: '/tsunami.png'}],
        isInHomePage: false
    },
]

export default function RoomsSummary() {
    return (

        <div className={`my-30 relative grid justify-items-center ${quicksand.className}`}>
            <p className={`capitalize text-center text-4xl text-tertiary ${quicksand.className}`}>- rooms & suites -</p>

            <div className={'absolute top-1/2 -translate-y-1/2 h-60 bg-quinary w-full'}></div>

            <Swiper className={`home-swiper w-full mt-10`} modules={[Navigation,Autoplay]} autoplay={{delay: 5000, disableOnInteraction:true}} slidesPerView={3} navigation pagination={{clickable: true}} loop={true}>
                {rooms.map((room, i) => (
                    <SwiperSlide key={i}>
                        <RoomCard className={'mx-5 mb-15 '} dimensions={'h-70 w-full'} id={room.id} photos={room.photos}
                                  name={room.name} amenities={room.amenities} isInHomePage={true}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link href={`/rooms`}
                  className={'transition py-3 px-7 rounded bg-primary text-tertiary text-[1.1rem] font-medium  hover:bg-tertiary hover:text-primary justify-self-center '}>See
                more</Link>
        </div>
    )
}