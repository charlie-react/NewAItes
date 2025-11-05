"use client"

import useModal from "@/hooks/useModal"
import { User } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
export default function Navbar({ user }) {
  const [openDash,setOpenDash] = useState(false)
  const { openModal } = useModal()
  const pathname = usePathname()
  
  return (
    <>
      {/* {isOpen && <div className="w-full h-full bg-black/80 fixed" onClick={closeModal}></div>} */}
      <nav className={`flex fixed w-full justify-between items-center py-1 gap-3 bg-black text-white px-5 md:px-22 border-b border-[#dceae5] max-h-[80px] top-0 left-0 z-50`}>
        <a href="/">
          <Image
          src="/logo.png"
          alt="NewAItes logo"
          width={110}
          height={70}
          className="object-contain mr-3 cursor-pointer transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg text-white"
        />
        </a>
        <ul className="hidden md:flex gap-6 items-center justify-between text-md font-semibold cursor-pointer ">
          <li className={`${pathname.includes( "/products") ? "hidden" : "block"} transition-transform hover:scale-x-105`}>
            <a href="/products" >
              Products
            </a>
          </li>
          <li className={`transition-transform  hover:scale-x-105`}>
            <a href="/about" >
              About
            </a>
          </li>
          <li  className={`transition-transform  hover:scale-x-105`}>
            <a href="/contact">
              Contact
            </a>
          </li>
          <li  className={`transition-transform  hover:scale-x-105`}>
            <a href="/innovations">
              Innovations
            </a>
          </li>

        </ul>
        <div className="flex items-center justify-center gap-2">
          {user ? <div className="relative">
            <button className="flex gap-2 p-2 rounded-md text-slate-500 bg-white font-semibold text-base cursor-pointer transition-transform hover:scale-105" onClick={()=>setOpenDash(prev=>!prev)}>
              <User className="rounded-full bg-slate-200 p-1"/>
              Hello, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </button>
           {openDash && <div className="absolute top-10 left-8 rounded-sm px-2 py-2 items-center justify-center flex flex-col gap-2 shadow-md bg-white text-black w-35 " >
            <a href="/dashboard" className="border-b border-slate-400 w-full hover:bg-slate-100  p-2">
                Dashboard
            </a>
            <a href="/dashboard/profile" className="w-full transition-transform duration-75 hover:bg-slate-100 p-2">
              Profile
            </a>
            </div>}
          </div> : <div className="flex gap-2">
            <button className={`bg-white text-black px-3 py-2 md:py-2 text-md font-semibold rounded-lg transition-transform hover:scale-105 md:px-3 flex-1 cursor-pointer`} onClick={() => openModal("signup")} >
              Get Started
            </button>
          </div>}
        </div>
        
      </nav>
    </>
  )
}