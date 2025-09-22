import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
  const token = req.cookies.get("authToken")?.value;

  
  if (!token) {
    if (req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/settings")) {
      return NextResponse.redirect(new URL("/?authError=expired", req.url));
    }
    return NextResponse.next();
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    // Token invalid → redirect only if they're on protected page
    if (req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/settings")) {
      return NextResponse.redirect(new URL("/?authError=expired", req.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};
