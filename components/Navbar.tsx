"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full h-16 bg-black border-b border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Velocity</Link>

        <div className="flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/cart" className="relative">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
