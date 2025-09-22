import { NextResponse } from "next/server";

export async function GET(req) {

    const res =NextResponse.redirect(new URL("/", req.url))
    res.cookies.set("authToken", "", { httpOnly: true, expires:new Date(0),path:"/" })
    return res

}