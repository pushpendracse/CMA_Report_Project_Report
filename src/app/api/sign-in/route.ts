import { headers } from "next/headers";
import { auth } from '@/lib/auth'
import { NextResponse } from "next/server";
import { signInSchema } from "@/Schemas/sign-in-schema";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = signInSchema.parse(body);

    const data = await auth.api.signInEmail({
      body: {
        email, // required
        password, // required
        rememberMe: true,
        callbackURL: "http://localhost:3000/dashboard",
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json({
      message: "Signed In Successfully",
      data
    }, { status: 200 })

  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          errors: error.issues.map((err: any) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }
    console.log(error)
    return NextResponse.json({
      message: error.message
    }, { status: error.statusCode })
  }
}

