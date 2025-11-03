import { statusConfig } from "@/data"
import { Button } from "./button"

export default function ProjectCard({ name, status, lastUpdated }) {

    const { style } = statusConfig[status]
 
    return (
        <div className="flex w-[400px] md:w-full flex-col md:py-4 md:px-4 px-3 py-3 text-lg rounded-lg gap-2 bg-black  text-white shadow-xl">
            <h2 className="text-md  max-w-[400px]">
                Title: <span className="">
                    {name}
                </span>
            </h2>
            <p className="text-sm">
                Last updated: <span className="font-medium">
                    {lastUpdated}
                </span>
            </p>
            <div className={`${style} rounded-lg text-white text-center flex gap-1 items-center`}>
                
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
            <div className="flex px-2 items-center md:justify-center" >
                <Button variant={"ghost"} size={"sm"} className={"cursor-pointer"}>
                    👁View
                </Button>
                <Button variant={"ghost"} size={"sm"} className={"cursor-pointer"}>
                    ✏️Edit
                </Button>
                <Button variant={"ghost"} size={"sm"} className={"cursor-pointer"}>
                    ⚡Run
                </Button>
            </div>
        </div>
    )
}