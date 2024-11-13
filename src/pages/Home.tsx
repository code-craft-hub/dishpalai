import SliderComponent from "@/components/SliderComponent";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";

import { Button } from "@/components/ui/button";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { ModeToggle } from "@/components/mode-toggle";

const Home = () => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto p-4">
        <section className="flex flex-col lg:flex-row items-center justify-center max-lg:py-16 lg:pb-16">
          <div className="lg:w-1/2 p-4 sm:p-8">
            <p className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl">
              Discover
            </p>
            <p className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl">
              personalized
            </p>
            <p className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl">
              deals tailored to
            </p>
            <p className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl">
              Your Preferences.
            </p>
            <p className="mt-6 font-syne capitalize text-lg/8">
              ensuring you never miss an opportunity to save
            </p>
            <Button className="px-8 mt-8 rounded-none">
              Be The First To Know
            </Button>
            <div className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl"></div>
          </div>
          <div className="lg:w-1/2">
            <img alt="Product screenshot" src="/assets/ai.svg" className="" />
          </div>
        </section>
        <section className="">
          <h1 className="text-lg font-bold font-syne text-center">
            Web App is still under Development
          </h1>
        </section>

        <section className="py-32">
          <h1 className="mt-2 text-4xl text-center font-bold font-syne tracking-tight capitalize sm:text-5xl">
            Why Choose Dishpal.Ai?
          </h1>
          <p className="mt-6 font-syne capitalize text-center max-w-xl mx-auto text-lg/8">
            Experience A Smarter. More Sustainable Way To Shop With Dishpal.Ai's
            Innovative Features Designed To Enhance Your Savings And Shopping
            Convenience{" "}
          </p>

          <SliderComponent />
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-center ">
          <div className="lg:w-1/2 p-4 sm:p-8">
            <p className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl">
              Take A 60 Seconds
            </p>
            <p className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl">
              Survery To Help Shape
            </p>
            <p className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl">
              Dishpal's Feature
            </p>
            <Button className="px-8 mt-8 rounded-none">help us improve</Button>
            <div className="mt-2 text-4xl font-bold font-syne tracking-tight capitalize sm:text-5xl"></div>
          </div>
          <div className="lg:w-1/2">
            <img
              alt="ladyHoldingPhone"
              src="/assets/ladyHoldingPhone.svg"
              className=""
            />
          </div>
        </section>
        <section className="py-32 max-w-screen-lg mx-auto">
          <h1 className="my-8 text-4xl text-center font-bold font-syne tracking-tight capitalize sm:text-5xl">
            Frequently Asked Question
          </h1>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>what does dishpal offer?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Dishpal.ai is an innovative platform that delivers personalized, real-time, location-based discounts tailored to your shopping preferences. By leveraging advanced AI algorithms and geolocation technology, we ensure you receive the most relevant deals, enhancing your shopping experience and helping you save money.
                </p>
               
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
              what types of products can i find here?
              </Accordion.Title>
              <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Dishpal.ai is an innovative platform that delivers personalized, real-time, location-based discounts tailored to your shopping preferences. By leveraging advanced AI algorithms and geolocation technology, we ensure you receive the most relevant deals, enhancing your shopping experience and helping you save money.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
              is my personal information safe using this website?
              </Accordion.Title>
              <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Dishpal.ai is an innovative platform that delivers personalized, real-time, location-based discounts tailored to your shopping preferences. By leveraging advanced AI algorithms and geolocation technology, we ensure you receive the most relevant deals, enhancing your shopping experience and helping you save money.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </section>
        <section className="" id="about">
          <h1 className="my-8 text-4xl text-center font-bold font-syne tracking-tight capitalize sm:text-5xl">
            About Us
          </h1>
          <div className="flex items-center justify-center flex-row flex-wrap gap-8">
            <div className="">
              <img
                alt="Product screenshot"
                width={300}
                src="/assets/ROBOT.svg"
                className=""
              />
            </div>
            <Card href="#" className="w-full md:max-w-[300px] md:h-[500px]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vision
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 flex-1">
                To create a smarter and efficient discount shopping and shopping
                experience generally that allows consumers to access
                personalized, real-time, and location-based discounts, while
                fostering eco-friendly shopping habits and supporting local
                businesses.
              </p>
            </Card>
            <Card href="#" className="w-full md:max-w-[300px] md:h-[500px]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mission{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Dishpal.ai is committed to optimize the way people shop and save
                money by leveraging advanced AI technology for tailored discount
                shopping. We strive to provide timely, relevant offers that
                match individual preferences, promote eco-friendly practices by
                reducing the need for paper-based discounts, and strengthen
                local communities by connecting shoppers with nearby
                retailers.Our focus on innovation and sustainability ensures
                that we deliver continuous value to both consumers and our
                retail partners.
              </p>
            </Card>
          </div>
        </section>
        <section className="py-32" id="service">
          <h1 className="my-8 text-4xl text-center font-bold font-syne tracking-tight capitalize sm:text-5xl">
            Meet The Team
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Card
              className="max-w-sm"
              imgSrc="/assets/man_yellow_shirt.jpeg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dolapo Akanni
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Dolapo has close to a decade of experience in building consumer
                products for multinationals across different countries. He is an
                astute Marketing and Business Professional. He is a member of
                professional bodies and civil service organisations like CIM UK,
                aPCON, cBAP and the likes. He is currently the founder and CEO
                of dishpal ai
              </p>
            </Card>
            <Card
              className="max-w-sm"
              imgSrc="/assets/man_on_black_shirt.jpeg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Oluwatomisn owolabi
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Tomisin is very passionate about machine learning and Artificial
                Intelligence. she has a strong background in engineering and
                data science, and has worked as technical support in previous
                roles and recently as a time series analyst (intern) at the TIG
                (Transportation Informatics Group) department in the university
                of Klagenfurt. she is currently the technical product lead at
                dishpalAi.
              </p>
            </Card>
          </div>
        </section>
        <section>
          <Footer container>
            <div className="w-full">
              <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                  <Footer.Brand
                    // href="https://Dishpalai.com"
                    src="/assets/logo.png"
                    alt="Dishpalai"
                    name="Dishpalai"
                    className="h-44 w-auto"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 ">
                  <div>
                    <Footer.Title title="about" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Dishpalai</Footer.Link>
                      {/* <Footer.Link href="#">Tailwind CSS</Footer.Link> */}
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="Follow us" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Linkedn</Footer.Link>
                      <Footer.Link href="#">Facebook</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="Legal" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Privacy Policy</Footer.Link>
                      <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                </div>
              </div>
              <Footer.Divider />
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright
                  href="#"
                  by="Dishpal Info Website. All Rights Reserved"
                  year={2024}
                />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon href="#" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsTwitter} />
                  <Footer.Icon href="#" icon={BsGithub} />
                  <Footer.Icon href="#" icon={BsDribbble} />
                </div>
              </div>
            </div>
            <div className=" my-4">
              <ModeToggle />
            </div>
          </Footer>
        </section>
      </main>
    </>
  );
};

export default Home;
