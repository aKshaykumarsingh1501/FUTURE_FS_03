import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="min-h-[70vh] md:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          Velocity
        </h1>

        <p className="max-w-xl text-gray-300 mb-8 text-sm sm:text-base">
          An AI-powered rebrand of a global sports brand,
          designed using modern UI trends.
        </p>

        <a
  href="#products"
  className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition !text-black"
>
  Explore Collection
</a>


      </section>

      <div className="h-px bg-gray-800 my-20"></div>

      {/* PRODUCTS */}
<section
  id="products"
  className="py-20 bg-black text-white md:bg-white md:text-black px-4 sm:px-6"
>

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map(product => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 block"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
