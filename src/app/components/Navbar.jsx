"use client"

import useModal from "@/hooks/useModal"
import Image from "next/image"
import { usePathname } from "next/navigation"
export default function Navbar({ user }) {
  const { openModal, closeModal, isOpen } = useModal()
  const pathname = usePathname()
  return (
    <>
      {isOpen && <div className="w-full h-full bg-black/50 fixed" onClick={closeModal}></div>}
      <nav className={`flex justify-between items-center py-1 gap-3 ${pathname === "/products" ? "bg-gradient-to-br from-teal-400 via-pink-300 to-purple-400" : "bg-[#101622]"}  text-white px-5 md:px-22 border-b border-[#1d513f] max-h-[80px]`}>
        <a href="/">
          <Image
          src="/logo.png"
          alt="NewAItes logo"
          width={90}
          height={60}
          className="object-contain mr-3 cursor-pointer transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
        />
        </a>
        <ul className="hidden md:flex gap-6 items-center justify-between text-md font-semibold cursor-pointer ">
          <li className={`${pathname === "/products" ? "hidden" : "block"} transition-transform hover:text-[#135bec]`}>
            <a href="/products" >
              Products
            </a>
          </li>
          <li className="transition-transform hover:text-[#135bec]">
            <a href="/about" >
              About
            </a>
          </li>
          <li  className="transition-transform hover:text-[#135bec]">
            <a href="/contact">
              Contact
            </a>
          </li>
          <li  className="transition-transform hover:text-[#135bec]">
            <a href="/innovations">
              Innovations
            </a>
          </li>

        </ul>
        <div>
          {user ? <a href="/dashboard">
            <button className="p-3 rounded-md text-slate-500 bg-white font-semibold text-base cursor-pointer">
              Go to dashboard
            </button>
          </a> : <div className="flex gap-2">
            <button className={`${pathname==='/products'?"bg-white" : "bg-[#135bec]"}   ${pathname === "/products" ? "text-orange-400" : " text-[#e5e7eb]"} px-3 py-2 md:py-2 text-md font-semibold rounded-lg transition-transform hover:scale-105 md:px-3 flex-1 cursor-pointer`} onClick={() => openModal("signup")} >
              Get Started
            </button>
            {/* <li>
                <button className={`bg-white rounded-md ${pathname==="/products"?"text-orange-400":"text-purple-500"} px-3 py-2 md:py-4 md:px-6 flex-1 cursor-pointer`} onClick={() => openModal("login")}>
                  Log in
                </button>
              </li> */}
          </div>}
        </div>
      </nav>
    </>
  )
}