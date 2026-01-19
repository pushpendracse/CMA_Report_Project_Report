"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { supportSchema } from "@/Schemas/support-schema";
import InputFormField from "@/components/form-fields/InputFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { toast } from "sonner";
import axios from "axios";
import { Loader2 } from "lucide-react";


export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof supportSchema>>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: z.infer<typeof supportSchema>) {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/support", {
        ...values,
      });
      toast.success(response.data.message)
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Card className="w-full max-w-lg bg-card shadow-lg border-border">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-foreground">Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <InputFormField
              wrapperClassName="col-span-2"
              control={form.control}
              name="name"
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
              name="phoneNumber"
              label="Phone Number"
              placeholder="+91 8329493953"
            />

            <InputFormField
              wrapperClassName="col-span-2"
              control={form.control}
              name="message"
              label="Message"
              placeholder="eg. Lorem ipsum doler sit"
              type="textarea"
            />


            <Button
              type="submit"
              variant="default"
              className=" col-span-2 w-full py-6 font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
