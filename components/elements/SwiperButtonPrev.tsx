import { Button } from "../ui/button";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold } from "react-icons/pi";

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <Button
      className={`my-swiper-button-prev  border bg-white hover:bg-white/70 rounded-full w-10 h-10 absolute top-[45%] left-4 z-10 justify-center items-center md:flex`}
      onClick={() => swiper.slidePrev()}
      size={"sm"}
    >
      <PiCaretLeftBold className="fill-black dark:fill-white" />
    </Button>
  );
};

export default SwiperButtonPrev;
