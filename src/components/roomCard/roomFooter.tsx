import AmenitiesList from "@/components/roomCard/amenitiesList";
import Link from "next/link";
import { Amenity } from "@/types";

export default function RoomFooter({
	amenities,
	isInHomePage,
	bookButton,
}: Readonly<{
	amenities: Amenity[];
	isInHomePage: boolean;
	bookButton: string;
}>) {
	return (
		<div className={`flex w-full ${isInHomePage ? "justify-center" : "justify-between"} flex-wrap md:text-[1.1rem] lg:text-[1.14rem]`}>
			<AmenitiesList amenities={amenities} className={"text-quinary"} />
			{!isInHomePage && (
				<Link href={"/contact"} className={`hover:bg-quinary mt-5 w-full rounded bg-[#832220] px-6.5 py-3.5 text-center font-medium text-white transition md:mt-0 md:w-auto lg:mt-0 lg:w-auto`}>
					{bookButton}
				</Link>
			)}
		</div>
	);
}
