import RoomCard from "@/components/roomCard/roomCard";
import HeroSection from "@/components/heroSection";
import { Room } from "@/components/roomCard/types";
import { rooms } from "@/roomData";

export default function RoomsPage() {
	return (
		<>
			<HeroSection text={`Rooms & Suites`}></HeroSection>
			<div className={`mt-[10vh] grid grid-cols-1 gap-10 gap-x-6 px-5 lg:grid-cols-2 lg:px-20`}>
				{rooms.map((room: Room) => (
					<RoomCard room={room} isInHomePage={false} key={room.id} />
				))}
			</div>
		</>
	);
}
