import ContactForm from "@/app/contact/components/contactForm";
import HeroBanner from '@/components/heroBanner'
import {Quicksand} from 'next/font/google';
import Image from "next/image";

const quicksand = Quicksand({
    subsets: ['latin']
})

export default function ContactPage() {
    return (
        <>
            <HeroBanner text={`Contact Us`}></HeroBanner>
            <div className={`mt-[300px] mx-36 grid grid-cols-2 justify-items-center`}>
                <div className={`w-full pl-52 ${quicksand.className}`}>
                    <div className={`bg-primary text-tertiary p-6 grid grid-cols-4`}>
                            <Image className={`col-span-1`} src={`/customer-service.png`} width={`64`} height={`64`} alt={`Call icon`}/>
                        <div className={`col-span-3`}>
                            <p className={`text-3xl`}>Call Us: </p>
                            <p className={`text-[1.3rem`}>+355 069 XXXXXXXX</p>
                        </div>
                    </div>
                    <div className={`bg-tertiary text-primary p-6 grid grid-cols-4`}>
                        <Image className={`col-span-1`} src={`/email.png`} width={`64`} height={`64`} alt={`Call icon`}/>
                        <div className={`col-span-3`}>
                            <p className={`text-3xl`}>Email Us: </p>
                            <p className={`text-[1.3rem`}>info@gmail.com</p>
                        </div>
                    </div>
                    <div className={`bg-primary text-tertiary p-6 grid grid-cols-4`}>
                        <Image className={`col-span-1`} src={`/location.png`} width={`64`} height={`64`} alt={`Call icon`}/>
                        <div className={`col-span-3`}>
                            <p className={`text-3xl`}>Address: </p>
                            <p className={`text-[1.3rem`}>Orikum, 7th km, near the coast</p>
                        </div>
                    </div>

                    {/*<h5>Hours:</h5>*/}
                    {/*<p>Front Desk: 24/7</p>*/}
                    {/*<p>Check-in: 2:00 pm </p>*/}
                    {/*<p>Check-out: 11:00 am</p>*/}
                    {/*<p>Breakfast: 8:00 am</p>*/}
                    {/*<p>Pool: 11:00 am</p>*/}
                    {/*<p>Restaurant: 13:00 AM - 11:00 PM</p>*/}

                    <h5>Location:</h5>
                    <p>Map</p>
                </div>
                <div>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </>
    )
}