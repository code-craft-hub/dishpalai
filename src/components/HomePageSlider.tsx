import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/pagination";
import "../styles.css";

import { Button } from "@/components/ui/button";

import { Autoplay, Pagination } from "swiper/modules";

const HomePageSlider = () => {
  const { t } = useTranslation();

  // const landingPage = [
  //   {
  //     h1Tag: (
  //       <>
  //         <p className="xl:text-nowrap">Dishpal AI: {t("discounted")}</p>
  //         <span className="text-[#fe9545]">{t("discountWord")}</span>{" "}
  //         {t("finder")}
  //       </>
  //     ),
  //     pTag: <>{t("helpingYouD")}</>,
  //     gif: "/assets/phone.gif",
  //   },
  //   {
  //     h1Tag: (
  //       <>
  //         {t("ecoChampionT")} <br />
  //         <span className="text-[#fe9545]">Eco-Champion</span>{" "}
  //       </>
  //     ),
  //     pTag: <>{t("ecoChampionD")}</>,
  //     gif: "/assets/newspaper.svg",
  //   },
  //   {
  //     h1Tag: (
  //       <>
  //         {t("opportunityT")}
  //         <span className="text-[#fe9545]"> {t("saved")}</span>
  //       </>
  //     ),
  //     pTag: <>{t("opportunityD")}</>,
  //     gif: "/assets/sale.svg",
  //   },

  //   {
  //     h1Tag: (
  //       <>
  //         {t("personalShopperT")} <br />
  //         <span className="text-[#fe9545]">Personal</span> Shopper
  //         {/* text-[#fe9545] */}
  //       </>
  //     ),
  //     pTag: <>{t("personalShopperD")}</>,
  //     gif: "/assets/computerR.gif",
  //   },
  //   {
  //     h1Tag: (
  //       <>
  //         {t("buyS")} <br />
  //         <span className="text-[#fe9545]">{t("buyM")}</span> {t("buyE")}
  //         {/* text-[#fe9545] */}
  //       </>
  //     ),
  //     pTag: <>{t("buyD")}</>,
  //     gif: "/assets/shopbasket.svg",
  //   },
  //   {
  //     h1Tag: (
  //       <>
  //         {t("neverT")} <br />
  //         <span className="text-[#fe9545]">{t("neverSave")}</span>
  //         {/* text-[#fe9545] */}
  //       </>
  //     ),
  //     pTag: <>{t("neverD")}</>,
  //     gif: "/assets/nevermiss.png",
  //   },
  // ];

  const mobilePageText = [
    {
      h1Tag: (
        <>
          <p className="text-nowrap">Dishpal AI: {t("discounted")}</p>
          <p className="text-nowrap">
            <span className="text-[#fe9545]">{t("discountWord")}</span>{" "}
            {t("finder")}
          </p>
        </>
      ),
      pTag: <>{t("helpingYouD")}</>,
      gif: "/assets/phone.gif",
    },
    {
      h1Tag: (
        <>
          <p className="text-nowrap">{t("ecoChampionT")}</p>
          <p className="text-[#fe9545] text-nowrap">Eco-Champion</p>
        </>
      ),
      pTag: <>{t("ecoChampionD")}</>,
      gif: "/assets/newspaper.svg",
    },
    {
      h1Tag: (
        <>
          <p className="text-nowrap">{t("opportunityT")}</p>
          <span className="text-[#fe9545]"> {t("saved")}</span>
        </>
      ),
      pTag: <>{t("opportunityD")}</>,
      gif: "/assets/sale.svg",
    },

    {
      h1Tag: (
        <>
          <p className="text-nowrap">{t("personalShopperT")} </p>
          <p className="text-nowrap">
            <span className="text-[#fe9545] capitalize">Personal</span> Shopper
          </p>
        </>
      ),
      pTag: <>{t("personalShopperD")}</>,
      gif: "/assets/computerR.gif",
    },
    {
      h1Tag: (
        <>
          <p className="text-nowrap">
            {t("buyS")} <span className="text-[#fe9545] capitalize">{t("buyM")}</span>
          </p>
          <p className="text-nowrap">{t("buyE")}</p>
        </>
      ),
      pTag: <>{t("buyD")}</>,
      gif: "/assets/shopbasket.svg",
    },
    {
      h1Tag: (
        <>
          <p className="text-nowrap">{t("neveraT")}</p>
          <p className="text-nowrap">
            {t("neverbT")}{" "}
            <span className="text-[#fe9545] capitalize">{t("neverSave")}</span>
          </p>
        </>
      ),
      pTag: <>{t("neverD")}</>,
      gif: "/assets/nevermiss.png",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: any) {
      return '<span class="' + className + '">' + index + "</span>";
    },
  };
  return (
    <div className="">
      {/* <div className="w-full hidden md:!h-[470px] relative">
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
              <div className="flex flex-col gap-8 md:flex-row p-1">
                <div className="order-2 md:order-1 flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 md:w-1/2">
                  <div className="md:w-full">
                    <h1 className="font-semibold font-syne text-start text-3xl md:text-5xl md:w-full  text-wrap capitalize">
                      {h1Tag}
                    </h1>
                    <p className="font-syne text-md text-start md:w-full mt-4 capitalize">
                      {pTag}
                    </p>
                    <div className="flex w-full items-center justify-center md:justify-start">
                      <Button className="mt-8">
                        <a
                          href="https://forms.gle/MKruJpmf2w1AM9ZUA"
                          rel="noopener noreferer"
                          target="_blank"
                          className="capitalize"
                        >
                          {t("signUp")}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex items-center justify-center md:w-1/2 ">
                  <div className="hidden md:flex">
                    <img
                      src={gif}
                      //${ index == 1 && "animate-mySpin"}
                      className={` 
                     h-[360px] sm:h-[420px] w-[50px] md:w-auto`}
                    />
                  </div>
                  <div className="md:hidden h-[35vh] sm:h-[50vh]">
                    <img src={gif} className={`h-full w-auto`} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <div className="">
        <Swiper
          loop
          slidesPerView={1}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          modules={[Autoplay, Pagination]}
        >
          {mobilePageText?.map(({ h1Tag, pTag, gif }, index) => (
            <SwiperSlide
              key={index}
              className="!flex !flex-row items-center justify-center gap-4 sx:gap-8"
            >
              <div className="w-1/2 flex flex-col gap-4">
                <h1 className="font-syne text-xl font-semibold sx:text-2xl sm:text-3xl lg:text-5xl capitalize">
                  {h1Tag}
                </h1>
                <p className="font-syne capitalize">{pTag}</p>
                <Button className="w-full lg:w-fit">
                  <a
                    href="https://forms.gle/MKruJpmf2w1AM9ZUA"
                    rel="noopener noreferer"
                    target="_blank"
                    className="capitalize text-[10px] xxx:text-[12px] sx:text-sm"
                  >
                    {t("signUp")}
                  </a>
                </Button>
              </div>
              <div className="w-1/2">
                <img src={gif} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageSlider;
