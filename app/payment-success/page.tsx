"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function Success() {
  const { clearCart } = useCart();
  const [order, setOrder] = useState<OrderItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");
    if (saved) {
      setOrder(JSON.parse(saved));
      localStorage.removeItem("lastOrder");
    }
    clearCart();
  }, []);

  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="pt-32 px-6 max-w-xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-3">
        Payment Successful 🎉
      </h1>
      <p className="text-gray-400 mb-10">This is a demo invoice.</p>

      <div className="bg-white/10 border border-white/15 rounded-xl p-6 text-left mb-10">
        <h2 className="font-semibold mb-4">Order Summary</h2>

        {order.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} × {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}

        <div className="border-t border-white/20 mt-4 pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition"
      >
        Continue Shopping
      </Link>
    </main>
  );
}
