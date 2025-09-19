"use client"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"


export default function Modal({ close, open, header, signup, buttonLabel, underLabel }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")


  const handleChangeModal = () => {
    open(signup ? "login" : "signup")
  }

  const handleCreateAccount = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(data.message || "Sign up successful")
        setEmail("")
        setName("")
        setPassword("")
        setInterval(() => {
          window.location.href = '/dashboard'
        }, 1500);
      } else {
        setError(data.error || "Unsuccessful registration")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(data.message || "Login success")
        setEmail("")
        setPassword("")
        setInterval(() => {
          window.location.href = '/dashboard'
        }, 1500);
      } else {
        setError( "Unsuccessful Log in attempt.")
      }
    } catch (err) {
      setError("Something went wrong")
    }
  }
  return (
    <div className="py-12 shadow-2xl bg-slate-200/100 absolute z-100 flex flex-col justify-center items-center gap-2 text-black w-200 h-130 rounded-sm left-100 ">
      <h1 className="text-2xl text-center mb-4">
        {header}
      </h1>
      <X className="cursor-pointer absolute top-5 right-5 text-red-500" size={24} onClick={close} />
      {<form onSubmit={signup ? handleCreateAccount : handleLogin} className={cn("flex flex-col gap-5 p-6 shadow-2xl w-2/3  border-2 border-teal-100 justify-center h-70", signup && "h-100")}>
        {signup && <input type="text" placeholder="Enter a name..." className="outline-2 p-4" value={name} onChange={(e) => setName(e.target.value)} />}
        <input type="text" placeholder="Enter email..." className="outline-2 p-4" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password..." className="outline-2 p-4" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="mt-2 w-full rounded-sm text-white py-1.5 cursor-pointer bg-gradient-to-r from-teal-500 to-pink-500"
        >
          {buttonLabel}
        </button>
        {error && <p className="text-red-600 text-center">
          {error}
        </p>}
        {success && <p className="text-teal-600 text-center">
          {success}
        </p>}
      </form>}

      <span className="text-sm cursor-pointer underline" onClick={handleChangeModal}>
        {underLabel}
      </span>
    </div>
  )
}