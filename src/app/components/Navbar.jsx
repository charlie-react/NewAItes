"use client"


export default function Navbar({open}) {

  return (
    <nav className="flex justify-between items-center py-6 px-4 shadow-md gap-3  space-x-2">
      <h1 className="text-4xl font-bold ">
        NewAItes
      </h1>
      <ul className="flex gap-3 items-center justify-between text-sm font-semibold cursor-pointer">
        <li>
          <a   >-
            About
          </a>
        </li>
        <li>
          <a>
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="bg-gradient-to-r from-teal-500 to-pink-500 text-white  py-4 rounded-md px-7" onClick={()=>open("signup")} >
            Sign Up
          </a>
        </li>
        <li>
          <a href="#" className="bg-gradient-to-r from-teal-500 to-pink-500 rounded-md text-white py-4 px-7 " onClick={()=>open("login")}>
            Log in
          </a>
        </li>
      </ul>
    </nav>
  )
}