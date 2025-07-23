export default function HoursCard() {
    return (
        <div className={`absolute bg-tertiary w-137.5 h-75 right-0 mr-0 mt-16 `}>
            <div
                className={`absolute right-12 top-1/2 -translate-y-1/2 text-primary text-4xl text-center grid grid-cols-1 place-items-center`}>
                <p>HOURS</p>
            </div>
            <div
                className={`absolute max-w-md w-full text-center bg-[#fff4d9] p-4 -left-30 top-1/2 -translate-y-1/2`}>
                <div className={`border-quinary border-2 p-3 `}>
                    <p className={`text-3xl text-quinary mb-3`}>HOTEL NAME</p>
                    <p>Front Desk - 24/7</p>
                    <p>Check-in: 2:00 pm </p>
                    <p>Check-out: 11:00 am</p>
                    <p>Breakfast: 8:00 am</p>
                    <p>Pool: 11:00 am</p>
                    <p>Restaurant: 13:00 AM - 11:00 PM</p>
                </div>
            </div>
        </div>
    )
}