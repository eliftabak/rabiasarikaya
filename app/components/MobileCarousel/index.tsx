"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Video = { embed: string; url: string };

const MobileCarousel = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="mt-8 w-full">
      <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{ clickable: true }}
        loop={false}
        grabCursor={true}
        freeMode={true} 
        touchRatio={2}
        resistanceRatio={0}
        className="w-full max-w-lg"
      >

        {videos.map((video, index) => (
          <SwiperSlide key={index} className="bg-white shadow-lg rounded-3xl p-4">
            <div className="relative w-full">
              <iframe
                src={video.embed}
                className="w-full h-[580px] rounded-lg px-6"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div
                className="absolute inset-0 bg-transparent"
                onClick={(e) => {
                  e.stopPropagation(); 
                  window.open(video.url, "_blank"); 
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileCarousel;
