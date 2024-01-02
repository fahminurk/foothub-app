"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperButtonPrev from "@/components/elements/SwiperButtonPrev";
import SwiperButtonNext from "@/components/elements/SwiperButtonNext";
import { BestOfShoe } from "@/constant";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BestOfCarousel = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 10,
          //   loop: true,
        },
        640: {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
        // 768: {
        //   slidesPerView: 2.4,
        //   spaceBetween: 20,
        // },
        1024: {
          slidesPerView: 3.4,
          spaceBetween: 20,
        },
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      className=" w-full relative "
    >
      <SwiperButtonPrev />
      <SwiperButtonNext />
      {BestOfShoe.map((item, i) => (
        <SwiperSlide key={i} className="bg-neutral-800">
          <AspectRatio className="relative">
            <img src={item.img} alt="foothub" className="object-cover " />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestOfCarousel;
