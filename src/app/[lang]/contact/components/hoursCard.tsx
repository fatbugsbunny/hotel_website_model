import type { HoursCard } from "@/types";

export default function HoursCard({ hoursCard }: Readonly<{ hoursCard: HoursCard }>) {
	return (
		<div className={`lg:bg-tertiary absolute top-0 left-1/2 mr-0 h-75 w-[94%] -translate-x-1/2 lg:right-0 lg:left-auto lg:mt-16 lg:w-137.5 lg:-translate-x-0`}>
			<div className={`text-primary absolute top-1/2 right-12 hidden -translate-y-1/2 grid-cols-1 place-items-center text-center text-4xl uppercase lg:grid`}>
				<p>{hoursCard.heading}</p>
			</div>
			<div className={`absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#ffefc8] p-4 text-center lg:-left-30 lg:-translate-x-0`}>
				<div className={`border-quinary border-2 p-3`}>
					<p className={`text-quinary mb-3 hidden text-3xl uppercase lg:block`}>{hoursCard.hotelName}</p>
					<p className={"text-quinary mb-3 text-3xl uppercase lg:hidden"}>{hoursCard.heading}</p>
					<p>{hoursCard.frontDest}</p>
					<p>{hoursCard.checkIn}</p>
					<p>{hoursCard.checkOut}</p>
					<p>{hoursCard.breakfast}</p>
					<p>{hoursCard.pool}</p>
					<p>{hoursCard.restaurant}</p>
				</div>
			</div>
		</div>
	);
}
