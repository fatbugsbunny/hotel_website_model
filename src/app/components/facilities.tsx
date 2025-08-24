import Facility from "@/app/[lang]/components/facility";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
	subsets: ["latin"],
});

const facilities: { name: string; icon: string }[] = [
	{ name: "private beach", icon: "/sunbed.png" },
	{ name: "lounge bar", icon: "/cheers.png" },
	{ name: "swimming pool", icon: "/swimming-pool.png" },
	{ name: "room service", icon: "/room-service.png" },
	{ name: "restaurant", icon: "/restaurant.png" },
	{ name: "free parking", icon: "/parking.png" },
];

export default function Facilities() {
	return (
		<div className="relative z-1 mb-25 pt-12 pb-15 text-white sm:mb-30 lg:bg-[url('/interior1.jpg')] lg:bg-cover lg:bg-fixed lg:bg-center lg:bg-no-repeat">
			<Image src={"/interior1.jpg"} fill className={"fixed object-cover lg:hidden"} alt={"hotel background"} />
			<p className={`relative z-3 text-center text-[2rem] capitalize sm:text-4xl ${quicksand.className}`}>- enjoy our services -</p>
			<div className={`relative z-3 mt-12 grid place-items-center gap-x-4 gap-y-6 px-5 sm:mt-13 sm:grid-cols-2 sm:px-20 md:grid-cols-3 ${quicksand.className} font-[510]`}>
				{facilities.map((v, i) => (
					<Facility facility={v.name} icon={v.icon} switchColor={(i + 1) % 2 === 0} key={i} />
				))}
			</div>
			<div className="absolute inset-0 z-2 bg-black/30"></div>
		</div>
	);
}
