import { contactSchema } from "../utils/zodSchema";

export async function postUserMessage(values) {
    const res = contactSchema.safeParse(values); // server side validation

    if (!res.success) {
        // Extract all error messages
        // const messages = res.error.errors.map(err => err.message).join(", ");
        // return {
        //     status: "error",
        //     message: messages
        // } 
    }
    console.log(values.name);
    return {
        status: "success"
    }
}