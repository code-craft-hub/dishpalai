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
        <span className="text-[#969696]">find</span> localized <br />
        discounted deals
      </>
    ),
    pTag: (
      <>
        Discover personalized deals tailored to your preferences and location,
        ensuring you never miss an opportunity to save.
      </>
    ),
    gif: "/assets/phone.gif",
  },
  {
    h1Tag: (
      <>
        Become an <br />
        <span className="text-[#969696]">Eco</span>-Champion{" "}
      </>
    ),
    pTag: (
      <>
        Reduce paper discount by 15% and use the trackable and reedemable
        digital discounts.
      </>
    ),
    gif: "/assets/people.svg",
  },
  {
    h1Tag: (
      <>
        Never miss an <br />
        opportunity to <br />
        <span className="text-[#969696]">SAVE</span>
      </>
    ),
    pTag: (
      <>Discover personalized deals tailored to your preference and location</>
    ),
    gif: "/assets/coinGrow.gif",
  },

  {
    h1Tag: (
      <>
        Your AI-Powered <br />
        <span className="text-[#969696]">Personal</span> Shopper
      </>
    ),
    pTag: <>Shopping can be hectic, let Dishpal find those deals for you.</>,
    gif: "/assets/thinking.gif",
  },
];

const HomePageSlider = () => {
  return (
    <div className="w-full flex !h-[670px]  lg:!h-[410px]">
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
        {landingPage?.map(({ h1Tag, pTag, gif }, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex flex-col gap-8 md:flex-row  p-1">
              <div className=" flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 md:w-1/2">
                <div className="md:w-full">
                  <h1 className="font-bold font-syne text-start text-3xl md:text-5xl md:w-full">
                    {h1Tag}
                  </h1>
                  <p className="font-syne text-md text-start md:w-full max-w-sm">
                    {pTag}
                  </p>
                  <Button className="mt-8 rounded-3xl">
                    <a
                      href="https://forms.gle/MKruJpmf2w1AM9ZUA"
                      rel="noopener noreferer"
                      target="_blank"
                    >
                      Sign up for early access
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center md:w-1/2">
                <div className="">
                  <img src={gif} className="h-[220px] sm:h-[310px] md:h-[400px] w-[50px] md:w-auto " />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageSlider;
