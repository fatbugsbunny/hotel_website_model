import Facility from "@/app/components/facility";
import {Quicksand} from "next/font/google";

const quicksand = Quicksand({
    subsets: ['latin']
})

const facilities:{name:string, icon:string}[] = [
    {name:'private beach',icon:'/sunbed.png'},
    {name:'lounge bar', icon:'/cheers.png'},
    {name:'swimming pool', icon:'/swimming-pool.png'},
    {name:'room service', icon:'/room-service.png'},
    {name:'restaurant', icon:'/restaurant.png'},
    {name:'free parking', icon:'/parking.png'},
]

export default function Facilities() {
    return (
        <div className="z-1 relative h-[60vh] bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/interior1.jpg')] bg-v text-white mt-50 pt-6">
            <p className={`z-3 relative capitalize  text-center text-4xl  ${quicksand.className}`}>- enjoy our services -</p>
            <div className={`z-3 relative grid grid-cols-3 place-items-center mt-15 px-20 gap-x-4 gap-y-6 ${quicksand.className} font-[510]`}>
                {facilities.map((v,i) => (
                    <Facility facility={v.name} icon={v.icon} switchColor={ (i + 1) % 2 === 0} key={i}/>
                ))}
            </div>
            <div className="absolute inset-0 bg-black/30 z-2"></div>
        </div>
    )
}