import { Amenity } from "@/types";
import AmenityItem from "@/components/roomCard/amenityItem";

export default function AmenitiesList({
	amenities,
	className,
}: Readonly<{
	amenities: Amenity[];
	className?: string;
}>) {
	return (
		<div className={`${className} flex flex-wrap justify-center space-x-3 text-center font-medium`}>
			{amenities.map((amenity) => (
				<AmenityItem key={amenity.id} amenity={amenity} />
			))}
		</div>
	);
}
