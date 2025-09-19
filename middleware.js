import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function middleware(req){
const token = req.cookies.get("authToken")?.value

if(!token){
    return NextResponse.redirect(new URL("/?authError=expired",req.url))
}
try {
   jwt.verify(token,process.env.JWT_SECRET) 
   return NextResponse.next() 
} catch (err) {
    return NextResponse.redirect(new URL("/?authError=expired",req.url))
}

}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};