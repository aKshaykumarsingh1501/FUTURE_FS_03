"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, total } = useCart();

  if (cart.length === 0) {
    return (
      <main className="pt-24 px-6 max-w-4xl mx-auto bg-black text-white min-h-screen">
        <p className="text-center text-gray-400">Your cart is empty</p>
      </main>
    );
  }

  return (
    <main className="pt-24 px-6 max-w-4xl mx-auto bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

      <div className="space-y-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-800 pb-6"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-400">${item.price}</p>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center active:scale-95"
                  >
                    −
                  </button>

                  <span className="min-w-[24px] text-center">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="flex justify-between mt-10 text-xl font-semibold">
        <span>Total</span>
        <span>${total}</span>
      </div>

      {/* CHECKOUT BUTTON */}
      <Link
        href="/checkout"
        className="block w-full text-center mt-6 px-6 py-4 rounded-full font-semibold bg-white text-black hover:scale-[1.02] active:scale-95 transition"
      >
        Proceed to Checkout
      </Link>
    </main>
  );
}
