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
    img: "/assets/robotThinking.mp4",
  },
];

const HomePageSlider = () => {
  return (
    <div className="w-full flex !h-[600px] sm:!h-[700px] lg:!h-[610px]">
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
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1 flex flex-col items-center justify-center overflow-hidden p-4 md:p-8">
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
              <div className="flex-1 w-full h-[500px] lg:h-fit overflow-hidden  flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  className="lg:w-full lg:h-full lg:object-cover lg:object-top w-[80vw] sm:w-[50vw] "
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
{
  /* <SwiperSlide>
            <div>
              <h1 className="">
                Dishpal AI: <br />
                Helping you <br />
                find localized <br />
                discounted deals
              </h1>
              <p className="">
                Discover personalized deals tailored to your preferences and
                location, ensuring you never miss an opportunity to save.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="">
                Become an <br />
                Eco-Champion
              </h1>
              <p className="">
                Reduce paper discount by 15% and use the trackable and
                reedemable digital discounts.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="">
                Your AI-Powered <br />
                Personal Shopper
              </h1>
              <p className="">
                Shopping can be hectic, let Dishpal find those deals for you.{" "}
              </p>
            </div>
          </SwiperSlide> */
}
