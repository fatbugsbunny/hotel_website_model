'use server'

import {z} from 'zod'

const schema = z.object({
    name: z.string(),
    room: z.string(),
    checkin: z.iso.date().refine((val) => Date.parse(val) >= Date.now(), {error: "Check-in date can't be in the past!"}),
    checkout: z.iso.date(),
    request: z.string().optional()
}).check((ctx) => {
    if (Date.parse(ctx.value.checkout) < Date.parse(ctx.value.checkin)) {
        ctx.issues.push({
            code: "custom",
            message: "Check-out date can't be before check-in date!",
            path: ['checkout'],
            input: ctx.value.checkout,
            continue: true,
        })
    }
})

export async function createMessage(prevState: any, formData: FormData) {
    const validData = await schema.safeParseAsync({
        name: formData.get('name'),
        room: formData.get('room'),
        checkin: formData.get('checkin'),
        checkout: formData.get('checkout'),
        request: formData.get('request')
    })

    if (!validData.success) {
        return {message:'', error: z.flattenError(validData.error)}
    } else {
        return ({
            message: `Hi, i'm interested in your services,\nName: ${validData.data.name}\nCheck-in: ${validData.data.checkin}\nRoom: ${validData.data.room}\nCheck-out: ${validData.data.checkout}\nSpecial request:${validData.data.request ? '-' : validData.data.request}`
        })}
}