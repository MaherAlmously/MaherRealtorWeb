import { z } from "zod";

export const intentValues = ["buy", "sell", "home-value", "other"] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter the number to reach you at." }),
  email: z.email({ message: "Please enter a valid email." }),
  intent: z.enum(intentValues, {
    message: "Choose one so Maher can prepare.",
  }),
  message: z
    .string()
    .trim()
    .max(600, { message: "Please keep it under 600 characters." })
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
