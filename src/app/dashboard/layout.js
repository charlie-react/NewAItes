"use client"
import { LayoutDashboard, Package, Settings, ShoppingCart, User, Menu, X } from "lucide-react";
import Link from "next/link";
import Logout from "../components/Logout";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
        { name: "Products", href: "/products", icon: <Package size={20} /> },
        { name: "Purchases", href: "/dashboard/purchases", icon: <ShoppingCart size={20} /> },
        { name: "Profile", href: "/dashboard/profile", icon: <User size={20} /> },
        { name: "Settings", href: "/dashboard/settings", icon: <Settings size={20} /> },
    ];
    return (
        <div className="flex flex-row">
            <aside className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out w-64 min-h-screen md:flex flex-col gap-3 bg-black p-4  text-white ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:inset-0`}>
                <div className="flex flex-col px-2 py-6 gap-2 rounded-lg">
                    {links.map((link) => {
                        const isActive = pathname.includes(link.href) || pathname === link.href
                        return (
                            <div className={`flex gap-1 p-3 rounded-lg item-center cursor-pointer transition-transform hover:scale-x-80 ${isActive ? "border-l-2 border-white bg-white text-black" : ""}`} key={link.name}>
                                {link.icon}
                                <Link href={link.href} className=" font-semibold ml-3">
                                    {link.name}
                                </Link>
                            </div>
                        )
                    })}
                    <Logout />

                </div>
            </aside>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/65 bg-opacity-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <main className="flex-1 flex flex-col overflow-y-auto">
                <header className="flex items-center justify-between px-4 py-3 bg-black text-white shadow-md md:hidden">
                    <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </header>
                {children}
            </main>
        </div>

    )
}