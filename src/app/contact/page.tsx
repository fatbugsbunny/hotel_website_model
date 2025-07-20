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
                <ContactForm className={`relative right-86.75 grid grid-cols-2`}>
                    <div className={`absolute bg-primary w-137.5 h-62 left-full bottom-14 z-[1]`}>
                        <div className={`absolute left-12 top-1/2 -translate-y-1/2 text-tertiary text-4xl text-center h-40 flex items-center`}>
                            <p>FIND US</p>
                        </div>
                        <div
                            className={`absolute max-w-md w-full -right-30 top-1/2 -translate-y-1/2`}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12144.134516407397!2d19.48540625!3d40.45239264999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753008889930!5m2!1sen!2s"
                                className={`border-0 w-full h-62`} allowFullScreen={false} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title={`map`}></iframe>
                        </div>
                    </div>
                </ContactForm>
                <div className={`absolute bg-tertiary w-137.5 h-75 right-0 mr-0 mt-16`}>
                    <div className={`absolute right-12 top-1/2 -translate-y-1/2 text-primary text-4xl text-center grid grid-cols-1 place-items-center`}>
                        <p>HOURS</p>
                    </div>
                    <div
                        className={`absolute max-w-md w-full text-center bg-[#fff4d9] p-4 -left-30 top-1/2 -translate-y-1/2`}>
                        <div className={`border-quinary border-2 p-3`}>

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
            </div>
        </>
    )
}