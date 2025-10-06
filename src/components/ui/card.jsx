import Image from "next/image";

export default function Card({ name,description,image }) {
    return (
        <div className="bg-slate-800 text-[#e5e7eb] rounded-lg py-4 px-3 mb-3 shadow-xl flex flex-col gap-1 w-[full] cursor-crosshair">
             <Image src={image} width={100} height={100} className="w-full max-h-[150px] rounded-sm" alt="projects" />
            <h3 className="text-md font-semibold">
                {name}
            </h3>
            <p className="text-sm text-white/55 ">
                {description}
            </p>
           
        </div>
    )
}

 
