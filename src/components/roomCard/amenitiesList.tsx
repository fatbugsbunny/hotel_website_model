import {Amenity} from "@/components/roomCard/types";
import AmenityItem from "@/components/roomCard/amenityItem";

export default function AmenitiesList({amenities, className}: Readonly<{ amenities: Amenity[], className?:string }>) {
    return (
        <div className={`${className} flex space-x-3  font-medium`}>
            {amenities.map((amenity) => (
                <AmenityItem key={amenity.id} amenity={amenity}/>))}
        </div>
    )
}