'use client'

import {useActionState} from "react";
import {createMessage} from "@/actions";

type formError = {
    message: string,
    error?: {
        formErrors: string[],
        fieldErrors: {
            name: string[],
            room: string[],
            checkin: string[],
            checkout: string[],
            request: string[] | undefined
        }
    }
}

const initialState: formError = {
    message: '',
    error: {
        formErrors: [''],
        fieldErrors: {
            name: [''],
            room: [''],
            checkin: [''],
            checkout: [''],
            request: ['']
        }
    }
};

let messageNotSent = true;

export default function ContactForm() {
    const [state, formAction, pending] = useActionState(createMessage, initialState)

    if (state.message !== '' && messageNotSent) {
        sendMessage(state.message);
        messageNotSent = false;
    }

    return (
        <form action={formAction}>
            <label htmlFor={`name`}>Enter your name: </label>
            <input placeholder={state?.error?.fieldErrors?.name?.at(0)} type={`text`} name={`name`} id={`name`}
                   required/>
            <br/>
            <label htmlFor={`room`}>Room type:</label>
            <input placeholder={state?.error?.fieldErrors?.room?.at(0)} type={`text`} name={`room`} id={`room`}
                   required/>
            <br/>

            <label htmlFor={`checkin`}>Check-in:</label>
            <span>{state?.error?.fieldErrors?.checkin?.at(0)}</span>
            <input type={`date`} name={`checkin`} id={`checkin`} required/>
            <br/>

            <label htmlFor={`checkout`}>Check-out:</label>
            <span>{state?.error?.fieldErrors?.checkout?.at(0)}</span>
            <input placeholder={state?.error?.fieldErrors?.checkout?.at(0)} type={`date`} name={`checkout`}
                   id={`checkout`} required/>
            <br/>

            <label htmlFor={`request`}>Special request</label>
            <input type={`text`} name={`request`} id={`request`}/>
            <br/>

            <input type={`submit`} disabled={pending}/>
        </form>
    )
}

function sendMessage(message: string) {
    const encMessage = encodeURIComponent(message);
    window.open(`https://wa.me/355683317663?text=${encMessage}`, '_blank');
}