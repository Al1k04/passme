"use client";

import { useState } from "react";

const images = [
  "/banners/banner 1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg",
  "/banners/banner4.jpg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex items-center justify-center gap-4 mt-10 px-10">
      <button
        className="text-3xl hover:text-emerald-400"
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
      >
        ←
      </button>
      <img
        src={images[current]}
        alt=""
        className="max-h-[500px] w-auto object-contain rounded-lg mx-auto"
      />

      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="text-3xl hover:text-emerald-400"
      >
        →
      </button>
    </div>
  );
}
