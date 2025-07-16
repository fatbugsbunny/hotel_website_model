import Image from "next/image";

export default function Facility({className, facility, icon}: Readonly<{ className?:string, facility: string, icon:string }>){
    return(
        <div className={className}>
            <Image src={icon} width={`70`} height={`70`} alt={`facility icon`}></Image>
            <p className={`uppercase`}>{facility}</p>
        </div>
    )
}