import HeroBanner from "@/app/components/heroBanner";
import AboutUs from "@/app/components/aboutUs";
import Facilities from "@/app/components/facilities";
import RoomsSummary from "@/app/components/roomsSummary";
import getDictionary from "@/dictionaries";

export default async function HomePage({ params }: Readonly<{ params: Promise<{ lang: string }> }>) {
	const { lang } = await params;

	const dict = getDictionary(lang);

	return (
		<>
			<HeroBanner heroBanner={dict.heroBanner} />
			<AboutUs aboutUs={dict.aboutUs} />
			<Facilities facilities={dict.facilities} />
			<RoomsSummary rooms={dict.rooms} />
		</>
	);
}
