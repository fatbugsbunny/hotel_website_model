import {Amenity} from "@/types";
import AmenityItem from "@/app/rooms/components/amenityItem";

export default function AmenitiesList({amenities}: Readonly<{ amenities: Amenity[] }>) {
    return (
        <div className={`flex space-x-3 text-quinary font-medium`}>
            {amenities.map((amenity) => (
                <AmenityItem key={amenity.id} amenity={amenity}/>))}
        </div>
    )
}