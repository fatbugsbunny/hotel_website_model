import ContactForm from "@/app/contact/components/contactForm";


export default function ContactPage(){

    return (
        <div className={`flex justify-between align-center`}>
            <div>
                <h5>Reach out:</h5>
                <p>Address:</p>
                <p>Orikum</p>
                <p>Phone number:</p>
                <p>+355 069 XXXXXXXX</p>
                <p>Email:</p>
                <p>info@gmail.com</p>

                <h5>Hours:</h5>
                <p>Front Desk: 24/7</p>
                <p>Check-in: 2:00 pm </p>
                <p>Check-out: 11:00 am</p>
                <p>Breakfast: 8:00 am</p>
                <p>Pool: 11:00 am</p>
                <p>Restaurant: 13:00 AM - 11:00 PM</p>

                <h5>Location:</h5>
                <p>Map</p>
            </div>
            <div>
                <ContactForm></ContactForm>
            </div>
        </div>
    )
}