import SliderComponent from "@/components/SliderComponent";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import SwipeParagraphs from "@/components/SwipeParagraphs";
import { Typewriter } from "react-simple-typewriter";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaWindows } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa6";
import ClientsLogo from "@/components/ClientsLogo";
import NavbarComponent from "@/components/Navbar";
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
      href: "",
    },
    {
      img: "/assets/KWF_weiss.png",
      title: "",
      href: "",
    },
    {
      img: "/assets/OIP.png",
      title: "",
      href: "",
    },
    {
      img: "/assets/eu.png",
      title: "",
      href: "",
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
    <>
          <NavbarComponent />

      <main className="max-w-screen-xl mx-auto p-4">
        <section
          className="pb-32 md:px-8 flex flex-col md:flex-row items-center justify-center"
          id="home"
        >
          <div className="md:w-1/2  w-full">
            <SwipeParagraphs />

            <Button className="p-8 mt-8 w-full sm:w-fit  rounded-none sm:text-lg">
              Have Access To Our Beta Version
            </Button>
            <div className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl"></div>
          </div>
          <div className="md:w-1/2">
            <img alt="Product screenshot" src="/assets/ai.svg" className="" />
          </div>
        </section>

        <section className="pb-32 md:px-8">
          <h1 className="text-lg font-bold font-syne text-center">
            Web App is still under Development
          </h1>
        </section>

        <section className="pb-32 md:px-8" id="why">
          <h1 className="mt-2 text-3xl sm:text-5xl text-center font-bold font-syne tracking-tight capitalize ">
            Why Choose Dishpal.Ai?
          </h1>
          <p className="mt-6 font-syne leading-[18px] capitalize text-center max-w-xl mx-auto text-lg/8">
            Experience A Smarter. More Sustainable Way To Shop With Dishpal.Ai's
            Innovative Features Designed To Enhance Your Savings And Shopping
            Convenience
          </p>

          <SliderComponent />
        </section>

        <section className="pb-32 md:px-8 flex flex-col lg:flex-row items-center justify-center ">
          <div className="lg:w-1/2 p-4 sm:p-8">
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl sm:text-5xl">
              Take A 60 Seconds
            </p>
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl sm:text-5xl">
              Survery To Help Shape
            </p>
            <p className="mt-2 font-bold font-syne tracking-tight capitalize text-3xl sm:text-5xl  min-h-24 ">
              <Typewriter
                words={["Dishpal's Feature"]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <Button className="p-8 w-full sm:w-fit rounded-none sm:text-lg">
              Help Us Improve
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
        <section id="question" className="pb-32 md:px-8 max-w-screen-lg mx-auto">
          <h1 className="my-16 text-3xl sm:text-5xl text-center  font-bold font-syne tracking-tight capitalize">
            Frequently Asked Questions
          </h1>
          <Accordion
            type="single"
            collapsible
            className="w-full border-2 rounded-3xl border-white px-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What Does Dishpal Offer?</AccordionTrigger>
              <AccordionContent>
                Dishpal.ai is an innovative platform that delivers personalized,
                real-time, location-based discounts tailored to your shopping
                preferences. By leveraging advanced AI algorithms and
                geolocation technology, we ensure you receive the most relevant
                deals, enhancing your shopping experience and helping you save
                money.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What Types Of Products Can I Find Here?
              </AccordionTrigger>
              <AccordionContent>
                Dishpal.ai is an innovative platform that delivers personalized,
                real-time, location-based discounts tailored to your shopping
                preferences. By leveraging advanced AI algorithms and
                geolocation technology, we ensure you receive the most relevant
                deals, enhancing your shopping experience and helping you save
                money.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is My Peronal Information Save Using This Website
              </AccordionTrigger>
              <AccordionContent>
                Dishpal.ai is an innovative platform that delivers personalized,
                real-time, location-based discounts tailored to your shopping
                preferences. By leveraging advanced AI algorithms and
                geolocation technology, we ensure you receive the most relevant
                deals, enhancing your shopping experience and helping you save
                money.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can Your AI Feature Help Me Compare Products?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Dishpal.ai is an innovative platform that delivers personalized,
                real-time, location-based discounts tailored to your shopping
                preferences. By leveraging advanced AI algorithms and
                geolocation technology, we ensure you receive the most relevant
                deals, enhancing your shopping experience and helping you save
                money.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                When Will The Website Be Ready?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Dishpal.ai is an innovative platform that delivers personalized,
                real-time, location-based discounts tailored to your shopping
                preferences. By leveraging advanced AI algorithms and
                geolocation technology, we ensure you receive the most relevant
                deals, enhancing your shopping experience and helping you save
                money.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="pb-32 md:px-8  w-full" id="about">
          <h1 className="my-8 text-3xl sm:text-5xl text-center font-bold font-syne tracking-tight capitalize">
            About Us
          </h1>
          <div className="flex flex-col lg:grid lg:grid-cols-3 items-center justify-center gap-8">
            <div className="flex w-full items-center justify-center bg-yellow">
              <img src="/assets/ROBOT.svg" alt="" />
            </div>
           
              {missionVision?.map(({ title, des }, index) => (
                <div key={index} className="bg-white max-lg:max-w-[500px] max-lg:min-h-[300px] rounded-3xl p-4 md:p-8 h-[100%]">
                  <div className="overflow-hidden">
                    <h1 className="text-3xl md:text-5xl text-center font-bold font-syne tracking-tight text-black capitalize">
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
        <ClientsLogo clientImages={clientImages} />
      </section>
      <section className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4 p-4 sm:p-8">
            {socials?.map(({ icon }: any, index) => {
              const Icon = icon;
              return <Icon key={index} className="size-10" />;
            })}
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-center sm:text-start">Available On</h1>
            <div className="flex gap-4 p-4 invertinsetphism rounded-full ">
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
            <a href="https://flowbite.com/" className="hover:underline">
              Dishpal Info Website
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
