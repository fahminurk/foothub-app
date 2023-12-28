import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
  phone: z
    .string()
    .min(11)
    .max(12)
    .startsWith("08", { message: "Invalid phone number, must start with 08" }),
});

export const addressSchema = z.object({
  title: z.string().min(2),
  name: z.string().min(2),
  phone: z
    .string()
    .min(11)
    .max(12)
    .startsWith("08", { message: "Invalid phone number, must start with 08" }),
  address: z.string().min(3),
  addressDetails: z.string().min(3),
  city_id: z.string(),
  province_id: z.string(),
  isPrimary: z.boolean(),
});
