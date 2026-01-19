import { z } from "zod"

export const supportSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
  phoneNumber: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number"),
  message: z.string().min(1, "Message is required").max(200, "Message cannot exceed 200 words limit"),
})
