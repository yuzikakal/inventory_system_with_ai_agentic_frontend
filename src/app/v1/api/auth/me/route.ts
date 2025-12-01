import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json({ auth: false, message: "No token" });
  }

  const user = verifyToken(token);
  if (!user) {
    return NextResponse.json({ auth: false, message: "Invalid token" });
  }

  return NextResponse.json({ auth: true, user });
}

export async function POST() {
  return NextResponse.json(
    { message: "Please use GET method for login" },
    { status: 405 }
  );
}