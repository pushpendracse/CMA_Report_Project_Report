"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { signUpSchema } from "@/Schemas/sign-up-schema";
import InputFormField from "@/components/form-fields/InputFormField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";


export default function SignUpForm() {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    try {
      if (termsAndConditions) {
        setIsLoading(true);
        const response = await axios.post("/api/signup", {
          ...values,
          termsAndConditions: termsAndConditions,
        });
      } else {
        toast.warning("You must agree to the terms and conditions");
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onGoogleSignUp() {
    try {
      setIsLoading(true);
      const values = form.getValues();
      if (termsAndConditions) {
        const response = await axios.post("/api/signup", {
          ...values,
          termsAndConditions: termsAndConditions,
        });
      } else {
        toast.warning("You must agree to the terms and conditions");
      }
    } catch (error: any) {
      console.error(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-lg bg-card shadow-lg border-border">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-foreground">Create an account</CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-4">
          <Button variant="outline" className="w-full py-6 flex items-center justify-center gap-2 border-border hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer" onClick={() => { onGoogleSignUp() }}>
            <FaGoogle className="text-2xl" />
            Sign up with Google
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground text-[10px]">Or continue with email</span>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4"
          >
            <InputFormField
              control={form.control}
              name="fullName"
              label="Full Name"
              placeholder="John Doe"
            />

            <InputFormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="name@example.com"
            />

            <InputFormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="••••••••"
            />

            <InputFormField
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="••••••••"
            />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="termsAndConditions"
                className="cursor-pointer"
                checked={termsAndConditions}
                onCheckedChange={(checked) => setTermsAndConditions(checked === true)}
              />
              <Label
                htmlFor="termsAndConditions"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
              >
                I agree to the <Link href="/terms-and-conditions" className="text-primary hover:underline font-medium">Terms of Service</Link> and <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
              </Label>
            </div>

            <Button type="submit" variant="default" className="w-full py-6 font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer">
              Create Account
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-center gap-2">
        <div className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
