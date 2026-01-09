"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Checkout() {
  const { cart } = useCart();

  const handlePay = () => {
    localStorage.setItem("lastOrder", JSON.stringify(cart));
  };

  return (
    <main className="pt-32 px-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <button
        onClick={handlePay}
        className="w-full py-3 bg-white text-black rounded font-semibold"
      >
        <Link href="/payment-success">Pay Now</Link>
      </button>
    </main>
  );
}
