import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const cookie = serialize("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0), // langsung expired
  });

  const res = NextResponse.json({ success: true });
  res.headers.append("Set-Cookie", cookie);
  return res;
}

export async function GET() {
  return NextResponse.json(
    { message: "Please use POST method for logout" },
    { status: 405 }
  );
}