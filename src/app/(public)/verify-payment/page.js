"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { API_BASE_URL } from "@/config";

export default function VerifyPayment() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const [status, setStatus] = useState("Verifying Payment...");

  useEffect(() => {
    if (!reference) return;
    const verify = async () => {
      const res = await fetch(`${API_BASE_URL}/api/verify/${reference}`);
      const data = await res.json();
      console.log(data)
      setStatus(data.success ? "Payment Successful ✅" : "Payment Failed ❌");
      setTimeout(() => {
          window.location.href = `/dashboard/receipt/${reference}`; 
        }, 2000);
    };
    verify();
  }, [reference]);

  return (
    <div className="flex justify-center items-center h-screen text-3xl font-bold">
      {status}
    </div>
  );
}
