import Image from "next/image";
import {Montserrat} from "next/font/google";
import Room from "@/components/room";

const montserrat = Montserrat({
    subsets: ['latin']
})

export default function Rooms() {
    return (
        <>
        <div className={`relative h-[40vh]`}>
            <Image src="/hotel-hero-photo.jpg" alt="Landing page" fill priority className="object-cover brightness-60"/>
            <div
                className={`absolute left-1/2 top-1/2 -translate-1/2 text-center ${montserrat.className} text-gray-200`}>
                <p className={`py-1 text-6xl`}>ROOMS & SUITES</p>
                <p className={`py-1`}>☆ ☆ ☆ ☆</p>
            </div>
        </div>
        <div className={`grid grid-cols-3 gap-6 pt-[10vh] px-20`}>
            <Room name={`Double room`} amenities={['tv','personal wifi','sea view']} isInHomePage={false} photos={['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg']}></Room>
            <Room name={`Double room`} amenities={['tv','personal wifi','sea view']} isInHomePage={false} photos={['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg']}></Room>
            <Room name={`Double room`} amenities={['tv','personal wifi','sea view']} isInHomePage={false} photos={['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg']}></Room>
            <Room name={`Double room`} amenities={['tv','personal wifi','sea view']} isInHomePage={false} photos={['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg']}></Room>
            <Room name={`Double room`} amenities={['tv','personal wifi','sea view']} isInHomePage={false} photos={['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg']}></Room>
            <Room name={`Double room`} amenities={['tv','personal wifi','sea view']} isInHomePage={false} photos={['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg']}></Room>
        </div>
        </>
    )
}