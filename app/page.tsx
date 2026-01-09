export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Velocity
        </h1>

        <p className="max-w-xl text-gray-300 mb-8">
          An AI-powered rebrand of a global sports brand,
          designed using modern UI trends and AI-generated branding.
        </p>

        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Explore Collection
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-black px-6">
        <h2 className="text-4xl font-bold text-center mb-6">
          About the Brand
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          Velocity is a conceptual rebrand inspired by Nike, created to
          showcase how AI tools like Adobe Firefly can assist in modern
          branding, design, and frontend development.
        </p>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-100 text-black px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Velocity Air", "Velocity Pro", "Velocity Run"].map((item) => (
            <div
              key={item}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">
                High-performance footwear designed with innovation and speed.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
