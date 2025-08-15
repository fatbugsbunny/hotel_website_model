import {Amenity} from "@/components/roomCard/types";
import Image from "next/image";

export default function AmenityItem({amenity}: Readonly<{ amenity: Amenity }>) {
    return (
        <span className={`flex justify-center items-center space-x-2`}>
            <Image src={amenity.img} width={18} height={18} alt={amenity.name}/>
            <p>{`${amenity.name}`}</p>
        </span>
    )

}

