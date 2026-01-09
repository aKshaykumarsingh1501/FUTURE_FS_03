"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-16 bg-black z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Velocity</h1>

        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
  <div className="md:hidden bg-black border-t border-gray-700 px-6 py-6 space-y-6">
    <Link
      href="/"
      className="block text-white text-lg font-medium"
      onClick={() => setOpen(false)}
    >
      Home
    </Link>

    <Link
      href="/contact"
      className="block text-white text-lg font-medium"
      onClick={() => setOpen(false)}
    >
      Contact
    </Link>
  </div>
)}

    </nav>
  );
}
