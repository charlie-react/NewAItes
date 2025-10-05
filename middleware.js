import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
  const token = req.cookies.get("authToken")?.value;
  const isProtected =
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname.startsWith("/settings");

  
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/?authError=expired", req.url));
  }

 
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.next();
    } catch (err) {
      if (isProtected) {
        return NextResponse.redirect(new URL("/?authError=expired", req.url));
      }
    }
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};
