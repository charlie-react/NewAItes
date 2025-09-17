import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST (req) {
    try {
        const { name, email, password } = await req.json()

        // check if user exists
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // hash pass
    const hashedpassword = await bcrypt.hash(password, 10)

    // create user
    const user = await prisma.user.create({
        data:{name,email,password:hashedpassword}
    })

    // add token
    const token = jwt.sign({userId:user.id}, process.env.JWT_SECRET, {expiresIn:"1h"})

    const res = NextResponse.json({message:"You have signed up succesfully"},{status:200})
    res.cookies.set("authToken", token,{httpOnly:true})
    return res
    } catch (error) {
        return NextResponse.json({error:"Internal Server Error"},{status:500})
    }
}

 