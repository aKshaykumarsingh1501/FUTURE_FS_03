"use client";

export default function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white text-black px-5 py-3 rounded-xl shadow-lg animate-fade">
      {message}
    </div>
  );
}
