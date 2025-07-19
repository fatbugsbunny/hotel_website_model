import ContactForm from "@/app/contact/components/contactForm";
import ContactInfo from "@/app/contact/components/contactInfo";
import HeroBanner from '@/components/heroBanner'
import {Quicksand} from 'next/font/google';

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function ContactPage() {
    return (
        <>
            <HeroBanner text={`Contact Us`}></HeroBanner>
            <div className={`w-full -mt-[30px] flex justify-center z-20 absolute ${quicksand.className} `}>
                <ContactInfo className={`border-0  border-quinary`} switchColor={true} img={`/customer-service.png`}
                             heading={`Call Us: `} info={`+355 069 XXXXXXXX`}/>
                <ContactInfo className={`border-0 border-x-0 border-quinary`} switchColor={false} img={`/email.png`}
                             heading={`Email us:`} info={`info@gmail.com`}/>
                <ContactInfo className={`border-0  border-quinary`} switchColor={true} img={`/location.png`}
                             heading={`Address: `} info={`Orikum, 7th km, near the coast`}/>


            </div>
            <div className={`mt-40 flex justify-center space-x-4 items-start ${quicksand.className}`}>
                <ContactForm className={`relative right-[270px]`}></ContactForm>
                <div className={`absolute bg-tertiary w-[550px] h-[300px] right-0 mr-0 mt-16`}>
                    <div
                        className={`absolute max-w-md w-full text-center bg-[#fff4d9] p-6  border-quinary  -left-[120px] top-1/2 -translate-y-1/2`}>
                        <p className={`text-4xl text-quinary mb-5`}>Hours</p>
                        <p>Front Desk - 24/7</p>
                        <p>Check-in: 2:00 pm </p>
                        <p>Check-out: 11:00 am</p>
                        <p>Breakfast: 8:00 am</p>
                        <p>Pool: 11:00 am</p>
                        <p>Restaurant: 13:00 AM - 11:00 PM</p>
                    </div>

                    {/*<h5>Location:</h5>*/}
                    {/*<p>Map</p>*/}
                </div>
            </div>
        </>
    )
}