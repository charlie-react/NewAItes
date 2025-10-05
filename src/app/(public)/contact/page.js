"use client"
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handleContactForm = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            })

            const data = await res.json()

            if (res.ok) {
                setSuccess(data.message || "Message sent successfully")
                setEmail("")
                setName("")
                setMessage("")
            } else {
                setError(data.error || "Message not sent")
            }
        } catch (err) {
            setError("Something went wrong. Please try again.")
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-500/10 via-purple-200/30 to-pink-200/30 py-12 px-6 md:px-20">

            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
                <p className="text-gray-600 mt-3">
                    Have questions about our AI solutions? We'd love to hear from you.
                    Reach out using the form below or through our contact details.
                </p>
            </div>


            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <h2 className="font-semibold text-lg">Email</h2>
                    <p className="text-gray-600 mt-2">hello@newaites.com</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <h2 className="font-semibold text-lg">Phone</h2>
                    <p className="text-gray-600 mt-2">+234 810 123 4567</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                    <h2 className="font-semibold text-lg">Office</h2>
                    <p className="text-gray-600 mt-2">Lagos, Nigeria</p>
                </div>
            </div>


            <form onSubmit={handleContactForm} className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                        placeholder="you@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        rows="5"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                        placeholder="Write your message..."
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500/80 to-pink-500/80 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                >
                    Send Message
                </button>
                {error && <p className="text-red-600 text-center">
                    {error}
                </p>}
                {success && <p className="text-teal-600 text-center">
                    {success}
                </p>}
            </form>
        </div>
    );
}
