"use client"

import { X } from "lucide-react"
import { Button } from "./button"

export default function Modal({close,header,signup,buttonLabel}) {
console.log(header,buttonLabel)
    return (
        <div className="py-12 shadow-2xl bg-slate-100 absolute z-100 flex flex-col justify-center items-center gap-2 text-black w-200 h-130 rounded-sm left-100">
            <h1 className="text-2xl text-center mb-4">
                {header}
            </h1>
            <X className="cursor-pointer absolute top-5 right-5 text-red-500" size={24} onClick={close}/>
            <form action="" method="" className="flex flex-col gap-5 p-6 shadow-2xl w-2/3 h-100">
                {signup && <input type="text" placeholder="Enter a name..." className="outline-2 p-4" />}
                <input type="text" placeholder="Enter email..." className="outline-2 p-4"/>
                <input type="password" placeholder="Enter password..." className="outline-2 p-4"
                />
            </form>
            <Button  size={"lg"} className="mt-2 w-2/3 bg-gradient-to-r from-teal-500 to-pink-500">
               {buttonLabel}
            </Button>
        </div>
    )
}