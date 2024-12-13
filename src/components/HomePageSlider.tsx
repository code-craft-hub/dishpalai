import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
import "../styles.css";

import { Button } from "@/components/ui/button";

import { Autoplay, Pagination } from "swiper/modules";

const HomePageSlider = () => {
  const { t } = useTranslation();

  const landingPage = [
    {
      h1Tag: (
        <>
          Dishpal AI: <br />
          {t("discounted")}{" "}
          <span className="text-[#fe9545] ml-1">{t("finder")}</span> 
        </>
      ),
      pTag: <>{t("helpingYouD")}</>,
      gif: "/assets/phone.gif",
    },
    {
      h1Tag: (
        <>
          {t("ecoChampionT")} <br />
          <span className="text-[#fe9545]">Eco</span>-Champion{" "}
        </>
      ),
      pTag: <>{t("ecoChampionD")}</>,
      gif: "/assets/newspaper.svg",
    },
    {
      h1Tag: (
        <>
          {t("opportunityT")}
          <span className="text-[#fe9545]"> {t("saved")}</span>
        </>
      ),
      pTag: <>{t("opportunityD")}</>,
      gif: "/assets/sale.svg",
    },

    {
      h1Tag: (
        <>
          {t("personalShopperT")} <br />
          <span className="text-[#fe9545]">Personal</span> Shopper
          {/* text-[#fe9545] */}
        </>
      ),
      pTag: <>{t("personalShopperD")}</>,
      gif: "/assets/computerR.gif",
    },
    {
      h1Tag: (
        <>
          {t("buyS")} <br />
          <span className="text-[#fe9545]">{t("buyM")}</span> {t("buyE")}
          {/* text-[#fe9545] */}
        </>
      ),
      pTag: <>{t("buyD")}</>,
      gif: "/assets/shopbasket.svg",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index:number,className:any) {
      return '<span class="' + className + '">'+ index +'</span>';
    },
  };
  return (
    <div className="w-full flex !h-[700px] sm:!h-[740px] md:!h-[550px] relative">
      <Swiper
        loop
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="!p-0"
      >
        {landingPage?.map(({ h1Tag, pTag, gif }, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex flex-col gap-12 md:gap-8 md:flex-row p-1">
              <div className=" flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 md:w-1/2">
                <div className="md:w-full">
                  <h1 className="font-bold font-syne text-start text-3xl md:text-5xl md:w-full  text-wrap">
                    {h1Tag}
                  </h1>
                  <p className="font-syne text-md text-start md:w-full max-w-sm  text-wrap mt-4">
                    {pTag}
                  </p>
                  <Button className="mt-8 ">
                    <a
                      href="https://forms.gle/MKruJpmf2w1AM9ZUA"
                      rel="noopener noreferer"
                      target="_blank"
                    >
                      {t("signUp")}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center md:w-1/2 ">
                <div className="">
                  <img
                    src={gif}
                    //${ index == 1 && "animate-mySpin"}
                    className={` 
                     h-[360px] sm:h-[420px] w-[50px] md:w-auto`}
                  />
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
