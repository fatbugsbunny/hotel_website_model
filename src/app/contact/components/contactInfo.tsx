import Image from "next/image";

type contactInfo = Readonly<{
    className?: string,
    switchColor: boolean,
    img: string,
    heading: string,
    info: string,
}>

export default function ContactInfo({className, switchColor, img, heading, info}: contactInfo) {
    return (
        <div className={` w-[28%] p-6 grid grid-cols-4 ${className} ${switchColor ? 'bg-primary text-tertiary' : 'bg-tertiary text-primary'}`}>
            <Image className={`col-span-1`} src={img} width={`64`} height={`64`} alt={`Call icon`}/>
            <div className={`col-span-3`}>
                <p className={`text-3xl`}>{heading}</p>
                <p className={`text-[1.35rem`}>{info}</p>
            </div>
        </div>
    )
}