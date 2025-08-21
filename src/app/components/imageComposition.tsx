import Image from "next/image";

const border = { boxShadow: "-40px -40px 0 -35px #824b24, 40px 40px 0 -35px #824b24" };

export default function ImageComposition({ className }: Readonly<{ className?: string }>) {
	return (
		<div className={`${className} relative mt-3 xl:left-17 xl:pl-40`}>
			<div className={`relative -top-25 left-7 hidden h-85 w-65 xl:block`} style={border}>
				{/*Left Image*/}
				<Image className={`object-cover p-1`} src={`/interior2.jpg`} fill alt={`interior1`} />

				{/*Bottom Image*/}
				<div className={`absolute top-full -right-50 mt-17 h-45 w-75`} style={border}>
					<Image className={`object-cover p-1`} src={`/interior2.jpg`} fill alt={`interior2`} />
				</div>

				{/*Right Image*/}
				<div className={`absolute -top-10 left-80 h-105 w-105`} style={border}>
					<Image className={`object-cover p-1`} src={`/interior1.jpg`} fill alt={`interior1`} />
				</div>
			</div>
			<div className={`h-80 w-full sm:h-105 xl:hidden`} style={border}>
				<Image className={`object-cover p-1`} src={`/interior1.jpg`} fill alt={`interior1`} />
			</div>
		</div>
	);
}
