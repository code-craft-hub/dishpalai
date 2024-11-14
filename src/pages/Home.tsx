import SliderComponent from "@/components/SliderComponent";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const founders = [
  {
    name: "Oluwatomisn owolabi",
    img: "/assets/manedited.png",
    des: "Tomisin is very passionate about machine learning and Artificial Intelligence. she has a strong background in engineering and data science, and has worked as technical support in previous roles and recently as a time series analyst (intern) at the TIG (Transportation Informatics Group) department in the university of Klagenfurt. she is currently the technical product lead at dishpalAi.",
  },
  {
    name: "Dolapo Akanni",
    img: "/assets/yellowedited.png",
    des: `Dolapo has close to a decade of experience in building consumer products for multinationals across different countries. He is an astute Marketing and Business Professional. He is a member of professional bodies and civil service organisations like CIM UK, aPCON, cBAP and the likes. He is currently the founder and CEO of dishpal ai`,
  },
];

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
          <h1 className="my-8 text-4xl  font-bold font-syne tracking-tight capitalize sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <Accordion
            type="single"
            collapsible
            className="w-full border-2 rounded-2xl px-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What Does Dishpal Offer?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas cumque magnam aliquam iure labore ut odio, molestiae
                similique recusandae, est nemo ratione? Expedita, atque!
                Mollitia rem accusamus exercitationem vel sint.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What Types Of Products Can I Find Here?
              </AccordionTrigger>
              <AccordionContent>
                Is My Peronal Information Save Using This Website Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Expedita itaque
                modi dolore consequuntur eos temporibus quibusdam, neque
                necessitatibus possimus, exercitationem saepe reprehenderit quos
                voluptatum sed minima debitis nisi quis at!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is My Peronal Information Save Using This Website
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                enim quisquam repudiandae a, facilis explicabo laudantium
                facere, iusto neque odio id quam et corporis iure maiores
                nostrum temporibus iste dolorem?
              </AccordionContent>
            </AccordionItem>
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
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>To create a smarter and efficient discount shopping and shopping experience generally that allows consumers to access personalized, real-time, and location-based discounts, while fostering eco-friendly shopping habits and supporting local businesses.</CardContent>
            </Card>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>Dishpal.ai is committed to optimize the way people shop and save money by leveraging advanced AI technology for tailored discount shopping. We strive to provide timely, relevant offers that match individual preferences, promote eco-friendly practices by reducing the need for paper-based discounts, and strengthen local communities by connecting shoppers with nearby retailers. Our focus on innovation and sustainability ensures that we deliver continuous value to both consumers and our retail partners.
              </CardContent>
            </Card>
            {/* <Card href="#" className="w-full md:max-w-[300px] md:h-[500px]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vision
              </h5>
              <p className="font-normal text-primary dark:text-gray-400 flex-1">
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
              <p className="font-normal text-primary dark:text-gray-400">
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
            </Card> */}
          </div>
        </section>
        {/* flex flex-col lg:flex-row w-full gap-8 mt-16 */}
        <section className=" flex flex-wrap gap-8">
          
        </section>
        <section className="py-32" id="service">
          <h1 className="my-8 text-4xl text-center font-bold font-syne tracking-tight capitalize sm:text-5xl">
            Meet The Team
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8">
          {founders.map(({ des, img }) => (
            <>
              <a
                href="#"
                className="flex flex-col items-center border border-accent rounded-lg shadow md:flex-row md:max-w-xl"
              >
                <img
                  className="object-cover object-top w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={img}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="mb-3 font-normal">
                    {des}
                  </p>
                </div>
              </a>
            </>
          ))}
          </div>
        </section>
        {/* <section>
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
        </section> */}
      </main>
      <section>
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="" className="flex items-center">
                  <img
                    src="/assets/logo.png"
                    className="h-20 me-3"
                    alt="FlowBite Logo"
                  />
                 
                </a>
              </div>
              
            </div>
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Dishpal Info Website                 </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  className=""
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <div
                  className=" ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </div>
                <div
                  className=" ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </div>
                <div
                 className=" ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </div>
                <a
                  href="#"
                  className=" ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Home;
