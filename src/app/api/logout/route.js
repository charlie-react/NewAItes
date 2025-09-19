import { NextResponse } from "next/server";

export async function GET(req) {

    const token = await req.cookies.get("authToken")
    const res =NextResponse.redirect(new URL("/", req.url))
    res.cookies.set("", token, { httpOnly: true, expires:new Date(0),path:"/" })
    return res

}