import { z } from 'zod';


export const ContactInputSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email().min(1, 'Email is required'),
    message: z.string().min(1, 'Message is required'),
})


export type ContactInput = z.infer<typeof ContactInputSchema>