"use client"


import Hero from "../components/Hero";
import Innovations from "../components/Innovations";
import Impact from "../components/Impact";
import PreFooter from "../components/PreFooter";
import StarryBackground from "../components/StarryBackground";



export default function Home() {

  // const searchParams = useSearchParams()
  // const authError = searchParams.get("authError")
 
  // useEffect(() => {
  //   if (authError) {
  //     openModal("login")
  //   }
  // }, [authError,openModal])

  return (
    <>
    <StarryBackground/>
    <div className="p-6 md:p-24 " >
      <Hero />
     <Innovations/>
     <Impact/>
     <PreFooter/>
    </div>
    </>
  ); 
}
