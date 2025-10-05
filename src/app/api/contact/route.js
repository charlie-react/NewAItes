import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
    const { name, email, message } = await req.json()

    try {
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Required input missing" }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `A new contact form from ${name}`,
            text: message
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: "Interval server error" }, { status: 500 })
    }

}