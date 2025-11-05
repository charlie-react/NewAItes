"use client"


import Hero from "../components/Hero";
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
    <div className=" animated-bg  p-6 md:p-24 " >
      <Hero />
     <Innovations/>
     <Impact/>
     <PreFooter/>
    </div>
  ); 
}
