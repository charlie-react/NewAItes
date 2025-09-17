import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const { email, password } = await req.json()

        //  check if user exists

        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (!existingUser) {
            return NextResponse.json({ error: "User does not exist" }, { status: 401 })
        }

        // compare password
        const comparePassword = await bcrypt.compare(password, existingUser.password)
        if (!comparePassword) {
            return NextResponse.json({ error: "Incorrect password.Please try again" }, { status: 401 })
        }

        // add token
        const token = jwt.sign({ userId: existingUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" })

        const res = NextResponse.json({ message: "Logged in succesfully" }, { status: 200 })
        res.cookies.set("authToken", token, { httpOnly: true })
        return res
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}