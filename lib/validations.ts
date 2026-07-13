import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name is required")
    .max(150),

  email: z
    .string()
    .email("Invalid email address"),

  company: z
    .string()
    .min(2, "Company Name is required")
    .max(200),

  phoneCode: z
    .string()
    .min(1),

  phone: z
    .string()
    .min(10, "Invalid phone number")
    .max(20),

  industry: z
    .string()
    .min(1, "Industry is required"),

  product: z
    .string()
    .min(1, "Product is required"),

  country: z
    .string()
    .min(1, "Country is required"),

  companySize: z
    .string()
    .min(1, "Company Size is required"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

export type ContactFormData = z.infer<typeof contactSchema>;