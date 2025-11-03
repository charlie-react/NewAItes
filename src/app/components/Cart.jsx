import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Cart(){
    // const counter = useCartStore((state)=>state.counter)
    return(
        <div className="relative text-sm">
            <ShoppingCart size={"32"} />
         <p className="absolute bottom-3 flex bg-white text-center items-center justify-center text-black rounded-full w-7 h-7 left-4 p-2">
               0
         </p>
        </div>
    )
}