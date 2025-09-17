import Image from "next/image";

export default function Card({ company, country, testimony, imageUrl,flag }) {
    return (
        <div className="bg-white/90 text-gray-800 rounded-lg py-4 px-3 mb-3 border-t-4 border-teal-500 shadow-xl  flex flex-col items-center gap-2 w-full cursor-crosshair">
            <h2 className="text-2xl font-bold">
                {company}
            </h2>
             <Image src={imageUrl} width={200} height={200} className="w-full rounded-sm" alt="testimonial" />
            <p className="text-sm md:text-base">
                "{testimony}"
            </p>
            <span className="font-medium" role="img" aria-label={"{country} flag"}>
                {country}. <img src={flag} className="inline-block text-center h-7 mx-0.5 rounded-lg w-8"/>
            </span>
           
        </div>
    )
}

 
