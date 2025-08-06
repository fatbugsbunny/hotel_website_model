import Facility from "@/app/components/facility";

export default function Facilities(){
    return (
        <div className={`grid grid-cols-3 place-items-center mt-50`}>
            <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
            <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
            <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
            <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
            <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
            <Facility facility={`Wifi`} icon={`/wifi.png`}></Facility>
        </div>
    )
}