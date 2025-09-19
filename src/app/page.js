"use client"

import Modal from "@/components/ui/modal";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import useModal from "@/hooks/useModal";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";



export default function Home() {

  const searchParams = useSearchParams()
  const authError = searchParams.get("authError")

  useEffect(() => {
    if (authError) {
      useModal.OpenModal("login")
    }
  }, [authError])
  const { isOpen, OpenModal, CloseModal } = useModal()
  return (
    <div className=" bg-gradient-to-br from-teal-500/80 via-purple-600/50 to-pink-500/50 text-slate-800/90" >
      {isOpen && <div className="w-full h-full bg-black/50 fixed" onClick={CloseModal}></div>}
      <Navbar open={OpenModal} />
      {isOpen === "signup" && <Modal close={CloseModal} header={"Register an account."} buttonLabel={"Create account"} signup open={OpenModal} underLabel={"Got an account already?Login here"} />}
      {isOpen === "login" && <Modal open={OpenModal} close={CloseModal} header={"Welcome Back"} buttonLabel={"Login"} underLabel={"Don't have an account?Sign up"} />}
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
