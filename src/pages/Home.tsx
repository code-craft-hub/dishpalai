import SliderComponent from "@/components/SliderComponent";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaWindows } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa6";
import NavbarComponent from "@/components/Navbar";
import HomePageSlider from "@/components/HomePageSlider";
import Accordion from "@/components/Accordion";
const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const missionVision = [
    {
      title: "Vision",
      des: "To create a smarter and efficient discount shopping and shopping experience generally that allows consumers to access personalized, real-time, and location-based discounts, while fostering eco-friendly shopping habits and supporting local businesses.",
    },
    {
      title: "Mission",
      des: `Dishpal.ai is committed to optimize the way people shop and save 
                money by leveraging advanced AI technology for tailored discount
                shopping. We strive to provide timely, relevant offers that
                match individual preferences, promote eco-friendly practices by
                reducing the need for paper-based discounts, and strengthen
                local communities by connecting shoppers with nearby retailers.
                Our focus on innovation and sustainability ensures that we
                deliver continuous value to both consumers and our retail
                partners.`,
    },
  ];

  const clientImages = [
    {
      img: "/assets/aau.png",
      title: "",
      href: "https://www.aau.at",
    },
    {
      img: "/assets/KWF_weiss.png",
      title: "",
      href: "https://kwf.at",
    },
    {
      img: "/assets/OIP.png",
      title: "",
      href: "https://build.or.at/en/",
    },
    {
      img: "/assets/eu.jpg",
      title: "",
      href: "https://european-union.europa.eu/index_en",
    },
  ];

  const socials = [
    {
      icon: FaXTwitter,
    },
    {
      icon: MdOutlineFacebook,
    },
    {
      icon: LuInstagram,
    },
  ];
  const appDonwload = [
    {
      icon: FaWindows,
      title: "Windows",
    },
    {
      icon: FaApple,
      title: "Mac",
    },
    {
      icon: FaUbuntu,
      title: "Linux",
    },
  ];

  return (
    <div className="bg-[#2d2d2d]">
      <NavbarComponent />
      <main className="max-w-screen-xl mx-auto p-4">
        <section className="" id="home">
          <HomePageSlider />
        </section>
        <section className="my-32 md:px-8 ">
          <h1 className="text-lg font-bold font-syne text-[#4e4d4d] text-center">
            Web App is still under Development
          </h1>
        </section>

        <section className="pb-32 md:px-8" id="why">
          <h1 className="mt-2 text-3xl lg:text-5xl text-center font-bold font-syne tracking-tight capitalize ">
            Why Choose Dishpal.Ai?
          </h1>
          <p className="mt-6 font-syne leading-[18px]  text-center max-w-xl mx-auto text-md">
            Experience a smarter and more sustainable way to shop with
            <span className="text-[#969696] mx-1">Dishpal.ai's</span> innovative
            features designed to enhance your savings and shopping convenience
          </p>

          <SliderComponent />
        </section>

        <section className="pb-32 flex flex-col lg:flex-row items-center justify-center ">
          <div className="lg:w-1/2 p-4 sm:p-8 w-full">
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl lg:text-5xl">
              Take A 60 Seconds
            </p>
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl lg:text-5xl">
              Survery To Help
            </p>
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl lg:text-5xl xl:text-nowrap min-h-16 ">
              <Typewriter
                words={["Shape Dishpal's Feature"]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <Button className="mt-8 rounded-3xl">
              <a
                href="https://forms.gle/MKruJpmf2w1AM9ZUA"
                rel="noopener noreferer"
                target="_blank"
              >
                Help Us Improve
              </a>
            </Button>
          </div>
          <div className="lg:w-1/2 max-lg:mt-16">
            <img
              alt="ladyHoldingPhone"
              src="/assets/ladyHoldingPhone.svg"
              className=""
            />
          </div>
        </section>
        <section
          id="question"
          className="pb-32 md:px-8 max-w-screen-lg mx-auto"
        >
          <h1 className="my-16 text-3xl lg:text-5xl text-center  font-bold font-syne tracking-tight capitalize">
            Frequently Asked Questions
          </h1>
          <Accordion />
        </section>
        <section className="pb-32 md:px-8  w-full" id="about">
          <div className=" lg:pl-[10%] ">

          <h1 className="my-16 text-3xl lg:text-5xl font-bold max-lg:text-center font-syne tracking-tight capitalize">
            About Us
          </h1>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 items-center justify-center gap-8">
            <div className="h-[500px] w-full flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                className="object-cover object-top h-full w-auto "
              >
                <source src="/assets/robotThinking.mp4" type="video/mp4" />
              </video>
            </div>
            {missionVision?.map(({ title, des }, index) => (
              <div
                key={index}
                className="bg-white max-lg:max-w-[500px] max-lg:min-h-[300px] rounded-3xl p-4 md:p-8 h-[100%]"
              >
                <div className="overflow-hidden">
                  <h1 className="text-3xl lg:text-5xl text-center font-bold font-syne tracking-tight text-black capitalize">
                    {title}
                  </h1>
                  <p className="text-black">{des}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <section className="pb-32">
        <div className="bg-white pl-4  flex flex-wrap justify-center items-center">
          {clientImages?.map(({ href, img }, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              target="_blank"
              href={href}
              className="w-1/2 sm:w-1/2 md:w-1/5 flex justify-center items-center"
            >
              <img src={img} className="h-auto max-w-full" alt={href} />
            </a>
          ))}
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center p-4 sm:p-8">
          <div className="flex gap-4 ">
            {socials?.map(({ icon }: any, index) => {
              const Icon = icon;
              return <Icon key={index} className="size-10" />;
            })}
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-center sm:text-start">Will be available On</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 p-4 invertinsetphism rounded-full ">
              {appDonwload?.map(({ icon, title }: any, index) => {
                const Icon = icon;
                return (
                  <div
                    key={index}
                    className="items-center justify-center flex gap-2"
                  >
                    <Icon className="size-6" />
                    <p className="">{title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-8 mt-16 p-4 ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://www.dishpalinfo.com/" className="hover:underline">
              Dishpal Info Website
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
