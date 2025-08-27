"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import getDictionary from "@/dictionaries";
import { redirect } from "next/navigation";

async function getDict() {
	const cookieStore = await cookies();
	const locale = cookieStore.get("LOCALE")!.value;
	return getDictionary(locale);
}

const schema = z
	.object({
		name: z.string(),
		room: z.string(),
		checkin: z.iso.date().refine((val) => Date.parse(val) >= Date.now(), { error: "Check-in date can't be in the past!" }),
		checkout: z.iso.date(),
		request: z.string().optional(),
	})
	.check((ctx) => {
		if (Date.parse(ctx.value.checkout) < Date.parse(ctx.value.checkin)) {
			ctx.issues.push({
				code: "custom",
				message: "Check-out date can't be before check-in date!",
				path: ["checkout"],
				input: ctx.value.checkout,
				continue: true,
			});
		}
	});

export async function createMessage(prevState: any, formData: FormData) {
	const dict = await getDict();
	const formMessage = dict.contact.form.formMessage;

	const validData = await schema.safeParseAsync({
		name: formData.get("name"),
		room: formData.get("room"),
		checkin: formData.get("checkin"),
		checkout: formData.get("checkout"),
		request: formData.get("request"),
	});

	if (!validData.success) {
		return { message: "", error: z.flattenError(validData.error) };
	} else {
		return {
			message: `${formMessage.intro}${validData.data.name}${formMessage.checkIn}${validData.data.checkin}${formMessage.checkOut}${validData.data.checkout}${formMessage.room}${validData.data.room}${formMessage.request}${validData.data.request ? "-" : validData.data.request}`,
		};
	}
}

export async function setLocale(nextLocale: string, nextPath: string) {
	const cookieStore = await cookies();
	cookieStore.set("LOCALE", nextLocale, {
		path: "/",
		maxAge: 60 * 60 * 24 * 365,
	})

	redirect(nextPath);
}
