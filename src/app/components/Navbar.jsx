"use client"

import useModal from "@/hooks/useModal"
import Image from "next/image"
import { usePathname } from "next/navigation"
export default function Navbar({ user }) {
  console.log(user)
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
          <li className={`transition-transform hover:scale-x-105`}>
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
          {user ? <a href="/dashboard">
            <button className="p-2 rounded-md text-slate-500 bg-white font-semibold text-base cursor-pointer transition-transform hover:scale-105">
              Hello, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </button>
          </a> : <div className="flex gap-2">
            <button className={`bg-white text-black px-3 py-2 md:py-2 text-md font-semibold rounded-lg transition-transform hover:scale-105 md:px-3 flex-1 cursor-pointer`} onClick={() => openModal("signup")} >
              Get Started
            </button>
          </div>}
        </div>
        
      </nav>
    </>
  )
}