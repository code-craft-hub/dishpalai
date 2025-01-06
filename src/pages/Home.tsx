import SliderComponent from "@/components/SliderComponent";
import { clientImages, socials, appDonwload } from "@/constants";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import NavbarComponent from "@/components/Navbar";
import HomePageSlider from "@/components/HomePageSlider";
import Accordion from "@/components/Accordion";
import { useTranslation } from "react-i18next";

//cross checking repo

const Home = () => {
  const { t } = useTranslation();

  const missionVision = [
    {
      title: t("visionT"),
      des: t("visionD"),
    },
    {
      title: t("missionT"),
      des: t("missionD"),
    },
  ];

  return (
    <div className="" id="toppage">
      <NavbarComponent />
      <main className="max-w-screen-xl mx-auto p-4">
        <section className="" id="home">
          <HomePageSlider />
        </section>
        <section className="my-16 md:px-8 ">
          <h1 className="text-lg font-bold font-syne text-white/50 text-center">
            Web App is still under Development
          </h1>
        </section>

        <section className="pb-32 md:px-8" id="why">
          <h1 className="mt-2 text-xl lg:text-5xl text-center font-bold font-syne tracking-tight capitalize text-[#fe9545]">
            {t("whyChooseT")}
          </h1>
          <p className="mt-6 font-syne leading-[18px]  text-center max-w-xl mx-auto text-md">
            {t("whyChooseD1")}
            {/* <span className="text-[#fe9545] mx-1">Dishpal.ai's</span> */}
          </p>

          <SliderComponent />
        </section>

        {/* Desktop */}
        <section className="pb-32 hidden md:flex flex-col md:flex-row items-center justify-center ">
          <div className="md:w-1/2 p-4 sm:p-8 w-full">
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl md:text-5xl">
              {t("take6")}
            </p>
            {/* <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl md:text-5xl">
              {t("0Seconds")}
            </p> */}
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl md:text-5xl xl:text-nowrap min-h-16 ">
              <Typewriter
                words={[t("0Seconds")]}
                loop={2}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <Button className="mt-8">
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
        <section className="mb-32 flex flex-col md:hidden items-center justify-center p-4 sm:p-8">
          <p className="font-syne font-bold text-xl sm:text-5xl py-8 text-[#fe9545] text-center">
            {t("quickSurvey")}
          </p>
          <div className="flex items-center flex-col sm:flex-row gap-16">
            <p className="mt-2 sm:w-1/2  font-syne">{t("surveyMobile")}</p>

            <div className=" sm:w-1/2 justify-center flex ">
              <img
                alt="ladyHoldingPhone"
                src="/assets/bigPhoneWithPeople.png"
                className="w-full h-full"
              />
            </div>
          </div>
          {/* bigPhoneWithPeople.png */}
          {/* ladyHoldingPhone.svg */}

          <Button className="mt-8 w-full max-w-sm">
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
          <h1 className="my-16 text-xl lg:text-5xl  font-bold font-syne tracking-tight capitalize text-[#fe9545] text-center sm:text-start">
            {t("faqT")}
          </h1>
          {/* Accordion Component */}
          <Accordion />
        </section>
        <section className="pb-32 md:px-8  w-full hidden lg:block" id="about">
          <div className=" md:pl-[5%] ">
            <h1 className="mt-16 text-3xl md:text-5xl font-bold max-md:text-center font-syne tracking-tight capitalize text-[#fe9545]">
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
              {/* <video
                autoPlay
                loop
                muted
                className="object-cover object-top h-full w-auto "
              >
                <source src="/assets/robotThinking.mp4" type="video/mp4" />
              </video> */}
            </div>
            {missionVision?.map(({ title, des }, index) => (
              <div
                key={index}
                className="bg-white max-md:max-w-[500px] rounded-3xl h-80 p-8 justify-center items-center flex"
              >
                <div className="overflow-hidden">
                  <h1 className="text-3xl md:text-5xl text-center font-bold font-syne tracking-tight text-black capitalize mb-6">
                    {title}
                  </h1>
                  <p className="text-black">{des}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="pb-32 md:px-8  w-full lg:hidden" id="about">
          <div className=" md:pl-[5%] ">
            <h1 className="my-16 text-3xl md:text-5xl font-bold max-lg:text-center font-syne tracking-tight capitalize text-[#fe9545]">
              {t("aboutUs")}
            </h1>
          </div>
          <div className="relative max-xx:flex max-xx:flex-col max-xx:gap-8">
            <div className="bg-white xxxx:ml-4 ss:ml-10 sx:ml-24 sm:ml-10 md:ml-16 mdx:ml-32 rounded-3xl p-4 sm:p-8 justify-center items-center flex shadow-xl border border-orange-200 max-xx:w-full xx:max-w-[220px] sx:max-w-[250px] xss:max-w-[300px] sm:max-w-[400px] ">
              <div className="overflow-hidden">
                <h1 className="text-sm sx:text-2xl sm:text-5xl text-start mb-2 font-bold font-syne tracking-tight text-black capitalize">
                  {t("visionT")}
                </h1>
                <p className="text-black text-[12px] sx:text-[14px] sm:text-xl">
                  {t("visionD")}
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
              <div className="order-1 xx:order-2 bg-white rounded-3xl sm:p-8 p-4 justify-center items-center flex xx:-mt-6 xxx:h-[280px] xxxx:h-60 sx:h-[250px] sxx:h-[240px] xss:h-[210px]  sm:h-[380px] mx:h-[330px] mdx:h-[280px] sx:-mt-[17px] xss:-mt-10 sm:-mt-16 shadow-xl border border-orange-200">
                <div className="overflow-hidden">
                  <h1 className="text-sm sx:text-2xl sm:text-5xl text-start mb-2 font-bold font-syne tracking-tight text-black capitalize">
                    {t("missionT")}
                  </h1>
                  <p className="text-black text-pretty text-[12px] sx:text-[14px] sm:text-lg">
                    {t("missionD")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="xx:pt-16">
        <div className="dark:bg-white/30 bg-black max-md:py-4 flex flex-wrap justify-center items-center md:h-[138px]">
          {clientImages?.map(({ href, img }, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              target="_blank"
              href={href}
              className="w-1/2 sm:w-1/2 md:w-1/5 flex justify-center items-center"
            >
              <img src={img} className="" alt={href} />
            </a>
          ))}
        </div>
      </section>
      <main className="dark:bg-[#212529]">
        <section className="max-w-screen-lg mx-auto ">
          <div className="flex flex-col sm:flex-row gap-16 justify-between items-center p-4 sm:p-8 py-16 md:pt-32">
            <div className="flex gap-4 ">
              {socials?.map(({ icon }: any, index) => {
                const Icon = icon;
                return (
                  <Icon key={index} className="size-10 hover:cursor-pointer" />
                );
              })}
            </div>
            <div className="flex flex-col gap-4 ">
              <h1 className=" text-[#fe9545] sm:text-md font-bold font-syne">
                {t("available")}
              </h1>
              <div className="flex flex-wrap items-center bg-black dark:bg-transparent justify-center gap-4 md:gap-8 p-4 shadow-2xl  dark:invertinsetphism rounded-full ">
                {appDonwload?.map(({ icon, title }: any, index) => {
                  const Icon = icon;
                  return (
                    <div
                      key={index}
                      className="items-center justify-center flex gap-2  hover:cursor-pointer"
                    >
                      <Icon className="size-6 text-white"  />
                      <p className="font-syne text-white">{title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-8">
            <span className="text-sm text-gray-500 sm:text-center flex  dark:text-gray-400 font-syne md:space-x-2">
              <img src="/assets/copy.png" className="mr-1 md:mr-2" alt="" />{" "}
              <a
                href="https://www.dishpalinfo.com/"
                className="hover:underline font-syne"
              >
                2024 Dishpal Info Website. All Rights Reserved.
              </a>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
