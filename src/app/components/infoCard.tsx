import { Jost, Quicksand } from "next/font/google";

const jost = Jost({
	subsets: ["latin"],
});

const quicksand = Quicksand({
	subsets: ["latin"],
});

export default function InfoCard({ className }: Readonly<{ className?: string }>) {
	return (
		<div className={`${className} relative ${quicksand.className} w-full border-l-5 border-[#824b24] pl-2 sm:border-l-10 xl:w-3/2`}>
			<p className={`text-[1.15rem] font-[500] text-[#cc7e46] uppercase sm:text-xl`}>Make. memories.</p>
			<p className={`text-tertiary mb-2 -ml-1 text-[2.3rem] leading-10 capitalize sm:mb-4.5 sm:text-5xl`}>Experience luxury</p>
			<p className={`text-[1.15rem] font-[400] sm:text-xl ${jost.className} text-`}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aut consectetur ea neque nihil porro quidem repellat. Accusantium aperiam at cupiditate dicta, ipsa iure molestias nisi non quam rem.Lorem ipsum dolor sit amet, onsectetur adipisicing elit. Amet animi aut consectetur ea neque <span className={"hidden sm:block"}> nihil porro quidem repellat. Accusantium aperiam at cupiditate dicta, ipsa iure molestias nisi non quam rem.</span>
			</p>
		</div>
	);
}
