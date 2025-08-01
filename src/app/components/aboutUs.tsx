import ImageComposition from "@/app/components/imageComposition";
import InfoCard from "@/app/components/infoCard";

export default function AboutUs() {
    return (
        <div className={`grid grid-cols-4 my-[30vh] px-30`}>
            <InfoCard className={'col-span-1 self-center'}/>
            <ImageComposition className={'col-span-3'}/>
        </div>
    )
}