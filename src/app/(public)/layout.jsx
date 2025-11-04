"use client"

export const dynamic = "force-dynamic";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import Modal from "@/components/ui/modal";


export default function PublicLayout({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    console.log(storedUser)
    if (storedUser) setUser(storedUser)
  }, [])
 const { isOpen, openModal, closeModal } = useModal()

  return (
    <div>
      
      <Navbar user={user} />
      {isOpen && <div className="w-full h-full bg-black/80 fixed" onClick={closeModal}></div>}
      {isOpen === "signup" && <Modal close={closeModal} header={"Register an account."} buttonLabel={"Create account"}  signup open={openModal} underLabel={"Got an account already?Login here"} submitLabel={"Creating Account..."} />}
      {isOpen === "login" && <Modal open={openModal} close={closeModal} header={"Welcome Back!"} buttonLabel={"Login"} underLabel={"Don't have an account?Sign up"} submitLabel={"Logging In..."} />}
      <main>{children}</main>
      <Footer />
    
    </div>
  );
}
