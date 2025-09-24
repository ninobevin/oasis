 "use server";

import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();


export async function LoginAction(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const user = await prisma.user.findFirst({
    where: {
      username: String(username),
      password: String(password),
    },
  })
  // 🔐 1. Validate user (e.g., DB lookup)
  if (!user || user.password !== String(password)) {
    // Invalid credentials json response
     return { success: false, error: "Invalid credentials" }
  }

// 🔐 2. Create JWT token
const token: string = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: "1h" });


  // 🍪 3. Set HTTP-only cookie
  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS only in prod
    path: "/",
    maxAge: 60 * 60, // 1 hour
  })



  return { success: true };
}