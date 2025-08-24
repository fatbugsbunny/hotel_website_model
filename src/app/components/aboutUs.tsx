import ImageComposition from "@/app/[lang]/components/imageComposition";
import InfoCard from "@/app/[lang]/components/infoCard";

export default function AboutUs() {
	return (
		<div className={`my-[15vh] grid grid-cols-1 gap-y-10 px-5 sm:px-20 md:px-30 xl:mt-[30vh] xl:mb-[32vh] xl:grid-cols-4 xl:gap-y-0`}>
			<InfoCard className={"self-center justify-self-center xl:col-span-1 xl:justify-self-auto"} />
			<ImageComposition className={"xl:self-auto: self-center xl:col-span-3"} />
		</div>
	);
}
