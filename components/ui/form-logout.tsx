"use client";

import { useToast } from "@/components/ui/use-toast";
import { signout } from "@/server/actions/actions";
import { useRef } from "react";

export default function FormLogout() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async () => {
        await signout();
        toast({
          description: "You have been signed out.",
          variant: "destructive",
        });
      }}
    >
      <button type="submit" className="bg-red-500 text-white">
        Sign Out
      </button>
    </form>
  );
}
