"use client"
import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/ui/dashboard-card";
import { stats } from "@/stats";
import { projects } from "@/data";
import ProjectCard from "@/components/ui/project-card";

export default function Dashboard() {
    console.log(stats)
    const hour = new Date().getHours()
    console.log(hour)
    let greeting
    if (hour < 12) {
        greeting = "Good morning"
    } else if (hour < 18) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good evening"
    }

    return (
        <div className="bg-gradient-to-br h-screen  from-indigo-100 via-purple-100 to-pink-100 p-2">
            <div className="mb-5 flex flex-col gap-3 md:flex-row justify-center md:justify-between items-center py-6 ">
                <h1 className="font-semibold text-4xl">
                    {greeting}, Charles!👋
                </h1>
                <Button className={"py-6 px-3 cursor-pointer italic font-semibold text-xl text-black/70 bg-gradient-to-br from-purple-400 via-teal-300 to-amber-200"}>
                    Start A New AI Project
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-5">
                {stats.map((stat) => (
                    <DashboardCard key={stat.id} label={stat.label} value={stat.value} icon={stat.icon} />
                ))}
            </div>
            <section className="mt-4 flex flex-col gap-4">
                <div className="flex justify-center items-center gap-2 p-2">
                    <h1 className="text-3xl font-bold">
                        Your Projects
                    </h1>
                    <Button size={"sm"} className={"cursor-pointer"}>
                        ➕ New Project
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-5" >
                    {projects.map(({ id, status, lastUpdated, name }) => (

                        <ProjectCard key={id} status={status} lastUpdated={lastUpdated} name={name} />
                    ))}
                </div>
            </section>
        </div>
    )
}