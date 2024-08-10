"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function ButtonContact() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={cn(
        "mt-10 font-bold flex items-center justify-between gap-2",
        pending ? "bg-red-600" : ""
      )}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Submitting..." : "Send"}
      <PaperPlaneIcon className="h-4 w-4" />
    </Button>
  );
}
