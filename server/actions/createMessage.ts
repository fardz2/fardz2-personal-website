'use server'

import db from "@/db";
import { formContactSchema } from "../validation/formContactShema"
import { Prisma } from "@prisma/client";

export async function createMessage(prevState: any,data: FormData) {
    await new Promise((res) => setTimeout(res, 2000));
    try {
        const formData = Object.fromEntries(data);
        const validatedFields = formContactSchema.safeParse(formData);
        
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
          }
        }
        await db.message.create({
            data: {
                fullName: validatedFields.data.fullname as string,
                email: validatedFields.data.email as string,
                message: validatedFields.data.message as string,    
            }});
        prevState.type = "success"
        return prevState;
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          // The .code property can be accessed in a type-safe manner
          if (e.code === 'P2002') {
            throw new Error('There was a unique constraint error in the database')
          }
        }
        throw e
      }

}