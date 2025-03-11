"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { getAbsoluteUrl } from "@/lib/utils";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbnail?: any;
};

const BlogSwiper = ({ latestPosts }: { latestPosts: BlogPost[] }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1.2}
      spaceBetween={16}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full"
    >
      {latestPosts.map((post) => (
        <SwiperSlide key={post.slug} className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Blog Image */}
          {post.thumbnail && (
            <Image
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              src={getAbsoluteUrl((post.thumbnail as any).fields.file.url)}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          )}
          {/* Blog Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#1F3B08]">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-[#5D8736] font-medium mt-4 inline-block"
            >
              Devamını Oku →
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSwiper;
