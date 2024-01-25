"use client";

import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodError, z } from "zod";

import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";

import { useRouter, useSearchParams } from "next/navigation";
import AlertButton from "@/components/AlertButton";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  //   const isSeller = searchParams.get("as") === "seller";
  const isSeller = searchParams.get("jako") === "sprzedawca";
  const origin = searchParams.get("origin");

  const continueAsSeller = () => {
    // router.push('?as=seller')
    router.push("?jako=sprzedawca");
  };

  const continueAsBuyer = () => {
    // router.replace("/sign-in", undefined);
    router.replace("/logowanie", undefined);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
    onSuccess: () => {
      //   toast.success("Signed in successfully");
      toast.success("Logowanie pomyślne");

      router.refresh();

      if (origin) {
        router.push(`/${origin}`);
        return;
      }

      if (isSeller) {
        router.push("/sell");
        return;
      }

      router.push("/");
      router.refresh();
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        // toast.error("Invalid email or password.")
        toast.error("Niewłaściwy email lub hasło.");
      }
    },
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    signIn({ email, password });
  };

  return (
    <>
      <AlertButton />
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-semibold tracking-tight">
              {/* Sign in to your {isSeller ? 'seller' : ""} account*/}
              Zaloguj się do swojego konta {isSeller ? "sprzedawcy" : ""} .
            </h1>
            <Link
              // href="/sign-in"
              href="/rejestracja"
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              {/* Don*apos;t have account? */}
              Nie masz konta? Zarejestruj się.
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="uzytkownik@test.pl"
                    // placeholder="you@example.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  {/* <Label htmlFor="password">password</Label> */}
                  <Label htmlFor="password">Hasło</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    // placeholder="Password"
                    placeholder="haslo123"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button>Zaloguj się</Button>
              </div>
            </form>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {" "}
                  albo
                </span>
              </div>
            </div>
            {/* {isSeller ? (
              <Button onClick={continueAsBuyer} variant="secondary"
                disabled={isLoading}>Continue as user</Button>
            ) : (
              <Button onClick={continueAsSeller} variant="secondary"
                disabled={isLoading}>Continue as seller</Button>
            )} */}
            {isSeller ? (
              <Button
                onClick={continueAsBuyer}
                variant="secondary"
                disabled={isLoading}
              >
                Kontynuuj jako użytkownik
              </Button>
            ) : (
              <Button
                onClick={continueAsSeller}
                variant="secondary"
                disabled={isLoading}
              >
                Kontynuuj jako sprzedawca
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
