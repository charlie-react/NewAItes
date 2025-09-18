import { statusConfig } from "@/data"
import { Button } from "./button"

export default function ProjectCard({ name, status, lastUpdated }) {

    const { style } = statusConfig[status]
    console.log(style)
    return (
        <div className="flex flex-col py-6 px-2 rounded-md gap-3 text-lg bg-white/40 border border-purple-400 shadow-xl">
            <h2 className="text-sm">
                Title: <span className="font-medium">
                    {name}
                </span>
            </h2>
            <p className="text-sm">
                Last updated: <span className="font-medium">
                    {lastUpdated}
                </span>
            </p>
            <div className={`${style} rounded-lg text-center flex gap-1 items-center`}>
                
                <span className="text-sm">
                    {status == "Active" && <span>
                        🟢
                    </span>}   
                    {status == "Archived" && <span>
                        🔴
                    </span>}    
                    {status == "Draft" && <span>
                        🟡
                    </span>}   {status}
                </span>
            </div>
            <div >
                <Button variant={"ghost"} className={"cursor-pointer"}>
                    👁View
                </Button>
                <Button variant={"ghost"} className={"cursor-pointer"}>
                    ✏️Edit
                </Button>
                <Button variant={"ghost"} className={"cursor-pointer"}>
                    ⚡Run
                </Button>
            </div>
        </div>
    )
}