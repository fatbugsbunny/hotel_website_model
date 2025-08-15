import AmenitiesList from "@/components/roomCard/amenitiesList";
import Link from "next/link";
import {Amenity} from "@/components/roomCard/types";

export default function RoomFooter({amenities, isInHomePage} : Readonly<{ amenities: Amenity[], isInHomePage: boolean}>){
    return (
        <div className={`flex w-full ${isInHomePage ? 'justify-center': 'justify-between'} text-[1.14rem]`}>
            <AmenitiesList amenities={amenities} className={'text-quinary '}/>
            {!isInHomePage && <Link href={'/contact'} className={`transition py-4 px-7 rounded bg-primary text-tertiary font-medium  hover:bg-tertiary hover:text-primary`}>Book Now</Link>}
        </div>
    )
}