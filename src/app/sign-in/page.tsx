"use client"
import { authClient } from "@/lib/auth-client";
import axios from "axios";


export default function SignIn() {

  const signIn = async (e: React.FormEvent) => {
    await axios.get('/api/test')
    e.preventDefault()
    const { data, error } = await authClient.signUp.email({
      email: "anikrawat18@gmail.com", // user email address
      password: "anikrawat", // user password -> min 8 characters by default
      name: "anik", // user display name
    }, {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: (ctx) => {
        console.log("Signed up successfully")
        //redirect to the dashboard or sign in page
      },
      onError: (ctx) => {
        // display the error message
        console.log(ctx.error);
      },
    });
  }
  return (
    <form onSubmit={(e) => { signIn(e) }} className="flex min-h-screen items-center justify-center font-sans ">
      <input placeholder="email" />
      <input placeholder="password" />
      <button type="submit">submit</button>
    </form>
  );
}
