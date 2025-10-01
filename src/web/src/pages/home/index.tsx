import { useState } from "react";
import Image1 from "@/assets/images/images.jpg";
import Image2 from "@/assets/images/image1.jpg";
import Image3 from "@/assets/images/image2.webp";

const galleryImages = [
  { src: Image1, alt: "Gramya Stay 1" },
  { src: Image2, alt: "Gramya Stay 2" },
  { src: Image3, alt: "Gramya Stay 3" },
  { src: Image1, alt: "Gramya Stay 4" },
];

export default function Home() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Hero Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Discover East Godavari</h2>
        <p className="text-lg md:text-xl text-green-800 mb-6">
          Nestled in the heart of lush landscapes, our village offers a tranquil escape from the busy city life. Rich in culture, tradition, and natural beauty, East Godavari invites you to explore its scenic backwaters, verdant fields, and vibrant local community.
        </p>
      </div>
      <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold text-green-900 mb-2">Festivals</h3>
          <p className="text-green-800 text-base">Experience the vibrant local celebrations and immerse yourself in the rich traditions of East Godavari.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold text-green-900 mb-2">Cuisine</h3>
          <p className="text-green-800 text-base">Taste authentic Andhra dishes prepared from fresh, locally-sourced ingredients.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold text-green-900 mb-2">Nature & Scenery</h3>
          <p className="text-green-800 text-base">Walk through lush fields, serene riversides, and discover the unspoiled natural beauty of the region.</p>
        </div>
      </div>


      {/* Gallery Grid Section */}
      <div className="w-full max-w-4xl px-4 mb-12">
        <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-lg object-cover h-40 w-full cursor-pointer hover:scale-105 transition"
              onClick={() => setModalImg(img.src)}
            />
          ))}
        </div>
      </div>

      {/* Modal for Full Image */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Full view"
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <div className="mt-16 bg-green-50/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 drop-shadow">
          Ready to experience village life and work surrounded by nature?
        </h2>
        <p className="text-lg md:text-xl text-green-800 mb-8">
          Escape the city and immerse yourself in the serene beauty of East Godavari.
        </p>
        <a
          href="/contact"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-200"
        >
          Book Your Stay
        </a>
      </div>

    </div>
  );
}