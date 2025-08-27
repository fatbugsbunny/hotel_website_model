import { Car, Clock, Coffee, Waves } from "lucide-react";
import Link from "next/link";
import type { Services } from "@/types";

const iconMap = {
	clock: Clock,
	car: Car,
	coffee: Coffee,
	waves: Waves,
} as const;

export default function Services({ services }: Readonly<{ services: Services }>) {
	return (
		<div className="space-y-4">
			<h4 className="mb-4 text-lg font-semibold text-[#ffe6a7] capitalize">{services.heading}</h4>
			<div className="space-y-3 text-sm">
				{services.services.map((service) => {
					// @ts-ignore
					const Icon = iconMap[service.icon];
					return (
						<div key={service.label} className="flex items-center space-x-3">
							<Icon className="h-4 w-4 text-[#99582a]" aria-hidden />
							<span className="text-[#bb9457]">{service.label}</span>
						</div>
					);
				})}
			</div>

			<div className="pt-4">
				<Link href={"/contact"} className="rounded bg-[#99582a] px-6 py-2 text-sm font-medium text-[#ffe6a7] capitalize transition-colors duration-200 hover:bg-[#6f1d1b]">
					{services.bookButton}
				</Link>
			</div>
		</div>
	);
}
