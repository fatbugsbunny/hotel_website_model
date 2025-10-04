import ImageComposition from "@/app/components/imageComposition";
import InfoCard from "@/app/components/infoCard";
import type { AboutUs } from "@/types";
import MotionDiv from "@/components/motionDiv";

export default function AboutUs({ aboutUs }: Readonly<{ aboutUs: AboutUs }>) {
	return (
		<div className={`my-[15vh] grid grid-cols-1 gap-y-10 px-5 sm:px-20 md:px-30 xl:mt-[30vh] xl:mb-[32vh] xl:grid-cols-4 xl:gap-y-0`}>
			<MotionDiv initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
				<InfoCard infoCard={aboutUs.infoCard} className={"self-center justify-self-center xl:col-span-1 xl:justify-self-auto"} />
			</MotionDiv>

			<MotionDiv initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
				<ImageComposition className={"self-center xl:col-span-3 xl:self-auto"} />
			</MotionDiv>
		</div>
	);
}
