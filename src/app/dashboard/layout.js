"use client"
import { LayoutDashboard, Package, Settings, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Logout from "../components/Logout";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {

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
            <aside className="hidden w-64 min-h-screen md:flex flex-col gap-3 bg-black p-4  text-white">
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
            <main className="flex-1">
                {children}
            </main>
        </div>

    )
}