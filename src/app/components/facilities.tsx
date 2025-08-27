import Facility from "@/app/components/facility";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import type { Facilities } from "@/types";

const quicksand = Quicksand({
	subsets: ["latin"],
});

export default function Facilities({ facilities }: Readonly<{ facilities: Facilities }>) {
	return (
		<div className="relative z-1 mb-25 overflow-x-hidden pt-12 pb-15 text-white sm:mb-30 lg:bg-[url('/interior1.jpg')] lg:bg-cover lg:bg-fixed lg:bg-center lg:bg-no-repeat">
			<Image src={"/interior1.jpg"} fill className={"fixed object-cover lg:hidden"} alt={"hotel background"} />
			<p className={`relative z-3 text-center text-[2rem] capitalize sm:text-4xl ${quicksand.className}`}>{facilities.heading}</p>
			<div className={`relative z-3 mt-12 grid place-items-center gap-x-4 gap-y-6 px-5 sm:mt-13 sm:grid-cols-2 sm:px-20 md:grid-cols-3 ${quicksand.className} font-[510]`}>
				{facilities.facilityList.map((v, i) => (
					<Facility facility={v.name} icon={v.icon} switchColor={(i + 1) % 2 === 0} key={i} />
				))}
			</div>
			<div className="absolute inset-0 z-2 bg-black/30"></div>
		</div>
	);
}
