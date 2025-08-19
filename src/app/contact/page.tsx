import ContactForm from "@/app/contact/components/contactForm";
import ContactInfo from "@/app/contact/components/contactInfo";
import HoursCard from "@/app/contact/components/hoursCard";
import LocalMap from "@/app/contact/components/localMap";
import HeroSection from "@/components/heroSection";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
	subsets: ["latin"],
});

export default function ContactPage() {
	return (
		<>
			<HeroSection text={`Contact Us`}></HeroSection>

			<div className={`absolute z-20 -mt-[30px] grid w-full grid-cols-1 grid-rows-3 justify-items-center lg:flex lg:justify-center ${quicksand.className} `}>
				<ContactInfo switchColor={true} img={`/customer-service.png`} heading={`Call Us: `} info={`+355 069 XXXXXXXX`} />
				<ContactInfo switchColor={false} img={`/email.png`} heading={`Email us:`} info={`info@gmail.com`} />
				<ContactInfo switchColor={true} img={`/location.png`} heading={`Address: `} info={`Orikum, 7th km, near the coast`} />
			</div>

			<div className={`relative mt-80 mb-185 flex w-full lg:mt-40 lg:mb-0 lg:flex lg:w-auto lg:items-start lg:justify-center lg:space-x-4 ${quicksand.className}`}>
				<HoursCard />
				<div className={"absolute top-79 right-1/2 h-90 w-[93%] translate-x-1/2 lg:hidden"}>
					<LocalMap />
				</div>
				<ContactForm>
					<LocalMap className={"hidden lg:block"} />
				</ContactForm>
			</div>
		</>
	);
}
