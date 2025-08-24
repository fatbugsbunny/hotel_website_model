"use client";

import { useActionState } from "react";
import { createMessage } from "@/actions";

type formError = {
	message: string;
	error?: {
		formErrors: string[];
		fieldErrors: {
			name: string[];
			room: string[];
			checkin: string[];
			checkout: string[];
			request: string[] | undefined;
		};
	};
};

const initialState: formError = {
	message: "",
	error: {
		formErrors: [""],
		fieldErrors: {
			name: [""],
			room: [""],
			checkin: [""],
			checkout: [""],
			request: [""],
		},
	},
};

let messageNotSent = true;

export default function ContactForm({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [state, formAction, pending] = useActionState(createMessage, initialState);

	if (state.message !== "" && messageNotSent) {
		sendMessage(state.message);
		messageNotSent = false;
	}

	return (
		<div className={`relative top-160 left-1/2 w-[94%] max-w-md -translate-x-1/2 lg:top-0 lg:right-89 lg:left-auto lg:grid lg:w-full lg:-translate-x-0 lg:grid-cols-2`}>
			<form action={formAction} className="z-[2] col-span-2 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
				<div className="mb-8 flex justify-center space-x-5 text-center">
					<h2 className="text-2xl font-light tracking-wide" style={{ color: "#432818" }}>
						Send Us a Message
					</h2>
					{/*<Image src={`/send.png`} width={32} height={32} alt={'send icon'}/>*/}
				</div>

				<div className="space-y-6">
					{/* Name Field */}
					<div className="space-y-2">
						<label htmlFor="name" className="block text-sm font-medium tracking-wide" style={{ color: "#6f1d1b" }}>
							Full Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							required
							placeholder={state?.error?.fieldErrors?.name?.at(0) || "Enter your full name"}
							className="w-full rounded-xl border-0 bg-white/20 px-4 py-3 placeholder-gray-500 backdrop-blur-sm transition-all duration-300 focus:bg-white/30 focus:ring-2 focus:outline-none"
							style={{
								color: "#432818",
								// '--tw-ring-color': '#bb9457'
							}}
						/>
					</div>

					{/* Room Type Field */}
					<div className="space-y-2">
						<label htmlFor="room" className="block text-sm font-medium tracking-wide" style={{ color: "#6f1d1b" }}>
							Room Type
						</label>
						<input
							type="text"
							name="room"
							id="room"
							required
							placeholder={state?.error?.fieldErrors?.room?.at(0) || "e.g., Deluxe Suite, Standard Room"}
							className="w-full rounded-xl border-0 bg-white/20 px-4 py-3 placeholder-gray-500 backdrop-blur-sm transition-all duration-300 focus:bg-white/30 focus:ring-2 focus:outline-none"
							style={{
								color: "#432818",
								// '--tw-ring-color': '#bb9457'
							}}
						/>
					</div>

					{/* Check-in Date */}
					<div className="space-y-2">
						<label htmlFor="checkin" className="block text-sm font-medium tracking-wide" style={{ color: "#6f1d1b" }}>
							Check-in Date
						</label>
						{state?.error?.fieldErrors?.checkin?.at(0) && (
							<span className="text-xs" style={{ color: "#6f1d1b" }}>
								{state.error.fieldErrors.checkin.at(0)}
							</span>
						)}
						<input
							type="date"
							name="checkin"
							id="checkin"
							required
							className="w-full rounded-xl border-0 bg-white/20 px-4 py-3 backdrop-blur-sm transition-all duration-300 focus:bg-white/30 focus:ring-2 focus:outline-none"
							style={{
								color: "#432818",
								// '--tw-ring-color': '#bb9457'
							}}
						/>
					</div>

					{/* Check-out Date */}
					<div className="space-y-2">
						<label htmlFor="checkout" className="block text-sm font-medium tracking-wide" style={{ color: "#6f1d1b" }}>
							Check-out Date
						</label>
						{state?.error?.fieldErrors?.checkout?.at(0) && (
							<span className="text-xs" style={{ color: "#6f1d1b" }}>
								{state.error.fieldErrors.checkout.at(0)}
							</span>
						)}
						<input
							type="date"
							name="checkout"
							id="checkout"
							required
							className="w-full rounded-xl border-0 bg-white/20 px-4 py-3 backdrop-blur-sm transition-all duration-300 focus:bg-white/30 focus:ring-2 focus:outline-none"
							style={{
								color: "#432818",
								// '--tw-ring-color': '#bb9457'
							}}
						/>
					</div>

					{/* Special Request */}
					<div className="space-y-2">
						<label htmlFor="request" className="block text-sm font-medium tracking-wide" style={{ color: "#6f1d1b" }}>
							Special Request
							<span className="ml-1 text-xs font-normal opacity-70">(Optional)</span>
						</label>
						<input
							type="text"
							name="request"
							id="request"
							placeholder="Any special accommodations or requests"
							className="w-full rounded-xl border-0 bg-white/20 px-4 py-3 placeholder-gray-500 backdrop-blur-sm transition-all duration-300 focus:bg-white/30 focus:ring-2 focus:outline-none"
							style={{
								color: "#432818",
								// '--tw-ring-color': '#bb9457'
							}}
						/>
					</div>

					{/* Submit Button */}
					<div className="pt-4">
						<button
							type="submit"
							disabled={pending}
							className={`w-full rounded-xl px-6 py-4 text-lg font-medium tracking-wide transition-all duration-300 ${pending ? "cursor-not-allowed opacity-50" : "hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"}`}
							style={{
								background: pending ? "linear-gradient(135deg, #99582a, #bb9457)" : "linear-gradient(135deg, #432818, #6f1d1b)",
								color: "#ffe6a7",
							}}
						>
							{pending ? (
								<div className="flex items-center justify-center space-x-2">
									<div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
									<span>Booking...</span>
								</div>
							) : (
								"Book Now"
							)}
						</button>
					</div>
				</div>
			</form>
			{children}
		</div>
	);
}

function sendMessage(message: string) {
	const encMessage = encodeURIComponent(message);
	window.open(`https://wa.me/355683317663?text=${encMessage}`, "_blank");
}
