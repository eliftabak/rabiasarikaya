"use client"; 

import Image from "next/image";
import Link from "next/link";
import MobileCarousel from "../MobileCarousel";

const instagramVideos = [
  {
    url: "https://www.instagram.com/reel/DFp90DBtqhW/",
    embed: "https://www.instagram.com/reel/DFp90DBtqhW/embed",
  },
  {
    url: "https://www.instagram.com/reel/DFX935JtRRc/",
    embed: "https://www.instagram.com/reel/DFX935JtRRc/embed",
  },
  {
    url: "https://www.instagram.com/reel/DFF6oERtG9-/",
    embed: "https://www.instagram.com/reel/DFF6oERtG9-/embed",
  },
];

const InstagramPreview = () => {
  return (
    <section className="mt-7 py-16 px-6 lg:py-26 lg:mt-44 lg:px-24 text-center bg-[#F4FFC3] relative">
      {/* Follow Me Image */}
      <div className="absolute -top-16 lg:-top-32 right-6 md:right-26 flex justify-left">
        <Link href="https://www.instagram.com/i.am_rabiaa/" target="_blank">
          <Image
            src="/images/follow-me.png"
            alt="Instagram"
            width={250}
            height={250}
            className="w-52 md:w-full"
          />
        </Link>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <MobileCarousel videos={instagramVideos} />
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-8 px-6">
        {instagramVideos.map((video, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-3xl">
            <iframe
              src={video.embed}
              className="w-full md:h-[450px] xl:h-[650px] rounded-lg"
              frameBorder="0"
              allowFullScreen
              scrolling="no"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramPreview;
