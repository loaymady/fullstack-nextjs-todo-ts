import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(20, {
      message: "Title must not be longer than 20 characters.",
    }),
  body: z
    .string()
    .max(80, {
      message: "Please select an email to display.",
    })
    .optional(),
  completed: z.boolean(),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;
