"use client";

import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Success() {
  const { cart, clearCart } = useCart();
  const [order, setOrder] = useState(cart);

  useEffect(() => {
    setTimeout(() => {
      clearCart();
    }, 500);
  }, []);

  return (
    <main className="pt-32 px-6 max-w-xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Payment Successful 🎉</h1>
      <p className="mb-8 text-gray-400">
        Thank you for your order. This is a demo invoice.
      </p>

      <div className="bg-gray-900 rounded-lg p-6 text-left mb-6">
        <h2 className="font-semibold mb-4">Order Summary</h2>

        {order.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold"
      >
        Continue Shopping
      </Link>
    </main>
  );
}
