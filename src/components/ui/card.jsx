import Image from "next/image";

export default function Card({ name,description,image }) {
    return (
        <div className="bg-white text-black/95 rounded-lg py-4 px-3 mb-3 shadow-xl flex flex-col gap-1 max-w-[300px] md:w-[full] cursor-crosshair">
             <Image src={image} width={180} height={80} className=" w-full max-h-[150px] rounded-sm" alt="projects" />
            <h3 className="text-md font-semibold">
                {name}
            </h3>
            <p className="text-sm text-white ">
                {description}
            </p>
           
        </div>
    )
}

 
