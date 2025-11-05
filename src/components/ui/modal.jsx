"use client"

export const dynamic = "force-dynamic";

import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { API_BASE_URL } from "@/config"
import toast from "react-hot-toast"



export default function Modal({ close, open, header, signup, buttonLabel, underLabel, submitLabel }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isNotReady, setIsNotReady] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleChangeModal = () => {
    open(signup ? "login" : "signup")
  }
  let isDisabled = signup
    ? !name.trim() || !email.trim() || !password.trim()
    : !email.trim() || !password.trim()

  const handleCreateAccount = async (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      setIsNotReady(true)
    }
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must be at least 8 characters long, include a number, an uppercase and lowercase letter."
      );
    }
      setIsSubmitting(true)
    try {
      const res = await fetch(`${API_BASE_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success(data.message || "Sign up successful")
        setEmail("")
        setName("")
        setPassword("")
        setIsSubmitting(false)
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        setInterval(() => {
          window.location.href = '/dashboard'
        }, 1500);
      } else {
        toast.error(data.message || data.error || "Unsuccessful registration")
        setIsSubmitting(false)
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      console.log(data)

      if (res.ok) {

        toast.success(data.message || "Login success")


        setEmail("")
        setPassword("")
        setIsSubmitting(false)
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

       setInterval(() => {
          window.location.href = '/dashboard'
        }, 1500);
      } else {
        toast.error(data.message || data.error || "Unsuccessful Log in attempt.")
        setIsSubmitting(false)
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again")

      setIsSubmitting(false)
    }
  }


  return (
    <div className="py-6 px-6 md:py-10 shadow-2xl bg-white  z-50 flex flex-col justify-center items-center gap-2 text-black w-90 md:w-180 md:h-100 rounded-sm top-10 left-6 md:left-70 md:top-40 fixed">
      <h1 className="text-2xl text-center mb-4">
        {header}
      </h1>
      <X className="cursor-pointer absolute top-5 right-5 text-black" size={24} onClick={close} />
      {<form onSubmit={signup ? handleCreateAccount : handleLogin} className={cn("flex flex-col p-5 gap-5 md:p-6 shadow-2xl w-full md:w-2/3  border-1 border-black justify-center h-70", signup && "h-80 md:h-80")}>
        {signup && <input type="text" placeholder="Enter a name..." className="outline-2 p-3 text-slate-800" value={name} onChange={(e) => setName(e.target.value)} />}
        <input type="text" placeholder="Enter email..." className="outline-2 p-3 text-slate-800" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password..." className="outline-2 p-3 text-slate-800" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isDisabled || isSubmitting} className={cn("mt-2 w-full rounded-sm text-white py-1.5 bg-black", isDisabled || isSubmitting ? "cursor-not-allowed"
          : "hover:bg-black cursor-pointer")}
        >
          {isSubmitting ? submitLabel : buttonLabel}
        </button>
      </form>}

      <span className="text-sm cursor-pointer underline mb-4" onClick={handleChangeModal}>
        {underLabel}
      </span>
    </div>
  )
}