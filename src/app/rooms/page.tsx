import RoomCard from "@/components/roomCard";
import HeroSection from "@/components/heroSection";
import {Room} from '@/types'

const rooms: Room[] = [
    {id: 1, name: 'Double Room', photos: ['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg'], amenities: [{id:0, name:'Tv, ', img:'/monitor.png'},{id:1,name:'Personal wifi, ', img:'/wi-fi-icon.png'},{id:2, name:'Sea view, ', img:'/tsunami.png' }], isInHomePage: false},
    {id: 2, name: 'Double Room', photos: ['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg'], amenities: [{id:0, name:'Tv, ', img:'/monitor.png'},{id:1,name:'Personal wifi, ', img:'/wi-fi-icon.png'},{id:2, name:'Sea view, ', img:'/tsunami.png' }], isInHomePage: false},
    {id: 3, name: 'Double Room', photos: ['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg'], amenities: [{id:0, name:'Tv, ', img:'/monitor.png'},{id:1,name:'Personal wifi, ', img:'/wi-fi-icon.png'},{id:2, name:'Sea view, ', img:'/tsunami.png' }], isInHomePage: false},
    {id: 4, name: 'Double Room', photos: ['/interior1.jpg','/interior2.jpg','/hotel-hero-photo.jpg'], amenities: [{id:0, name:'Tv, ', img:'/monitor.png'},{id:1,name:'Personal wifi, ', img:'/wi-fi-icon.png'},{id:2, name:'Sea view, ', img:'/tsunami.png' }], isInHomePage: false},
]

export default function RoomsPage() {
    return (
        <>
            <HeroSection text={`Rooms & Suites`}></HeroSection>
            <div className={`grid grid-cols-2 gap-10 gap-x-6 mt-[10vh] px-20`}>
                {rooms.map((room: Room) => (
                    <RoomCard id={room.id} photos={room.photos} name={room.name} amenities={room.amenities} isInHomePage={room.isInHomePage} key={room.id}/>
                ))}
            </div>
        </>
    )
}