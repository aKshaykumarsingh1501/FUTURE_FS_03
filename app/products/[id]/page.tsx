"use client";

import { use, useState } from "react";
import Toast from "@/components/Toast";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return <div className="text-center mt-20 text-red-400">Product not found</div>;
  }

  return (
    <main className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <img src={product.image} className="rounded-2xl" />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-6">{product.price}</p>
          <p className="text-gray-300 mb-8">{product.description}</p>

          <button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                price: Number(product.price.replace("$", "")),
                image: product.image,
                quantity: 1,
              });

              setShowToast(true);
              setTimeout(() => setShowToast(false), 2000);
            }}
            className="px-8 py-4 bg-white text-black rounded-full font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* ✅ TOAST */}
      {showToast && <Toast message="Added to cart 🛒" />}
    </main>
  );
}
