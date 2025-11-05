

import BuyButton from "@/app/components/BuyButton";
import { API_BASE_URL } from "@/config"
import { Lightbulb, Search, Workflow } from "lucide-react";




export default async function ProductPage({ params }) {
    const { id } = await params
    const res = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        cache: "no-store"
    })
    const { data: product } = await res.json();
 

   
    return (
        <div className="bg-white text-black flex flex-col items-center p-6 md:p-10">
            <div className="flex flex-col gap-1 items-center p-8 justify-center mt-8 ">
                <h1 className="text-2xl md:text-5xl rounded-sm font-semibold  p-3 md:p-5 ">
                    {product.name}
                </h1>
                <p className="text-lg md:text-md text-black/65 font-light ">
                    {product.description}
                </p>
                <p className="text-sm max-w-[800px] mt-3 ">
                    {product.detailed}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-8">
                <h1 className="text-2xl md:text-3xl font-semibold">
                    Key Features
                </h1>
                <div className="grid  md:grid-cols-3 gap-8 mt-10 text-center md:text-start ">
                    <div className="rounded-md shadow-2xl border border-slate-200   py-8 px-4 flex-col flex gap-3">
                        <Lightbulb size={26} className="text-black/80" />
                        <p className="font-semibold text-xl">
                            {product.feature1}
                        </p>
                        <span className="text-sm">
                            {product.description}
                        </span>
                    </div>
                    <div className="rounded-md shadow-2xl border-slate-200 border   py-8 px-4 flex-col flex gap-3">
                        <Search size={26} className="text-black/80" />
                        <p className="font-semibold text-xl">
                            {product.feature2}
                        </p>
                        <span className="text-sm">
                            {product.description}
                        </span>
                    </div>
                    <div className="rounded-md shadow-2xl border border-slate-200   py-8 px-4 flex-col flex gap-3">
                        <Workflow size={26} className="text-black/80" />
                        <p className="font-semibold text-xl">
                            {product.feature3}
                        </p>
                        <span className="text-sm">
                            {product.description}
                        </span>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-2xl font-semibold">
                Price: ₦{product.price.toLocaleString()} Yearly
            </p>
            <BuyButton product={product}/>
        </div>
    )
}