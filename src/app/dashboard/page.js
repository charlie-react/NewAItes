
import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/ui/dashboard-card";
import { announcements, projects, recentActivity, stats } from "@/data";
import ProjectCard from "@/components/ui/project-card";
import RecentActivities from "../components/RecentActivities";
import Announcements from "../components/Announcements";
import getUserFromSession from "@/lib/sessions";


export default async function Dashboard() {
const user = await getUserFromSession()
    const hour = new Date().getHours()
    let greeting
    if (hour < 12) {
        greeting = "Good morning"
    } else if (hour < 18) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good evening"
    }

    return (
        <div className="bg-gradient-to-br h-full from-indigo-100 via-purple-100 to-pink-100 p-2">
            <div className="mb-5 flex flex-col gap-3 md:flex-row justify-center md:justify-between items-center py-6 ">
                <h1 className="font-semibold text-4xl">
                    {greeting}, {user.name.charAt(0).toUpperCase() + user.name.slice(1) || "Guest"}!👋
                </h1>
                <Button className={"py-6 px-3 cursor-pointer italic font-semibold text-xl text-black/70 bg-gradient-to-br from-purple-400 via-teal-300 to-amber-200"}>
                    Start A New AI Project
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ">
                {stats.map((stat) => (
                    <DashboardCard key={stat.id} label={stat.label} value={stat.value} icon={stat.icon} />
                ))}
            </div>
            <section className="mt-8 flex flex-col gap-4">
                <div className="flex justify-center items-center gap-2 p-2">
                    <h1 className="text-3xl font-bold">
                        Your Projects
                    </h1>
                    <Button size={"sm"} className={"cursor-pointer"}>
                        ➕ New Project
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-5" >
                    {projects.map(({ id, status, lastUpdated, name }) => (

                        <ProjectCard key={id} status={status} lastUpdated={lastUpdated} name={name} />
                    ))}
                </div>
            </section>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                <div className="flex flex-col gap-2 ">
                    <h1 className="text-lg font-semibold text-center mb-3">
                        Recent Activity
                    </h1>
                    <div  >
                        {recentActivity.map(({ id, icon, time, message }) => (
                            <RecentActivities icon={icon} key={id} time={time} message={message} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <h1 className="text-sm font-semibold text-center mb-3">
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