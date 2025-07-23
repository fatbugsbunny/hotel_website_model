import ContactForm from "@/app/contact/components/contactForm";
import ContactInfo from "@/app/contact/components/contactInfo";
import HoursCard from "@/app/contact/components/hoursCard";
import LocalMap from "@/app/contact/components/localMap";
import HeroSection from '@/components/heroSection'
import {Quicksand} from 'next/font/google';

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function ContactPage() {
    return (
        <>
            <HeroSection text={`Contact Us`}></HeroSection>
            <div className={`w-full -mt-[30px] flex justify-center z-20 absolute ${quicksand.className} `}>
                <ContactInfo className={`border-0  border-quinary`} switchColor={true} img={`/customer-service.png`}
                             heading={`Call Us: `} info={`+355 069 XXXXXXXX`}/>
                <ContactInfo className={`border-0 border-x-0 border-quinary`} switchColor={false} img={`/email.png`}
                             heading={`Email us:`} info={`info@gmail.com`}/>
                <ContactInfo className={`border-0  border-quinary`} switchColor={true} img={`/location.png`}
                             heading={`Address: `} info={`Orikum, 7th km, near the coast`}/>

            </div>
            <div className={`mt-40 flex justify-center space-x-4 items-start ${quicksand.className}`}>
                <ContactForm className={`relative right-86.75 grid grid-cols-2`}>
                    <LocalMap/>
                </ContactForm>
                <HoursCard/>
            </div>
        </>
    )
}