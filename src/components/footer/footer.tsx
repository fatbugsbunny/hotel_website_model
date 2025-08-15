import Description from "@/components/footer/description";
import ContactInfo from "@/components/footer/contactInfo";
import QuickLinks from "@/components/footer/quickLinks";
import Services from "@/components/footer/services";
import Credits from "@/components/footer/credits";

export default function Footer() {

    return (
        <footer className="bg-[#432818] text-[#ffe6a7] py-12 mt-30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <Description/>
                    <ContactInfo/>
                    <QuickLinks/>
                    <Services/>
                </div>
                <Credits/>
            </div>
        </footer>
    );
}