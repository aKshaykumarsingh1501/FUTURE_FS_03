import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center mt-32 text-red-500">
        Product not found: <b>{id}</b>
      </div>
    );
  }

  return (
    <main className="px-6 py-24 max-w-6xl mx-auto text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* IMAGE */}
        <div className="aspect-square overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-6">{product.price}</p>
          <p className="text-gray-300 mb-8">{product.description}</p>

          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
