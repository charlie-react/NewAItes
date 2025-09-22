"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Logout() {
    const router = useRouter()
    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "GET"
        })
        router.refresh()
    }
    return (
        <div className="flex gap-2 items-center justify-center cursor-pointer">
            <LogOut/>
            <a onClick={handleLogout}>
                Logout
            </a>
        </div>
    )
} 