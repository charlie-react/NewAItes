"use client"

export const dynamic = "force-dynamic";

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { API_BASE_URL } from "@/config"
import Link from "next/link"

export default function Logout() {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            await fetch(`${API_BASE_URL}/api/logout`, {
                method: "GET",
                credentials: "include"
            })
            localStorage.removeItem("user")
            router.push("/")
        } catch (err) {
            console.error("Login failed:", err)
        }
    }
    return (
        <div className="flex gap-1 p-3 items-center cursor-pointer transition-transform hover:scale-x-85" onClick={handleLogout}>
            <LogOut />
            < Link className="font-semibold ml-3" href={"/"} >
                Logout
            </Link>
        </div>
    )
} 