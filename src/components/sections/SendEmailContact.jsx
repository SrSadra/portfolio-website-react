"use client"

import { Form, useForm } from "react-hook-form"
import { contactSchema } from "../../app/utils/zodSchema"
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js"
import { postUserMessage } from "../../app/actions/contacts"
import { useFormStatus } from "react-dom"


const SendEmailContact = () => {
    const status = useFormStatus();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(contactSchema)
    });


    async function onSubmit(values) {
        await postUserMessage(values);
    }

    return (
        <div className='space-y-8'>
            <h3 className='items-center font-semibold mb-6 text-2xl'>Send Email</h3>
            {/* <Form control={control}> */}
            <form  className='py-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='relative'>
                    <input type='text' name='name' id='name' required className='m-2 w-full h-15 p-4 rounded-xl  bg-white/10 focus:outline-none focus:border-blue-500' placeholder='name...' {...register("name")} />
                    {errors.name && (<p>{errors.name?.message}</p>)}
                </div>
                <div className='relative'>
                    <input type="email" name='email' id='email' required className='m-2 w-full h-15 p-4 rounded-xl  bg-white/10 focus:outline-none focus:border-blue-500' placeholder='email...' {...register("email")} />
                    {errors.email && (<p>{errors.email?.message}</p>)}
                </div>
                <div className='relative'>
                    <textarea rows={5} name='message' id='message' required className='m-2 w-full h-25 p-4 rounded-xl resize-none  bg-white/10 focus:outline-none focus:border-blue-500' placeholder='message...' {...register("message")} />
                    {errors.message && (<p>{errors.message?.message}</p>)}
                </div>
                <button type='submit' className='w-full m-2 h-15  bg-blue-400 text-amber-50 px-5 py-3 rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] font-bold text-xl'>{status.pending ? "Sending..." : "Submit"}</button>
                </form>
                {/* </Form> */}
        </div>
    )
}

export default SendEmailContact
