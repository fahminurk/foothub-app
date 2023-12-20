import { Button } from "../ui/button";
import { useSwiper } from "swiper/react";
import { PiCaretRightBold } from "react-icons/pi";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <Button
      className={`my-swiper-button-prev  border bg-white hover:bg-white/70 rounded-full w-10 h-10 absolute top-[45%] right-4 z-10 justify-center items-center md:flex`}
      onClick={() => swiper.slideNext()}
      size={"sm"}
    >
      <PiCaretRightBold className="fill-black dark:fill-white" size={20} />
    </Button>
  );
};

export default SwiperButtonNext;
