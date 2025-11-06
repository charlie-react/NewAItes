import ImpactCard from "@/components/ui/impact-card";
import { impactData } from "@/data";

export default function Impact() {
    return (
        <div className="mt-12">
            <h1 className="text-center text-white text-nowrap text-lg font-extrabold sm:text-4xl py-4 md:font-bold">
                Our Impact
            </h1>
            <div className="lg:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-3 mt-6">
                {impactData.map((item) => (
                    <ImpactCard key={item.id} number={item.number} description={item.description}  />)
                )}
            </div>

        </div>
    )
}