"use client";
import PromotionBanner from "@/components/PromotionBanner";
import { category, homeText } from "@/constant";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import AdidasBanner from "@/components/AdidasBanner";
import BestOfCarousel from "@/components/BestOfCarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  const mouseEnter = (e: any, i: number) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: homeText[i].color,
      duration: 0.3,
    });
  };
  const mouseLeave = (e: any, i: number) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <main className="container flex flex-col gap-9 relative pb-3">
      <div className="flex h-[90vh] items-center">
        <div className="relative w-full">
          {homeText.map((item, i) => {
            return (
              <div
                key={i}
                className="border-t relative mb-[-6vw] md:mb-[-4vw] bg-white"
                onMouseEnter={(e) => mouseEnter(e, i)}
                onMouseLeave={(e) => mouseLeave(e, i)}
              >
                <p className="text-[13vw] md:text-[8vw] pl-2 uppercase pointer-events-none">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <PromotionBanner />
      <AdidasBanner />
      <div className="flex flex-col gap-3">
        <div className="text-4xl font-bold">BEST OF</div>
        <BestOfCarousel />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {category.map((item, i) => (
          <Link
            href={"/"}
            key={i}
            className=" overflow-hidden h-[450px] md:h-[500px] group "
          >
            <div className="relative group-hover:-translate-y-full duration-500">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] md:h-[500px] object-cover grayscale group-hover:-translate-y-full duration-500"
              />
              <div className="absolute text-[2rem] text-white top-0 w-full h-full flex justify-center items-center">
                <p className="font-bold ">{item.title}</p>
                <FaArrowRight className="" />
              </div>
            </div>
            <div className="relative  group-hover:-translate-y-full duration-500">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] md:h-[500px] object-cover"
              />
              <div className="absolute text-[2rem]  top-0 w-full h-full flex justify-center items-center">
                <div className="flex items-center text-white">
                  <p className="font-bold ">{item.title}</p>
                  <FaArrowRight className="-rotate-45" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
