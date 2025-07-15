'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper/modules";
import Image from 'next/image'

type Room = Readonly<{
    className?: string,
    photos: string[],
    name: string,
    amenities: string[],
    isInHomePage: boolean,
}>

export default function Room({className, photos, name, amenities, isInHomePage}: Room) {
    return (
        <div className={className}>
            {isInHomePage ?
                <div className={`relative w-20 h-20`}><Image src={photos[0]} fill alt={`room image`}/></div>
                :
                <Swiper modules={[Navigation]} slidesPerView={1} navigation>
                    {photos.map((photo, i) => (
                        <SwiperSlide key={i}> <Image className={`object-cover`} src={photo} fill
                                                     alt={`room image`}/></SwiperSlide>
                    ))}
                </Swiper>
            }
            <p>{name}</p>

            {amenities.map((amenity, i) => (<span key={i}>{amenity}</span>))}

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque eum mollitia neque
                temporibus, voluptas? Amet blanditiis laboriosam laborum odio quam quis tempore. Aliquam dolorem
                facilis maxime quibusdam totam. Odio?</p>

            {isInHomePage ? <button><a>See more</a></button> : <button><a>Book now</a></button>}
        </div>
    )
}