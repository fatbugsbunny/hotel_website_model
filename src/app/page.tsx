import HeroBanner from "@/app/components/heroBanner";
import AboutUs from "@/app/components/aboutUs";
import Facilities from "@/app/components/Facilities";
import RoomsSummary from "@/app/components/roomsSummary";

export default function HomePage() {
    return (
        <>
            <HeroBanner/>
            <AboutUs/>
            <Facilities/>
            <RoomsSummary/>
        </>

    );
}
