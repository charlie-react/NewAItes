import { HomeIcon, LucideArchive, Settings, SidebarIcon, User } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        
            <div className="flex flex-row">
                <aside className="w-64 flex flex-col gap-3 bg-gradient-to-br p-4 from-amber-900 via-gray-800 to-orange-200 h-screen text-white/80">
                    <div className="flex justify-between items-center gap-2 p-6 bg-slate-200/70 rounded-lg  text-black/50">
                        <SidebarIcon size={24} />
                        <h2 className="text-xl ">
                            Welcome, Charles.
                        </h2>
                    </div>
                    <div className="flex flex-col px-2 py-6 bg-slate-200/70 gap-4 rounded-lg text-black/50">
                        <div className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer">
                            <HomeIcon />
                            <Link href={"/"} className=" font-semibold ml-4">
                                Home
                            </Link>
                        </div>
                        <div  className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer">
                            <LucideArchive />
                            <Link href={"/dashboard/orders"} className=" font-semibold ml-4">
                                Orders
                            </Link>
                        </div>
                        <div  className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer">
                            <User />
                            <Link href={"/dashboard/profile"} className=" font-semibold ml-4">
                                Profile
                            </Link>
                        </div>
                        <div  className="flex gap-1 p-3 border-1 border-slate-200 shadow rounded-sm item-center cursor-pointer ">
                            <Settings />
                            <Link href={"/dashboard/settings"} className=" font-semibold ml-4">
                                Settings
                            </Link>
                        </div>
                    </div>
                </aside>
                <main className="flex-1">
                    {children}
                </main>
            </div>
      
    )
}