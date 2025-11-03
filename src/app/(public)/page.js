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

  // const searchParams = useSearchParams()
  // const authError = searchParams.get("authError")
 
  // useEffect(() => {
  //   if (authError) {
  //     openModal("login")
  //   }
  // }, [authError,openModal])

  return (
    <div className=" bg-black/95  p-6 md:p-24" >
      <Hero />
     <Innovations/>
     <Impact/>
     <PreFooter/>
    </div>
  ); 
}
