import { Jost, Quicksand } from "next/font/google";
import type { InfoCard } from "@/types";

const jost = Jost({
	subsets: ["latin"],
});

const quicksand = Quicksand({
	subsets: ["latin"],
});

export default function InfoCard({ className, infoCard }: Readonly<{ className?: string; infoCard: InfoCard }>) {
	return (
		<div className={`${className} relative ${quicksand.className} w-full border-l-5 border-[#824b24] pl-2 sm:border-l-10 xl:w-3/2`}>
			<p className={`text-[1.15rem] font-[500] text-[#cc7e46] uppercase sm:text-xl`}>{infoCard.subHeading}</p>
			<p className={`text-tertiary mb-2 -ml-1 text-[2.3rem] leading-10 capitalize sm:mb-4.5 sm:text-5xl`}>{infoCard.heading}</p>
			<p className={`text-[1.15rem] font-[400] sm:text-xl ${jost.className} text-`}>
				{infoCard.description} <span className={"hidden sm:inline"}> {infoCard.extraDesc}</span>
			</p>
		</div>
	);
}
