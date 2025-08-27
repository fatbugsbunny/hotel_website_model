import Image from "next/image";
import { Jost } from "next/font/google";
import { Room } from "@/types";
import RoomCarousel from "@/components/roomCard/roomCarousel";
import RoomFooter from "@/components/roomCard/roomFooter";

const jost = Jost({
	subsets: ["latin"],
});

export default function RoomCard({
	className,
	cardDimensions,
	isInHomePage,
	bookButton,
	locale,
	room,
}: Readonly<{
	className?: string;
	cardDimensions?: string;
	locale: string;
	isInHomePage: boolean;
	bookButton: string;
	room: Room;
}>) {
	return (
		<div className={`${className} bg-gray-100 p-3 shadow-2xl transition duration-200 ease-in hover:shadow-zinc-500`}>
			{isInHomePage ? (
				<div className={`${cardDimensions} relative`}>
					<Image className={`object-cover`} src={room.photos[0]} fill alt={`room image`} />
				</div>
			) : (
				<RoomCarousel photos={room.photos} />
			)}

			<div className={`${jost.className} grid grid-cols-1 justify-items-start p-5 leading-[1.5] font-[400]`}>
				<p className={`${isInHomePage ? "text-[1.9rem]" : "text-[1.9rem] md:text-[2rem] lg:text-[2.2rem]"} text-quinary ${jost.className} font-light`}>{room.name}</p>
				<p className={`mb-4 ${isInHomePage ? "text-[1.1rem]" : "text-[1.05rem] md:text-[1.1rem] lg:text-[1.14rem]"}`}>{room.description}</p>
				<RoomFooter locale={locale} amenities={room.amenities} isInHomePage={isInHomePage} bookButton={bookButton} />
			</div>
		</div>
	);
}
