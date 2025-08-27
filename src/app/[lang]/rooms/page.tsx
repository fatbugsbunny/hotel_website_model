import RoomCard from "@/components/roomCard/roomCard";
import HeroSection from "@/components/heroSection";
import { Room } from "@/types";
import getDictionary from "@/dictionaries";

export default async function RoomsPage({ params }: Readonly<{ params: Promise<{ lang: string }> }>) {
	const { lang } = await params;
	const dict = getDictionary(lang);
	const rooms = dict.rooms;

	return (
		<>
			<HeroSection text={rooms.heroSection}></HeroSection>
			<div className={`mt-[10vh] grid grid-cols-1 gap-10 gap-x-6 px-5 lg:grid-cols-2 lg:px-20`}>
				{rooms.roomList.map((room: Room) => (
					<RoomCard room={room} isInHomePage={false} bookButton={rooms.bookButton} key={room.id} />
				))}
			</div>
		</>
	);
}
