import {Jost, Quicksand} from "next/font/google";

const jost = Jost({
    subsets: ["latin"]
})

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function InfoCard({className}: Readonly<{ className?: string }>){
    return (
        <div
            className={`${className} relative ${quicksand.className} w-3/2 border-[#824b24] border-l-10 pl-2`}>
            <p className={`uppercase text-[#cc7e46] font-[500] text-xl`}>Make. memories.</p>
            <p className={`text-5xl capitalize text-tertiary mb-4.5`}>Experience luxury</p>
            <p className={`text-xl font-[400] ${jost.className} text-`}>
                Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Amet animi aut consectetur ea neque nihil porro
                quidem repellat. Accusantium aperiam at cupiditate dicta, ipsa iure molestias nisi non quam rem.Lorem ipsum
                dolor sit amet, onsectetur adipisicing elit. Amet animi aut consectetur ea neque nihil porro quidem repellat.
                Accusantium aperiam at cupiditate dicta, ipsa iure molestias nisi non quam rem.
            </p>
        </div>
    )
}