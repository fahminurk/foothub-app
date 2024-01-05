import Link from "next/link";
import React from "react";

const Footer = () => {
  const legal = ["Privacy Policy", "Terms and Conditions", "Delivery Terms"];
  const supports = [
    "FAQ",
    "Contact Us",
    "Size Charts",
    "Ordering",
    "Payment",
    "Delivery",
    "Returns and Refunds",
  ];
  const socials = ["Facebook", "Twitter", "Instagram", "Youtube"];
  const featured = ["New Arrivals", "Sale", "Featured Products"];
  const products = ["Shoes", "Apparels"];

  return (
    <>
      <div className="flex justify-center w-full bg-black rounded-t-3xl mt-10 z-10">
        <div className="bg-white h-max p-2 border border-black -translate-y-5">
          <p className="text-xs md:text-base font-bold text-center">
            COPYRIGHT © 2023 FOOTHUB ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
      <div className="bg-black grid grid-cols-2 md:grid-cols-5 justify-center gap-6 lg:gap-20 text-white p-4 md:p-10  ">
        <div className="text-4xl md:text-2xl font-bold col-span-2 md:col-span-1">
          FOOTHUB
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-xl">SUPPORT</p>
          {supports.map((link, i) => (
            <div key={i} className="gap-5 overflow-hidden h-5">
              <Link href={"/"}>
                <div className="text-xs md:text-sm text-gray-300 hover:-translate-y-12 duration-500 ">
                  <p className="mb-7">{link}</p>
                  <p>{link}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-xl">FOLLOW US</p>
          {socials.map((link, i) => (
            <div key={i} className="gap-5 overflow-hidden h-5">
              <Link href={"/"}>
                <div className="text-xs md:text-sm text-gray-300 hover:-translate-y-12 duration-500 ">
                  <p className="mb-7">{link}</p>
                  <p>{link}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-xl">LEGAL</p>
          {legal.map((link, i) => (
            <div key={i} className="gap-5 overflow-hidden h-5">
              <Link href={"/"}>
                <div className="text-xs md:text-sm text-gray-300 hover:-translate-y-12 duration-500 ">
                  <p className="mb-7">{link}</p>
                  <p>{link}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-xl">PRODUCTS</p>
          {products.map((link, i) => (
            <div key={i} className="gap-5 overflow-hidden h-5">
              <Link href={"/"}>
                <div className="text-xs md:text-sm text-gray-300 hover:-translate-y-12 duration-500 ">
                  <p className="mb-7">{link}</p>
                  <p>{link}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
