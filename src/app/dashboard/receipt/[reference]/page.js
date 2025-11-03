"use client"

import Loader from "@/components/ui/loader"
import { API_BASE_URL } from "@/config"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ReceiptPage() {
    const { reference } = useParams()
    console.log(reference)
    const [purchase, setPurchase] = useState(null)

    useEffect(() => {

        const fetchPurchase = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/receipt/${reference}`)
                const data = await res.json()
                if (res.ok) {
                    setPurchase(data.data);
                } else {
                    console.error("Purchase fetch error:", data.error);
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchPurchase()
    }, [reference])
    if (!purchase) return <Loader />
    return (
        <div className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-xl mt-10">
            <h2 className="text-2xl font-semibold mb-4">Payment Receipt</h2>
            <p><strong>Purchase ID:</strong> #{purchase.id}</p>
            <p><strong>Date:</strong> {new Date(purchase.createdAt).toLocaleString()}</p>
            <hr className="my-4" />
            <div>
                <h3 className="font-semibold mb-2">Product Details</h3>
                <p>{purchase.product.name}</p>
                <p>₦{purchase.product.price}</p>
            </div>
            <hr className="my-4" />
            <p><strong>Total Paid:</strong> ₦{purchase.product.price}</p>
            <p className="text-green-600 mt-3 font-semibold">✅ Payment Successful</p>
            <a
                href={`${API_BASE_URL}/api/receipt/${purchase.reference}/pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition"
            >
                Download PDF Receipt
            </a>

        </div>
    )
}