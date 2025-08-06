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
        <>
            <p className={`capitalize mt-50 text-center text-4xl text-tertiary ${quicksand.className}`}>- enjoy our services -</p>

            <div className={`grid grid-cols-3 place-items-center mt-15 px-20 gap-x-4 gap-y-6 ${quicksand.className} font-[510]`}>
                {facilities.map((v,i) => (
                    <Facility facility={v.name} icon={v.icon} switchColor={ (i + 1) % 2 === 0} key={i}/>
                ))}
            </div>
        </>
    )
}