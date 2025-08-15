'use client'

import {Room} from "@/types";
import {Quicksand} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import './mySwiper.css'
import AmenitiesList from "@/app/rooms/components/amenitiesList";

const quicksand = Quicksand({
    subsets: ['latin']
})

const rooms: Room[] = [
    {
        id: 1,
        name: 'Double Room',
        photos: ['/interior1.jpg', '/interior2.jpg', '/hotel-hero-photo.jpg'],
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
        photos: ['/interior1.jpg', '/interior2.jpg', '/hotel-hero-photo.jpg'],
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
        photos: ['/interior1.jpg', '/interior2.jpg', '/hotel-hero-photo.jpg'],
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
        photos: ['/interior1.jpg', '/interior2.jpg', '/hotel-hero-photo.jpg'],
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
        <div className={`mt-30 mb-150 grid justify-items-center ${quicksand.className}`}>
            <p className={`capitalize text-center text-4xl text-tertiary ${quicksand.className}`}>- rooms & suites -</p>
            <Swiper  className={`my-swiper w-full mt-20`} modules={[Navigation]} slidesPerView={3} navigation loop={true}>
                {rooms.map((room, i) => (
                    <SwiperSlide key={i} >
                        <div className={`grid justify-items-center`}>
                            <div className={`relative w-[450px] h-[400px]`}>
                                <Image src={room.photos[0]} alt={'interior'} fill className={`outline-3 p-2 mt-1 outline-tertiary relative object-cover`}/>
                                <AmenitiesList amenities={room.amenities} className={`w-[96.5%] absolute bottom-1 left-2 bg-primary/70 text-gray-600 justify-center`}></AmenitiesList>
                            </div>
                            <p className={'text-2xl text-tertiary text-center p-3 capitalize  w-[450px]'}>{room.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link href={`/rooms`} className={'transition py-3 px-7 rounded bg-primary text-tertiary text-[1.1rem] font-medium  hover:bg-tertiary hover:text-primary justify-self-center mt-10'}>See more</Link>
        </div>
    )
}