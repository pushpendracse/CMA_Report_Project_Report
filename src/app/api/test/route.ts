import dbConnect from "@/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(request: NextRequest) {
  await dbConnect()
  return NextResponse.json({
    message: "db connected."
  })
}
