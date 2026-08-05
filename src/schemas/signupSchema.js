import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(30, "First name cannot exceed 30 characters"),

  lastName: z
    .string()
    .trim(),

  emailId: z
    .string()
    .trim()
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});