"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [paymentStatus, setPaymentStatus] = useState("Processing...");

  useEffect(() => {
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
    }, 2000);
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold">Payment Status</h1>
      <p>Order ID: {orderId}</p>
      <p className="text-green-600 font-bold">{paymentStatus}</p>
    </div>
  );
};

export default PaymentPage;
