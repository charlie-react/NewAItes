"use client"

import Modal from "@/components/ui/modal";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useModal from "@/hooks/useModal";



export default function Home() {

  const searchParams = useSearchParams()
  const authError = searchParams.get("authError")
   const { isOpen, openModal, closeModal } = useModal()

  useEffect(() => {
    if (authError) {
      openModal("login")
    }
  }, [authError])

  return (
    <div className="-mt-5 bg-gradient-to-br from-teal-500/80 via-purple-600/50 to-pink-500/50 text-slate-800/90" >
      {isOpen && <div className="w-full h-full bg-black/50 fixed" onClick={closeModal}></div>}
      {isOpen === "signup" && <Modal close={closeModal} header={"Register an account."} buttonLabel={"Create account"} signup open={openModal} underLabel={"Got an account already?Login here"} />}
      {isOpen === "login" && <Modal open={openModal} close={closeModal} header={"Welcome Back"} buttonLabel={"Login"} underLabel={"Don't have an account?Sign up"} />}
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
