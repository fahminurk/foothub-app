import { Button } from "@/components/ui/button";

const AdidasBanner = () => {
  return (
    <div className="relative flex flex-1">
      <img
        src="/images/adidas-banner.webp"
        alt="adidas"
        className="h-80 md:h-auto object-cover"
      />
      <div className="absolute text-white bottom-0 gap-2 px-4 flex flex-col w-full h-full justify-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
          MAKE YOUR SAMBA COUNT
        </p>
        <p className="text-sm md:text-xl">{`Here's my Samba retreat. What's yours?`}</p>
        <div>
          <Button className="">Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default AdidasBanner;
