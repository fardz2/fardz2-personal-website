import { signOut } from "@/auth";

export default async function Dashboard() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit" className="bg-red-500 text-white">
        Sign Out
      </button>
    </form>
  );
}
