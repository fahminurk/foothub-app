"use client";
import PromotionBanner from "@/components/PromotionBanner";
import { homeText } from "@/constant";
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import gsap from "gsap";

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
    <main className="container flex flex-col gap-3 relative">
      <div className="flex h-[90vh]  items-center">
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
    </main>
  );
}
