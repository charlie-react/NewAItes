

export default function ImpactCard({ number,description }) {
    return (
        <div className="bg-slate-800 text-[#e5e7eb] rounded-lg py-4 px-3 mb-3 shadow-xl flex flex-col gap-2 w-[full] cursor-crosshair items-center">
            
            <h3 className="text-3xl font-bold text-[#135bec]">
                {number}
            </h3>
            <p className=" text-white/55 capitalize">
                {description.toUpperCase()}
            </p>
           
        </div>
    )}