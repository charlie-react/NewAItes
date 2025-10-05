"use client"

import useModal from "@/hooks/useModal"

export default function Navbar({ user }) {
  const { openModal,closeModal,isOpen } = useModal()
  return (
    <>
      {isOpen && <div className="w-full h-full bg-black/50 fixed" onClick={closeModal}></div>}
      <nav className="flex justify-between items-center py-6 shadow-md gap-3  space-x-2 bg-purple-500  text-white px-5">
        <h1 className="text-2xl md:text-4xl font-bold cursor-pointer">
          <a href="/">
            NewAItes
          </a>
        </h1>
        <ul className="flex gap-3 items-center justify-between text-sm font-semibold cursor-pointer">
          <li>
            <a  href="/products" >
              Products
            </a>
          </li>
          <li>
            <a  href="/about" >
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
          <div>
            {user ? <a href="/dashboard">
              <button className="p-3 rounded-md text-slate-500 bg-white font-semibold text-base cursor-pointer">
                Go to dashboard
              </button>
            </a> : <div className="flex gap-2">

              <li>
                <button className="bg-white  text-purple-500 px-3 py-2 md:py-4 rounded-md md:px-6 flex-1 cursor-pointer" onClick={() => openModal("signup")} >
                  Sign Up
                </button>
              </li>
              <li>
                <button className="bg-white rounded-md text-purple-500 px-3 py-2 md:py-4 md:px-6 flex-1 cursor-pointer" onClick={() => openModal("login")}>
                  Log in
                </button>
              </li>
            </div>}
          </div>
        </ul>
      </nav>
    </>
  )
}