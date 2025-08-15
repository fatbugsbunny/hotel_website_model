import AmenitiesList from "@/app/rooms/components/amenitiesList";
import Link from "next/link";
import {Amenity} from "@/types";

export default function RoomFooter({amenities, isInHomePage} : Readonly<{ amenities: Amenity[], isInHomePage: boolean}>){
    return (
        <div className={`flex w-full justify-between text-[1.14rem]`}>
            <AmenitiesList amenities={amenities} className={'text-quinary'}/>
            <Link className={`transition py-4 px-7 rounded bg-primary text-tertiary font-medium  hover:bg-tertiary hover:text-primary`}
                  href={isInHomePage ? '/rooms' : '/contact'}>
                {isInHomePage ? 'See more' : 'Book now'}
            </Link>
        </div>
    )
}