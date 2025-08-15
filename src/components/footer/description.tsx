'use client'

import Image from "next/image";

export default function Description(){
    return(
        <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#ffe6a7] mb-4">Hotel Name</h3>
            <p className="text-[#bb9457] leading-relaxed">
                Experience luxury and comfort in the heart of the city. Your perfect stay awaits with
                world-class amenities and exceptional service.
            </p>
            <div className="flex space-x-4 pt-2">
                <Image className={'cursor-pointer'} src={'/facebook.png'} width={20} height={20} alt={'instagram'} onClick={() => window.open('https://facebook.com/hotelname', '_blank')}></Image>
                <Image  className={'cursor-pointer'} src={'/instagram.png'} width={20} height={20} alt={'instagram'} onClick={() => window.open('https://instagram.com/hotelname', '_blank')}></Image>
            </div>
        </div>
    )
}