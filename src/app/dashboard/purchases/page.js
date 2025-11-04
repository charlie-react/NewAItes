"use client";

export const dynamic = "force-dynamic";

import Loader from "@/components/ui/loader";
import { API_BASE_URL } from "@/config";
import { useEffect, useState } from "react";

export default function PurchasesPages() {
  const [isLoading, setIsLoading] = useState(true);
  const [purchases, setPurchases] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
  
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (!user) return; 
    const fetchPurchases = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/purchases/${user.id}`);
        const data = await res.json();
        setPurchases(data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPurchases();
  }, [user]); 

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-10 sm:p-0 md:p-0">
      <h1 className="text-3xl font-bold mb-6">My Purchases</h1>
      {purchases.length === 0 ? (
        <p className="text-gray-400">You haven&apos;t made any purchases</p>
      ) : (
        <div className="space-y-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {purchases.map((purchase) => (
            <div
              key={purchase.id}
              className="bg-gray-800 p-5 rounded-lg shadow text-white"
            >
              <h2 className="text-md font-semibold">
                {purchase.product?.name || "Unknown Product"}
              </h2>
              <p>💰 ₦{purchase.amount?.toLocaleString() || 0}</p>
              <p>
                Status:
                <span
                  className={`ml-2 ${
                    purchase.status === "success"
                      ? "text-teal-400"
                      : "text-red-400"
                  }`}
                >
                  {purchase.status}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Purchased on:{" "}
                {purchase.createdAt
                  ? new Date(purchase.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
