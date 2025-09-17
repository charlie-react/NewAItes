"use client"


export default function Navbar({open}) {

  return (
    <nav className="flex justify-between items-center py-6 px-4 shadow-md gap-3  space-x-2">
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
        <li>
          <button   className="bg-gradient-to-r from-teal-500 to-pink-500 text-white px-3 py-2 md:py-4 rounded-md md:px-6 flex-1 cursor-pointer" onClick={()=>open("signup")} >
            Sign Up
          </button>
        </li>
        <li>
          <button   className="bg-gradient-to-r from-teal-500 to-pink-500 rounded-md text-white px-3 py-2 md:py-4 md:px-6 flex-1 cursor-pointer" onClick={()=>open("login")}>
            Log in
          </button>
        </li>
      </ul>
    </nav>
  )
}