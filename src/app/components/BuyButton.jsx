"use client";

export const dynamic = "force-dynamic";

import { API_BASE_URL } from "@/config";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BuyButton({ product }) {
    const [isLoading, setIsLoading] = useState(false)
    const { openModal } = useModal()

    const handleBuy = async () => {

        const user = JSON.parse(localStorage.getItem("user"))
        if (!user) return openModal("signup")
        const email = user?.email;

        setIsLoading(true)

        try {
            const res = await fetch(`${API_BASE_URL}/api/pay`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, amount: product.price, userId: user.id, productId: product.id })
            })

            const data = await res.json()
            window.location.href = data.data.authorization_url
        } catch (err) {
            toast.error("Payment initialization failed");
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button
            onClick={handleBuy}
            disabled={isLoading}
            className="bg-black text-white py-3 px-2 w-40 rounded-md mb-12 mt-8 font-semibold cursor-pointer"
        >
            Buy Now
        </button>
    );
}
