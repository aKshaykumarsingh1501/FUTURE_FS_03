export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">Velocity</h2>
          <p className="text-sm">
            AI-powered rebrand of a global sports brand, built with modern UI
            and performance in mind.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h3 className="text-white font-semibold mb-3">Project</h3>
          <p className="text-sm">
            This project showcases branding, UI design, and frontend development
            using Next.js and Tailwind CSS.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Velocity. All rights reserved.
      </div>
    </footer>
  );
}
