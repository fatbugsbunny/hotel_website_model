import Description from "@/components/footer/description";
import ContactInfo from "@/components/footer/contactInfo";
import QuickLinks from "@/components/footer/quickLinks";
import Services from "@/components/footer/services";
import Credits from "@/components/footer/credits";
import type { Footer } from "@/types";

export default function Footer({ footer }: Readonly<{ footer: Footer }>) {
	return (
		<footer className="mt-30 bg-[#432818] py-12 text-[#ffe6a7]">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					<Description description={footer.description} />
					<ContactInfo contactInfo={footer.contactInfo} />
					<QuickLinks quickLinks={footer.quickLinks} />
					<Services services={footer.services} />
				</div>
				<Credits credits={footer.credits} />
			</div>
		</footer>
	);
}
