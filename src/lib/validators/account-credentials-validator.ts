import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    // .min(8, { message: "Passwiord must be at least 8 character long." }),
    .min(8, { message: "Hasło musi zawierać co najmniej 8 znaków." }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
