import { NextRequest, NextResponse } from "next/server";

export async function middleware(req) {
  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
}

async function isAuthenticated(req) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (!authHeader) return false;

  // Decode Base64 credentials using the built-in atob function
  const credentials = authHeader.split(" ")[1];
  const [username, password] = atob(credentials).split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.HASHED_ADMIN_PASSWORD
  );
}

export const config = {
  matcher: "/admin/:path*",
};
