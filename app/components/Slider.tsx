"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/banners/disc_september1.jpg",
  // "/banners/disc_september2.jpg",
  // "/banners/disc_september3.jpg",
  "/banners/disc_fc27.jpg",
];

export default function Slider() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              alt={`ბანერი ${i + 1}`}
              width={500}
              height={300}
              className="w-full h-auto object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
