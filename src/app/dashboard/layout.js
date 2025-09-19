// "use client"

import { HomeIcon, LogOut, LucideArchive, Settings, SidebarIcon, User } from "lucide-react";
import Link from "next/link";
import {  cookies } from "next/headers";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken"
// import { useRouter } from "next/router";

export default async function DashboardLayout({ children }) {

    // async function handleLogout() {
    //     const res = await fetch("/api/logout", {
    //         method: "POST",
    //         headers: { "Content": "application/json" }
    //     })

    //     const data = await res.json()
    //     if (res.ok) {
    //         setInterval(() => {
    //             window.location.href = '/dashboard'
    //         }, 1500);
    //     }
    // }
    const cookiesCheck = await cookies()
    const token = cookiesCheck.get("authToken")?.value
    let user =null

    if(token){
        try {
            const decodeToken = jwt.verify(token,process.env.JWT_SECRET)
            user = await prisma.user.findUnique({
                where:{id:decodeToken.userId},
                select:{id:true,name:true,email:true}
            })
        } catch (err) {
            return err
        }
    }
    return (

        <div className="flex flex-row ">
            <aside className="w-64 flex flex-col gap-3 bg-gradient-to-br p-4 from-amber-900 via-gray-800 to-orange-200  text-white/80">
                <div className="flex justify-between items-center gap-2 p-6 bg-slate-200/70 rounded-lg  text-black/50">
                    <SidebarIcon size={24} />
                    <h2 className="text-lg flex-1 text-nowrap ">
                        Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1) || "Guest"}.
                    </h2>
                </div>
                <div className="flex flex-col px-2 py-6 bg-slate-200/70 gap-4 rounded-lg text-black/50">
                    <div className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer">
                        <HomeIcon />
                        <Link href={"/"} className=" font-semibold ml-4">
                            Home
                        </Link>
                    </div>
                    <div className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer">
                        <LucideArchive />
                        <Link href={"/dashboard/orders"} className=" font-semibold ml-4">
                            Orders
                        </Link>
                    </div>
                    <div className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer">
                        <User />
                        <Link href={"/dashboard/profile"} className=" font-semibold ml-4">
                            Profile
                        </Link>
                    </div>
                    <div className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer ">
                        <Settings />
                        <Link href={"/dashboard/settings"} className=" font-semibold ml-4">
                            Settings
                        </Link>
                    </div>
                </div>
                <Link href={("/api/logout")} className="flex mt-8 gap-2 items-center cursor-pointer" >
                    <LogOut />
                    <h3 className="text-lg">
                        <span>
                            Logout
                        </span>
                    </h3>
                </Link>
            </aside>
            <main className="flex-1">
                {children}
            </main>
        </div>

    )
}