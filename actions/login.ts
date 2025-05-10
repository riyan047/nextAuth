"use server";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

type LoginResponse =
  | { success: string; error?: undefined }
  | { error: string; success?: undefined };

export const login = async (
  values: z.infer<typeof LoginSchema>
): Promise<LoginResponse> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid credentials!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: "Login successful!" };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.message === "CredentialsSignIn") {
        return { error: "Invalid credentials" };
      } else {
        return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};

