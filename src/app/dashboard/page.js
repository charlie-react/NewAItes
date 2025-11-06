"use client"

export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/ui/dashboard-card";
import { announcements, projects, recentActivity, stats } from "@/data";
import ProjectCard from "@/components/ui/project-card";
import RecentActivities from "../components/RecentActivities";
import Announcements from "../components/Announcements";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader";



export default function Dashboard() {
       const [isLoading,setIsLoading]= useState(true)
       const [user, setUser] = useState(null);
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.replace("/")
        }else{
            setIsLoading(false)
        }
    }, [router])

 

    useEffect(() => {

        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) setUser(storedUser);
    }, []);


    const hour = new Date().getHours()
    let greeting
    if (hour < 12) {
        greeting = "Good morning"
    } else if (hour < 18) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good evening"
    }
if(isLoading){
    return(
       <div className="mx-auto flex justify-center w-full h-full items-center bg-black/80">
         <Loader/>
       </div>
    )
}
    return (
        <div className="bg-black/80 text-white h-full p-2">
            <div className="mb-5 flex flex-col gap-3 md:flex-row justify-center md:justify-between items-center py-6 px-6 ">
                <h1 className="font-bold md:font-semibold text-2xl md:text-3xl">
                    {greeting}, {user && user.name.charAt(0).toUpperCase() + user.name.slice(1) || ""}!👋
                </h1>
                <Button className={"py-4 px-2 md:py-6 md:px-3 cursor-pointer italic font-semibold md:text-md text-white bg-black"}>
                    Start New Project
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 gap-4 mt-8 ">
                {stats.map((stat) => (
                    <DashboardCard key={stat.id} label={stat.label} value={stat.value} icon={stat.icon} />
                ))}
            </div>
            <section className="mt-8 flex flex-col gap-4 items-center justify-center">
                <div className="flex justify-center items-center gap-2 p-2">
                    <h1 className="text-3xl font-bold">
                        Your Projects
                    </h1>
                    <Button size={"sm"} variant={""} className={"cursor-pointer bg-black text-white"}>
                        ➕ New Project
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 gap-4 mt-8 mb-5" >
                    {projects.map(({ id, status, lastUpdated, name }) => (

                        <ProjectCard key={id} status={status} lastUpdated={lastUpdated} name={name} />
                    ))}
                </div>
            </section>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                <div className="flex flex-col gap-2 ">
                    <h1 className="md:text-lg text-xl font-semibold text-center mb-3">
                        Recent Activity
                    </h1>
                    <div  >
                        {recentActivity.map(({ id, icon, time, message }) => (
                            <RecentActivities icon={icon} key={id} time={time} message={message} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 md:mt-0 ">
                    <h1 className="md:text-lg text-xl font-semibold text-center mb-3">
                        Announcements/Updates
                    </h1>
                    <div className="flex  flex-col gap-2" >
                        {announcements.map(({ id, icon, time, message }) => (
                            <Announcements icon={icon} key={id} time={time} message={message} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}