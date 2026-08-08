import { z } from "zod";

export const editProfileSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name is too long"),

    lastName: z
        .string()
        .max(50, "Last name is too long"),

    photoURL: z
        .string()
        .url("Please enter a valid image URL"),

    age: z
        .number()
        .min(18, "Age must be at least 18")
        .max(100, "Please enter a valid age")
        .optional(),

    gender: z.enum(["Male", "Female", "Others"]),

    about: z
        .string()
        .max(500, "About cannot exceed 300 characters"),

    skills: z.preprocess(
        (value) => {
            if (typeof value === "string") {
                return value
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter(Boolean);
            }

            return value;
        },
        z
            .array(z.string())
            .max(15, "You can add maximum 15 skills")
    ),
});