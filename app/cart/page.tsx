"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="pt-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="flex gap-4 mb-6 border-b pb-4">
          <img src={item.image} className="w-24 rounded" />
          <div className="flex-1">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>✕</button>
        </div>
      ))}

      {cart.length > 0 && (
        <Link
          href="/checkout"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full"
        >
          Proceed to Checkout
        </Link>
      )}
    </main>
  );
}
