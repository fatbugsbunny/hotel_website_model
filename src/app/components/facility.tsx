import Image from "next/image";

export default function Facility({facility, icon, switchColor}: Readonly<{
    facility: string,
    icon: string,
    switchColor?: boolean
}>) {
    return (
        <div className={`${switchColor ? 'bg-primary text-tertiary' : 'bg-tertiary text-primary'} w-full grid grid-cols-1 transition duration-250 hover:-translate-y-1/16 hover:shadow-xl items-center p-2 mx-10`}>
            <div className={`${switchColor ? 'border-tertiary' : 'border-primary'} border-2 p-2`}>
                <Image src={icon} width={`64`} height={`64`} alt={`facility icon`} className={`mx-auto`}></Image>
                <p className={`capitalize text-center text-xl`}>{facility}</p>
            </div>
        </div>
    )
}