export default function HoursCard() {
	return (
		<div className={`lg:bg-tertiary absolute top-0 left-1/2 mr-0 h-75 w-[94%] -translate-x-1/2 lg:right-0 lg:left-auto lg:mt-16 lg:w-137.5 lg:-translate-x-0`}>
			<div className={`text-primary absolute top-1/2 right-12 hidden -translate-y-1/2 grid-cols-1 place-items-center text-center text-4xl lg:grid`}>
				<p>HOURS</p>
			</div>
			<div className={`absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#ffefc8] p-4 text-center lg:-left-30 lg:-translate-x-0`}>
				<div className={`border-quinary border-2 p-3`}>
					<p className={`text-quinary mb-3 hidden text-3xl lg:block`}>HOTEL NAME</p>
					<p className={"text-quinary mb-3 text-3xl lg:hidden"}>HOURS</p>
					<p>Front Desk - 24/7</p>
					<p>Check-in: 2:00 pm </p>
					<p>Check-out: 11:00 am</p>
					<p>Breakfast: 8:00 am</p>
					<p>Pool: 11:00 am</p>
					<p>Restaurant: 13:00 AM - 11:00 PM</p>
				</div>
			</div>
		</div>
	);
}
