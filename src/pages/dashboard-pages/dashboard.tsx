import SecondaryNavbar from "@/components/globals/secondaryNavbar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { IoIosMenu } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { cardNavLinks, imgGrid, options } from "@/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const DashboardPage = () => {
  const [tab, setTab] = useState("input");

  return (
    <div className="">
      <div className="bg-bg3xl bg-cover">
        <div className="flex flex-col h-full min-h-screen max-w-screen-2xl mx-auto px-4 sm:px-8 ">
          <SecondaryNavbar />
          <>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IoIosMenu className="size-10 text-vividOrange" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-4 w-[200px] font-syne ml-8">
                  {cardNavLinks?.map(({ title, href, img }, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="hover:!bg-slate-100"
                    >
                      <Link to={href} className="gap-5 flex">
                        <img src={img} alt="" />
                        {title}
                      </Link>
                    </DropdownMenuItem>
                  ))}

                  <div className="rounded-md p-2 hover:cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center space-x-2 ">
                      <Switch
                        id="card"
                        className="data-[state=checked]:bg-vividOrange"
                        onCheckedChange={(value) => {
                          if (value) return setTab("card");
                          return setTab("input");
                        }}
                      />
                      <Label htmlFor="card" className="font-normal">
                        Grid View
                      </Label>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Tabs
                value={tab}
                onValueChange={(value) => {
                  setTab(value);
                }}
                className="w-full"
              >
                <TabsContent
                  value="input"
                  className=" flex flex-col text-center mx-auto space-y-8"
                >
                  <div className="">
                    <h1 className="font-syne capitalize font-bold text-3xl md:text-4xl text-vividOrange">
                      What can i help you find?
                    </h1>
                    <p className="font-syne capitalize">
                      Powered by AI to save you time and money
                    </p>
                  </div>
                  <div className="space-y-8">
                    <div className="rounded-full max-w-screen-sm mx-auto flex items-center gap-2 p-2 bg-white">
                      <img
                        alt="dispal"
                        src="/images/smilling.svg"
                        className=" w-10 h-auto"
                      />
                      <input
                        placeholder="Deals Near Me"
                        className="bg-transparent w-full outline-none focus:outline-none"
                      />
                      <Button className="ml-auto rounded-full mr-1 p-2.5 sm:p-4 bg-vividOrange">
                        <span className="hidden sm:flex">Find Deals </span>{" "}
                        <BsFillSendFill className="w-2 h-2  sm:size-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mdgap-6 mx-auto max-w-screen-lg items-center justify-center">
                      {options.map(({ img, text }, index) => (
                        <div
                          key={index}
                          className="border-[1px] flex gap-4 py-2 px-4 sm:px-8 rounded-full border-vividOrange"
                        >
                          <img src={img} alt="" />
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="card"
                  className="max-w-xl text-center mx-auto flex flex-col space-y-4"
                >
                  <div className="">
                    <h1 className="font-syne capitalize font-bold text-3xl md:text-4xl text-vividOrange">
                      Search for the deals that matter to you
                    </h1>
                    <p className="font-syne capitalize">Follow these steps</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4  justify-center items-center gap-4">
                    {imgGrid.map(({ img, topTitle, bottomTitle }, index) => (
                      <div
                        key={index}
                        className="relative h-36 rounded-3xl overflow-hidden "
                      >
                        <img src={img} alt="" />
                        <div className="absolute bottom-0 pb-2 bg-gradient-to-t from-black to-transparent w-full pl-4">
                          <p className="text-white font-syne text-start font-bold">
                            {topTitle}
                          </p>
                          <p className="text-white font-syne text-start font-bold -mt-2">
                            {bottomTitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" space-y-4 py-8">
                    <div className="rounded-full max-w-screen-sm mx-auto flex items-center gap-2 p-2 bg-white">
                      <img
                        alt="dispal"
                        src="/images/smilling.svg"
                        className=" w-10 h-auto"
                      />
                      <input
                        placeholder="Deals Near Me"
                        className="bg-transparent w-full outline-none focus:outline-none"
                      />
                      <Button className="ml-auto rounded-full mr-1 p-2.5 sm:p-4 bg-vividOrange">
                        <span className="hidden sm:flex">Find Deals </span>{" "}
                        <BsFillSendFill className="w-2 h-2  sm:size-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mdgap-6 mx-auto max-w-screen-lg items-center justify-center">
                      {options.map(({ img, text }, index) => (
                        <div
                          key={index}
                          className="border-[1px] flex gap-4 py-2 px-4 sm:px-8 rounded-full border-vividOrange"
                        >
                          <img src={img} alt="" />
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
