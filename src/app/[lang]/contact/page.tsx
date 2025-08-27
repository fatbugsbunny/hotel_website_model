import ContactForm from "@/app/[lang]/contact/components/contactForm";
import ContactInfo from "@/app/[lang]/contact/components/contactInfo";
import HoursCard from "@/app/[lang]/contact/components/hoursCard";
import LocalMap from "@/app/[lang]/contact/components/localMap";
import HeroSection from "@/components/heroSection";
import { Quicksand } from "next/font/google";
import getDictionary from "@/dictionaries";

const quicksand = Quicksand({
	subsets: ["latin"],
});

export default async function ContactPage({ params }: Readonly<{ params: Promise<{ lang: string }> }>) {
	const { lang } = await params;
	const dict = getDictionary(lang);
	const contact = dict.contact;

	return (
		<>
			<HeroSection text={contact.heroSection}></HeroSection>

			<div className={`absolute z-20 -mt-[30px] grid w-full grid-cols-1 grid-rows-3 justify-items-center lg:flex lg:justify-center ${quicksand.className} `}>
				{contact.contactInfo.map((contact, i) => (
					<ContactInfo key={contact.heading} switchColor={i !== 1} img={contact.img} heading={contact.heading} info={contact.info} />
				))}
			</div>

			<div className={`relative mt-80 mb-185 flex w-full lg:mt-40 lg:mb-0 lg:flex lg:w-auto lg:items-start lg:justify-center lg:space-x-4 ${quicksand.className}`}>
				<HoursCard hoursCard={contact.hoursCard} />
				<div className={"absolute top-79 right-1/2 h-90 w-[93%] translate-x-1/2 lg:hidden"}>
					<LocalMap map={contact.map} />
				</div>
				<ContactForm form={contact.form.formLabels}>
					<LocalMap map={contact.map} className={"hidden lg:block"} />
				</ContactForm>
			</div>
		</>
	);
}
