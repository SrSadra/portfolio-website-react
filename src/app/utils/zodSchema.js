import {z} from "zod"

export const contactSchema = z.object({
    name: z.string().max(10 , "name should not be more than 10 characters"),
    email: z.string(),
    message: z.string().max(500, "message should not be more than 500 charachter")
})