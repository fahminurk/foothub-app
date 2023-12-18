"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperButtonNext from "./elements/SwiperButtonNext";
import SwiperButtonPrev from "./elements/SwiperButtonPrev";

const PromotionBanner = () => {
  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, Navigation, Pagination]}
      className={`mySwiper w-full relative`}
    >
      <SwiperButtonPrev />
      <SwiperSlide className="bg-neutral-800 h-full">
        <img
          src={"/images/banner1.jpg"}
          alt="foothub"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="bg-neutral-800 h-full">
        <img
          src={"/images/banner2.jpg"}
          alt="foothub"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperButtonNext />
    </Swiper>
  );
};

export default PromotionBanner;
