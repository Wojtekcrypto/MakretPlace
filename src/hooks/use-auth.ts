import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAuth = () => {
  const router = useRouter();
  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error();

      //   toast.success("Signet out successfully");
      //   router.push("/sign-in");
      toast.success("Wylogowano się pomyślnie.");
      router.push("/logowanie");
      router.refresh();
    } catch (err) {
      //   toast.error("Couldn't sign out, try again.");
      toast.error("Problem z wylogowaniem, spróbuj ponownie.");
    }
  };

  return { signOut };
};
