import { Montserrat } from "next/font/google";
import Image from "next/image";
import type { HeroBanner } from "@/types";
import MotionDiv from "@/components/motionDiv";

const montserrat = Montserrat({
	subsets: ["latin"],
});

export default function HeroBanner({ heroBanner }: Readonly<{ heroBanner: HeroBanner }>) {
	return (
		<div className={`relative h-[90vh]`}>
			<Image src="/hotel-hero-photo.jpg" alt="Landing page" fill priority className="object-cover brightness-65" />
			<div className={`absolute top-1/2 left-1/2 w-full -translate-1/2 text-center ${montserrat.className} text-gray-200`}>
				<MotionDiv initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }}>
					<p className={`py-1 text-[1.05rem] capitalize sm:text-[1.3rem]`}>{heroBanner.intro}</p>
					<p className={`py-1 text-[2.95rem] leading-[2.95rem] uppercase sm:text-7xl`}>{heroBanner.heading}</p>
				</MotionDiv>
				<MotionDiv initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }}>
					<p className={`py-1 text-[1.05rem] capitalize sm:text-[1.4rem]`}>{heroBanner.outro}</p>
					<p className={`py-1 text-[0.6rem] sm:text-[1rem]`}>☆ ☆ ☆ ☆</p>
				</MotionDiv>
			</div>
		</div>
	);
}
