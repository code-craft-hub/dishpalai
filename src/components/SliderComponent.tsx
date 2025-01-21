import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/pagination";

import "../styles.css";
import { useTranslation } from "react-i18next";

import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const SliderComponent = () => {
  const { t } = useTranslation();

  const whyChooseUs = [
    {
      title: t("locationBasedT"),
      des: t("locationBasedD"),
    },
    {
      title: t("personRecommendationT"),
      des: t("personRecommendationD"),
    },
    {
      title: t("neverMissDiscountT"),
      des: t("neverMissDiscountD"),
    },
    {
      title: t("saveMoneyT"),
      des: t("saveMoneyD"),
    },
    {
      title: t("sustainableShoppingT"),
      des: t("sustainableShoppingD"),
    },
    {
      title: t("reduceFoodWasteT"),
      des: t("reduceFoodWasteD"),
    },
  ];
  return (
    <div className="mt-10">
     
      <>
        <Swiper
          loop
          effect={"coverflow"}
          slidesPerView={"auto"}
          // slidesPerView={1}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 1, // Show 2 slides on screens >= 640px
          //   },
          //   1024: {
          //     slidesPerView: 3, // Show 3 slides on screens >= 1024px
          //   },
          //   1440: {
          //     slidesPerView: 3, // Show 4 slides on screens >= 1440px
          //   },
          // }}
          mousewheel={{
            forceToAxis: true, // Enable scrolling only on the horizontal axis
            releaseOnEdges: true, // Allow vertical scroll to propagate when at the start/end of Swiper
          }}
          keyboard={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,

          }}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, EffectCoverflow, Mousewheel, Keyboard]}
        >
          {whyChooseUs.map(({ title, des }, index) => (
            <SwiperSlide
              className="!flex bg-gradient-to-t  from-[#fe9545] darK:via-white to-white  dark:to-white  p-8 lg:px-12  sm:!w-[350px]  !h-[280px] md:!h-[350px] md:!w-[380px] !items-center !justify-center !border-none  rounded-3xl"
              key={index}
            >
              <div className="w-full">
                <h1 className="font-syne text-black font-bold text-center text-lg md:text-3xl text-wrap overflow-hidden ">
                  {title}
                </h1>
                <p className="mt-4 text-[13px] ss:text-sm sxx:text-[16px] xss:text-[20px] font-light text-wrap overflow-hidden text-center capitalize font-syne">
                  {des}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default SliderComponent;
