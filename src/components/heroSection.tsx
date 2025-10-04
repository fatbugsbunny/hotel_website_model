import Image from "next/image";
import { Montserrat } from "next/font/google";
import MotionDiv from "@/components/motionDiv";

const montserrat = Montserrat({
	subsets: ["latin"],
});

export default function HeroSection({ text }: Readonly<{ text: string }>) {
	return (
		<div className={`relative z-10 h-[80vh]`}>
			<Image src="/hotel-hero-photo.jpg" alt="Landing page" fill priority className="object-cover brightness-60" />
			<div className={`absolute top-1/2 left-1/2 -translate-1/2 text-center ${montserrat.className} w-full text-gray-200`}>
				<MotionDiv initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}>
					<Image className={`mx-auto hidden sm:block`} src={`/line.png`} width={140} height={20} alt={`line art`} />
					<Image className={`mx-auto block sm:hidden`} src={`/line.png`} width={100} height={20} alt={`line art`} />
					<p className={`px-3 py-2 text-[2.75rem] leading-11 sm:text-6xl`}>{text}</p>
					<p className={`py-1 text-[0.6rem] sm:text-[1rem]`}>☆ ☆ ☆ ☆</p>
				</MotionDiv>
			</div>
		</div>
	);
}
