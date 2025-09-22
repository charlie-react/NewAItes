"use client"

import useModal from "@/hooks/useModal"

export default function Navbar({  user }) {
const {openModal} = useModal()
  return (
    <nav className="flex justify-between items-center py-6 px-4 shadow-md gap-3  space-x-2 bg-gradient-to-br from-teal-500/80 via-purple-300 to-pink-200/50 text-slate-800/90">
      <h1 className="text-2xl md:text-4xl font-bold cursor-pointer">
        NewAItes
      </h1>
      <ul className="flex gap-3 items-center justify-between text-sm font-semibold cursor-pointer">
        <li>
          <a   >
            About
          </a>
        </li>
        <li>
          <a>
            Contact
          </a>
        </li>
        <div>
          {user ? <p>
            yo,{user.name}
          </p> : <div className="flex gap-2">

            <li>
              <button className="bg-gradient-to-r from-teal-500/70 to-pink-500/60 text-white px-3 py-2 md:py-4 rounded-md md:px-6 flex-1 cursor-pointer" onClick={() => openModal("signup")} >
                Sign Up
              </button>
            </li>
            <li>
              <button className="bg-gradient-to-r from-teal-500/70 to-pink-500/60 rounded-md text-white px-3 py-2 md:py-4 md:px-6 flex-1 cursor-pointer" onClick={() => openModal("login")}>
                Log in
              </button>
            </li>
          </div>}
        </div>
      </ul>
    </nav>
  )
}