import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  name: z.string().min(1, { message: "required" }),
  phone: z
    .string()
    .min(11, { message: "Invalid phone number" })
    .max(12, { message: "Invalid phone number" })
    .startsWith("08", {
      message: "Invalid phone number must start with 08, ex: 08123456789",
    }),
});

export const addressSchema = z.object({
  title: z.string().min(1, { message: "required" }),
  name: z.string().min(2, { message: "required" }),
  phone: z
    .string()
    .min(11, { message: "Invalid phone number" })
    .max(12, { message: "Invalid phone number" })
    .startsWith("08", {
      message: "Invalid phone number must start with 08, ex: 08123456789",
    }),
  address: z.string().min(3, { message: "required" }),
  addressDetails: z.string().min(3, { message: "required" }),
  city_id: z.string().min(1, { message: "required" }),
  province_id: z.string().min(1, { message: "required" }),
  isPrimary: z.boolean(),
});

export const profileSchema = z.object({
  name: z.string().min(1, { message: "required" }),
  phone: z
    .string()
    .min(11, { message: "Invalid phone number" })
    .max(12, { message: "Invalid phone number" })
    .startsWith("08", {
      message: "Invalid phone number must start with 08, ex: 08123456789",
    }),
});
