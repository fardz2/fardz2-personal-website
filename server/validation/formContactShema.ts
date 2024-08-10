import { z } from "zod";

export const formContactSchema = z.object({
    fullname: z.string().min(2, {
      message: "Fullname must be at least 2 characters",
    }),
    email: z.string().email("This is not a valid email"),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters",
    }),
  });
  