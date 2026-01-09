"use client";

import Link from "next/link";

export default function Checkout() {
  return (
    <main className="pt-32 px-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <input className="w-full p-3 mb-4 bg-gray-800 rounded" placeholder="Name" />
      <input className="w-full p-3 mb-4 bg-gray-800 rounded" placeholder="Address" />
      <input className="w-full p-3 mb-6 bg-gray-800 rounded" placeholder="Card Number" />

      <Link
        href="/payment-success"
        className="block text-center px-6 py-3 bg-white text-black rounded-full"
      >
        Pay Now
      </Link>
    </main>
  );
}
