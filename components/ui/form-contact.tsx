"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useActionState, useEffect, useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { formContactSchema } from "@/server/validation/formContactShema";
import { createMessage } from "@/server/actions/createMessage";
import { useToast } from "./use-toast";
import { Button } from "./button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
const initialState = {
  message: "",
};
export function FormContact() {
  const { toast } = useToast();
  const [state, formAction, pending] = useActionState(
    createMessage,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });
  useEffect(() => {
    if (state.type === "success") {
      toast({
        description: "Your message has been sent.",
      });
      form.reset();
    }
  }, [state, form, toast]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(evt);
        }}
      >
        <div className="grid md:grid-cols-2 grid-rows-1 gap-4">
          <div>
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="Fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="mt-10 font-bold flex items-center justify-between gap-2"
          disabled={pending}
          aria-disabled={pending}
        >
          {pending ? "Submitting..." : "Send"}
          <PaperPlaneIcon className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
