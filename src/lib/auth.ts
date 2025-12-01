import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const SECRET_KEY = process.env.JWT_SECRET || "secret_key_super_random_dev_only";

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch {
    return null;
  }
}

export function createAuthCookie(token: string) {
  return serialize("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 hari
  });
}
