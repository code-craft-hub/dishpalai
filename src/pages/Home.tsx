import SliderComponent from "@/components/SliderComponent";
import { clientImages, socials, appDonwload } from "@/constants";
import { Button } from "@/components/ui/button";
// import { Typewriter } from "react-simple-typewriter";
import NavbarComponent from "@/components/Navbar";
import HomePageSlider from "@/components/HomePageSlider";
import Accordion from "@/components/Accordion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const missionVision = [
    {
      title: t("missionT"),
      des: t("missionD"),
    },
    {
      title: t("visionT"),
      des: t("visionD"),
    },
  ];

  return (
    <div className="" id="toppage">
      <NavbarComponent />
      <main
        className="max-w-screen-xl mx-auto px-2 xx:px-4 sm:p-4 mt-16"
        id="home"
      >
        <HomePageSlider />
      </main>
      <section className="py-32 max-w-screen-2xl mx-auto" id="why">
        <h1 className="mt-2 text-[14px] xx:text-[16px] sm:text-xl md:text-3xl lg:text-5xl text-center font-semibold font-syne tracking-tight capitalize text-[#fe9545]">
          {t("whyChooseT")}
        </h1>
        <p className="my-2 lg:my-6 text-[13px] ss:text-sm  xss:text-[20px] text-center max-w-xl mx-auto px-4 capitalize">
          {t("whyChooseD1")}
        </p>

        <SliderComponent />
      </section>

      <main className="max-w-screen-xl mx-auto px-2 xx:px-4 sm:p-4">
        {/* Desktop */}
        <section className="pb-32 hidden flex-col md:flex-row items-center justify-center ">
          <div className="md:w-1/2 pl-4 sm:pl-8 w-full">
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-[14px] xx:text-[16px] sm:text-xl md:text-3xl lg:text-5xl">
              {t("take6")}
            </p>
            {/* <p className="mt-2 font-bold font-syne tracking-tight capitalize text-[14px] xx:text-[16px] sm:text-xl md:text-3xl lg:text-5xl xl:text-nowrap">
              {t("0Seconds")}
            </p> */}
            <Button className=" font-syne mt-4 capitalize">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdIkdLs8DG4GcupB7vbWela5_vWOODO6nU1UXFVA4P9SGirhw/viewform"
                rel="noopener noreferer"
                target="_blank"
              >
                {t("helpusImproveT")}
              </a>
            </Button>
          </div>
          {/* bigPhoneWithPeople.png */}
          {/* ladyHoldingPhone.svg */}
          <div className="md:w-1/2 max-md:mt-16">
            <img
              alt="ladyHoldingPhone"
              src="/assets/ladyHoldingPhone.svg"
              className="w-full h-full "
            />
          </div>
        </section>

        {/* Mobile */}
        <section className="mb-32 flex flex-col items-center justify-center  sm:p-8">
          <p className="font-syne font-bold text-[13px] xx:text-[16px] sm:text-xl md:text-3xl lg:text-5xl py-8 text-[#282828]/80 dark:text-white text-center">
            {t("take6")} {t("0Seconds")}
          </p>
          <div className="flex items-center flex-row gap-4 md:gap-16">
            {/* <p className="mt-2 w-1/2 capitalize font-syne text-[13px] ss:text-sm sxx:text-[16px] xss:text-[20px] xss:leading-6">
              {t("surveyMobile")}
            </p> */}

            <div className="justify-center flex">
              <img
                alt="ladyHoldingPhone"
                src="/assets/takesurvey.png"
                className="w-full h-full "
              />
            </div>
          </div>
          {/* bigPhoneWithPeople.png */}
          {/* ladyHoldingPhone.svg */}

          <Button className="mt-8 w-full max-w-sm capitalize">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdIkdLs8DG4GcupB7vbWela5_vWOODO6nU1UXFVA4P9SGirhw/viewform"
              rel="noopener noreferer"
              target="_blank"
            >
              {t("helpusImproveT")}
            </a>
          </Button>
        </section>
        <section
          id="question"
          className="pb-32 md:px-8 max-w-screen-lg mx-auto"
        >
          <h1 className="my-8 lg:my-16 text-[13px] xx:text-[16px] sm:text-xl md:text-3xl lg:text-5xl font-semibold font-syne tracking-tight capitalize text-[#fe9545] text-center lg:text-start">
            {t("faqT")}
          </h1>
          {/* Accordion Component */}
          <Accordion />
        </section>
        <section className="pb-32 md:px-8  w-full hidden lg:block" id="about">
          <div className=" md:pl-[5%] ">
            <h1 className="mt-16 text-[13px] xx:text-[16px] sm:text-xl md:text-3xl lg:text-5xl font-semibold max-md:text-center font-syne tracking-tight capitalize text-[#fe9545]">
              {t("aboutUs")}
            </h1>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
            <div className="h-[500px] w-full flex items-center justify-center">
              <img
                src="/assets/thinkingR.gif"
                alt=""
                className="object-cover object-top h-full w-auto "
              />
            </div>
            {missionVision?.map(({ title, des }, index) => (
              <div
                key={index}
                className="bg-[#F9F9F9] dark:bg-white max-md:max-w-[500px] rounded-3xl h-[450px] lgx:h-[550px] xl:h-[450px] p-8 justify-center items-start flex shadow-xl overflow-hidden"
              >
                <div className="overflow-hidden">
                  <h1 className="text-3xl md:text-5xl text-center font-bold font-syne tracking-tight text-black capitalize mb-6 ">
                    {title}
                  </h1>
                  <p className="text-black text-center capitalize lgx:text-xl">{des}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <Test /> */}
        <section className="pb-32 md:px-8  w-full lg:hidden" id="about">
          <div className=" md:pl-[5%] ">
            <h1 className="my-10 text-[13px] xx:text-[16px] sm:text-xl md:text-3xl lg:text-5xl font-bold max-lg:text-center font-syne tracking-tight capitalize text-[#fe9545]">
              {t("aboutUs")}
            </h1>
          </div>
          <div className="relative max-xx:flex max-xx:flex-col max-xx:gap-8">
            <div className="bg-gray-100 xxxx:ml-4 xxx:h-[275px] sx:ml-8 md: mdx:ml-16 rounded-3xl p-4 sm:p-8 justify-start items-start flex shadow-xl max-xx:w-full xx:w-[220px] ss:w-[270px] sx:w-[270px] sm:w-[350px] md:h-[420px] xss:h-[420px] xss:w-[320px] md:w-[400px] mx:w-[450px] mx:h-[300px]">
              <div className="overflow-hidden">
                <h1 className="text-sm sx:text-2xl sm:text-3xl lg:text-5xl text-start mb-2 font-bold font-syne tracking-tight text-black capitalize">
                  {t("missionT")}
                </h1>
                <p className="text-black text-[12px] sx:text-[14px] xss:text-xl mx:text-xl mx:h-[200px] capitalize">
                  {t("missionD")}
                </p>
              </div>
            </div>
            <div className="flex flex-col xx:grid xx:grid-cols-2 ">
              <div className="order-2 xx:order-1 h-full flex items-center justify-center">
                <img
                  src="/assets/thinkingR.gif"
                  alt=""
                  className="object-cover object-top h-full w-full"
                />
              </div>
              {/* screens: {
       xx: "320px",
       xxx:"369px",
       xxxx:"415px",
       ss:"470px",
       sx:"530px",
       sxx:"534px",
       xss:"601px",
       md:"768px"
       mx:"872px",
       mdx:"970px",
     }, */}
              <div className="bg-gray-100 order-1 xx:order-2 rounded-3xl sm:p-8 p-4 justify-start items-start flex xx:-mt-4 xx:-ml-8 xxx:h-[275px] xxxx:h-60 sx:h-[280px] sxx:w-[270px] ss:w-[270px] sm:h-[400px] md:h-[420px] sm:w-[350px] md:w-[400px] mdx: sx:-mt-[17px] xss:h-[420px] xss:w-[320px] xss:-mt-8 shadow-xl mx:w-[450px] mx:h-[300px] z-20 ">
                <div className="overflow-hidden ">
                  <h1 className="text-sm sx:text-2xl sm:text-3xl lg:text-5xl text-start mb-2 font-bold font-syne tracking-tight text-black capitalize">
                    {t("visionT")}
                  </h1>
                  <p className="text-black text-pretty text-[12px] sx:text-[14px] xss:text-lg mx:text-xl mx:h-[200px] capitalize">
                    {t("visionD")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="xx:mt-16 dark:bg-white/30 bg-black">
        <div className="max-w-screen-2xl mx-auto max-md:py-4 flex justify-center items-center md:h-[138px]">
          {clientImages?.map(({ href, img }, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              target="_blank"
              href={href}
              className="w-full flex justify-evenly items-center"
            >
              <img
                src={img}
                className={`${
                  index === 0 || index === 1 ? "max-sm:w-8" : "max-sm:!w-20"
                } ${
                  index === 0 || index === 1 ? "sm:w-[90px]" : "sm:w-[200px]"
                } `}
                alt={href}
              />
            </a>
          ))}
        </div>
      </section>
      <main className="md:dark:bg-[#212529]">
        <section className="max-w-screen-xl mx-auto ">
          <div className="flex flex-col sm:flex-row gap-16 justify-between items-center p-4 sm:p-8 py-16 md:pt-32">
            <div className="flex gap-4 order-2 sm:order-1">
              {socials?.map(({ icon }: any, index) => {
                const Icon = icon;
                return (
                  <Icon
                    key={index}
                    className="size-10 md:size-12 hover:cursor-pointer"
                  />
                );
              })}
            </div>
            <div className="flex flex-col gap-4 order-1 sm:order-2 ">
              <h1 className=" text-[#fe9545] text-sm capitalize md:text-lg font-bold font-syne max-md:text-center">
                {t("available")}
              </h1>
              <div className="flex flex-wrap items-center bg-black dark:bg-[#212529] justify-center gap-4 md:gap-8 p-4 dark:shadow-2xl  dark:invertinsetphism rounded-full ">
                {appDonwload?.map(({ icon, title }: any, index) => {
                  const Icon = icon;
                  return (
                    <div
                      key={index}
                      className="items-center justify-center flex gap-2  hover:cursor-pointer"
                    >
                      <Icon className="size-6 text-white" />
                      <p className="font-syne text-white">{title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-8 ">
            <div className="text-sm text-gray-500 sm:text-center flex  items-center dark:text-gray-400 font-syne space-x-4 md:space-x-6">
              <img src="/assets/copywhite.svg" className="dark:hidden" alt="" />{" "}
              <a
                href="https://www.dishpalinfo.com/"
                className="hover:underline font-syne"
              >
                2024 Dishpal Info Website All Rights Reserved.
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
