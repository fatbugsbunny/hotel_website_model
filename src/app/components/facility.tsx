import Image from "next/image";

export default function Facility({facility, icon}: Readonly<{ facility: string, icon:string }>){
    return(
        <div>
            <Image src={icon} width={`70`} height={`70`} alt={`facility icon`}></Image>
            <p className={`uppercase`}>{facility}</p>
        </div>
    )
}