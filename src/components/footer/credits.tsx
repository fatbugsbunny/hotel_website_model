import type { Credits } from "@/types";

export default function Credits({ credits }: Readonly<{ credits: Credits }>) {
	return (
		<div className="border-t border-[#99582a] pt-6">
			<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
				<div className="text-sm text-[#bb9457] text-center">{credits.rights}</div>
				<div className="text-sm">
					<p className={"text-[#bb9457] transition-colors duration-200 hover:text-[#ffe6a7]"}>{credits.poweredBy}</p>
				</div>
			</div>
		</div>
	);
}
