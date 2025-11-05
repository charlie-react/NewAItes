"use client";


import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { API_BASE_URL } from "@/config";
import Loader from "@/components/ui/loader";

function VerifyPayment() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const [status, setStatus] = useState(<div className="flex gap-2 items-center text-white">
    <div>
      <Loader /></div>
    <div className="text-white">Verifying your payment.Please be patient</div>
  </div>);

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

    <div className="flex justify-center items-center h-screen text-3xl text-white bg-black font-bold">
      {status}
    </div>

  );
}


export default function VerifyPaymentContent() {
  return (
    <Suspense fallback={<div className="text-3xl font-bold">Loading...</div>}>
      <VerifyPayment />
    </Suspense>
  );
}