"use client";

import { Quicksand } from "next/font/google";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home-swiper.css";
import RoomCard from "@/components/roomCard/roomCard";
import { rooms } from "@/roomData";

const quicksand = Quicksand({
	subsets: ["latin"],
});

export default function RoomsSummary() {
	return (
		<div className={`relative my-30 grid justify-items-center ${quicksand.className}`}>
			<p className={`text-tertiary text-center text-4xl capitalize ${quicksand.className}`}>- rooms & suites -</p>

			<div className={"bg-quinary absolute top-1/2 h-60 w-full -translate-y-1/2"}></div>

			<Swiper className={`home-swiper mt-10 w-full`} modules={[Navigation, Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: true }} slidesPerView={3} navigation loop={true}>
				{rooms.map((room, i) => (
					<SwiperSlide key={i}>
						<RoomCard className={"mx-5 mb-15"} cardDimensions={"h-70 w-full"} room={room} isInHomePage={true} />
					</SwiperSlide>
				))}
			</Swiper>

			<Link href={`/rooms`} className={"bg-primary text-tertiary hover:bg-tertiary hover:text-primary justify-self-center rounded px-7 py-3 text-[1.1rem] font-medium transition"}>
				See more
			</Link>
		</div>
	);
}
