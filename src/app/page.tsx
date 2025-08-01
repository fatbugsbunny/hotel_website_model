import Facility from "@/app/components/facility";
import HeroBanner from "@/app/components/heroBanner";
import AboutUs from "@/app/components/aboutUs";

export default function HomePage() {
    return (
        <>
            <HeroBanner/>
            <AboutUs/>

            <div className={`grid grid-cols-3 place-items-center mt-50`}>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
                <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
            </div>
        </>

    );
}
