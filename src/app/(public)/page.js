"use client"

import Modal from "@/components/ui/modal"
import useModal from "@/hooks/useModal";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Innovations";
import Innovations from "../components/Innovations";
import Impact from "../components/Impact";
import PreFooter from "../components/PreFooter";



export default function Home() {

  const searchParams = useSearchParams()
  const authError = searchParams.get("authError")
  const { isOpen, openModal, closeModal } = useModal()
  useEffect(() => {
    if (authError) {
      openModal("login")
    }
  }, [authError,openModal])

  return (
    <div className=" bg-[#101622] text-[#e5e7eb] p-6 md:p-24" >
      {isOpen && <div className="w-full h-full bg-black/50 fixed" onClick={closeModal}></div>}
      {isOpen === "signup" && <Modal close={closeModal} header={"Register an account."} buttonLabel={"Create account"} signup open={openModal} underLabel={"Got an account already?Login here"} />}
      {isOpen === "login" && <Modal open={openModal} close={closeModal} header={"Welcome Back"} buttonLabel={"Login"} underLabel={"Don't have an account?Sign up"} />}
      <Hero />
     <Innovations/>
     <Impact/>
     <PreFooter/>
    </div>
  );
}
