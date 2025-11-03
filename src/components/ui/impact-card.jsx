

export default function ImpactCard({ number,description }) {
    return (
        <div className="bg-white text-[#080e1a] rounded-lg py-4 px-3 mb-3 shadow-xl flex flex-col gap-2 w-[full] cursor-crosshair items-center">
            
            <h3 className="text-3xl font-bold ">
                {number}
            </h3>
            <p className="  capitalize">
                {description.toUpperCase()}
            </p>
           
        </div>
    )}