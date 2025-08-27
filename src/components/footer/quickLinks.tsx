import Link from "next/link";
import type { QuickLinks } from "@/types";

export default function QuickLinks({ quickLinks }: Readonly<{ quickLinks: QuickLinks }>) {
	return (
		<div className="space-y-4">
			<h4 className="mb-4 text-lg font-semibold text-[#ffe6a7] capitalize">{quickLinks.heading}</h4>
			<ul className="space-y-2 text-sm">
				{quickLinks.links.map((data) => (
					<li className="relative capitalize transition hover:text-[#ffdc84]" key={data.label}>
						<Link className="text-[#bb9457] transition-colors duration-200 hover:text-[#ffe6a7]" href={data.href}>
							{data.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
