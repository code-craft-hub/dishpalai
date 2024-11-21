import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
// import "swiper/css";
//@ts-ignore
// import "swiper/css/effect-coverflow";
//@ts-ignore
// import "swiper/css/pagination";

import "../styles.css";
import { Button } from "@/components/ui/button";

import { Autoplay } from "swiper/modules";

const landingPage = [
  {
    h1Tag: (
      <>
        Dishpal AI: <br />
        find localized <br />
        discounted deals
      </>
    ),
    pTag: (
      <>
        Discover personalized deals tailored to your preferences and location,
        ensuring you never miss an opportunity to save.
      </>
    ),
    img: "/assets/phone.mp4",
  },
  {
    h1Tag: (
      <>
        Become an <br />
        Eco-Champion{" "}
      </>
    ),
    pTag: (
      <>
        Reduce paper discount by 15% and use the trackable and reedemable
        digital discounts.
      </>
    ),
    img: "/assets/people.mp4",
  },
  {
    h1Tag: (
      <>
        Never miss an <br />
        opportunity to <br />
        SAVE
      </>
    ),
    pTag: (
      <>Discover personalized deals tailored to your preference and location</>
    ),
    img: "/assets/coinGrow.mp4",
  },

  {
    h1Tag: (
      <>
        Your AI-Powered <br />
        Personal Shopper
      </>
    ),
    pTag: <>Shopping can be hectic, let Dishpal find those deals for you.</>,
    img: "/assets/laptopComputer.mp4",
  },
];

const HomePageSlider = () => {
  return (
    <div className="w-full flex !h-[700px]  lg:!h-[610px]">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="!p-0"
      >
        {landingPage?.map(({ img, h1Tag, pTag }, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex flex-col gap-8 lg:flex-row  p-1">
              <div className=" flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 lg:w-1/2">
                <div className="lg:w-full">
                  <h1 className="font-bold font-syne text-start text-3xl lg:text-5xl lg:w-full">
                    {h1Tag}
                  </h1>
                  <p className="font-syne text-md text-start lg:w-full max-w-sm">
                    {pTag}
                  </p>
                  <Button className="sm:p-8 mt-8 w-fit rounded-none sm:text-lg">
                    Have Access To Our Beta Version
                  </Button>
                </div>
              </div>
              <div className=" w-full h-[500px] lg:h-fit overflow-hidden  flex items-start lg:items-center justify-center lg:w-1/2">
                <video
                  autoPlay
                  loop
                  muted
                  className="lg:w-full lg:h-full lg:object-cover object-top h-[400px] w-auto "
                >
                  <source src={img} type="video/mp4" />
                </video>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageSlider;
