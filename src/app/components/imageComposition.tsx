import Image from "next/image";

const border = {boxShadow: '-40px -40px 0 -35px #824b24, 40px 40px 0 -35px #824b24'};

export default function ImageComposition(){
    return(
        <div className={`col-span-3 relative pl-40 mt-3 left-17`}>
            <div className={`relative w-65 h-85 -top-25 left-7 `} style={border}>
                {/*Left Image*/}
                <Image className={`object-cover p-1`} src={`/interior2.jpg`} fill
                       alt={`interior1`}/>

                {/*Bottom Image*/}
                <div className={`absolute top-full -right-50 mt-17 w-75 h-45 `} style={border}>
                    <Image className={`object-cover p-1 `} src={`/interior2.jpg`} fill
                           alt={`interior2`}/>
                </div>

                {/*Right Image*/}
                <div className={`absolute h-105 w-105 left-80 -top-10`} style={border}>
                    <Image className={`object-cover p-1`} src={`/interior1.jpg`} fill
                           alt={`interior1`}/>
                </div>
            </div>
        </div>
    )
}