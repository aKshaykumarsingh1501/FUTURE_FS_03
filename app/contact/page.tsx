export default function Contact() {
  return (
    <main className="px-4 sm:px-6 max-w-3xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Contact Us
      </h1>

      <form className="space-y-4">
        <input className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Your Name" />
        <input className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Your Email" />
        <textarea rows={5} className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Your Message" />
        <button className="w-full py-3 bg-white text-black font-semibold rounded">
          Send Message
        </button>
      </form>
    </main>
  );
}
