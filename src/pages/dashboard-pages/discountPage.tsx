"use client";
import { discountProducts } from "@/constants";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { BsFillTriangleFill } from "react-icons/bs";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import SecondaryNavbar from "@/components/globals/secondaryNavbar";
const DiscountPage = () => {
  const [toggleHeart, setToggleHeart] = useState(true);

  return (
    <div className="">
      <div className="bg-bg3xl bg-cover">
        <div className="flex flex-col max-w-screen-2xl mx-auto px-4 sm:px-8">
          <SecondaryNavbar />
          <>
             <div className="sm:ml-auto mt-4 max-sm:mx-4 ">
                <Menubar className="rounded-none bg-vividOrange w-40">
                  <MenubarMenu>
                    <MenubarTrigger className="w-full flex font-syne items-center rounded-none text-white focus:bg-transparent focus:text-white data-[state=open]:bg-transparent data-[state=open]:text-white">
                      Sort By{" "}
                      <BsFillTriangleFill className="ml-auto rotate-180 size-2" />
                    </MenubarTrigger>
                    <MenubarContent className="font-syne">
                      <MenubarItem>Rating</MenubarItem>
                      <MenubarItem>Category</MenubarItem>
                      <MenubarItem>price descending</MenubarItem>
                      <MenubarItem>Price ascending</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
            </div>
            <div className="flex mx-auto my-12 max-sm:px-4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-4 justify-center w-full">
                {discountProducts.map(({ title, img }, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-xl relative w-full"
                  >
                    <div className="p-4 pb-20 flex flex-col h-full space-y-4">
                      <div
                        className="w-fit ml-auto"
                        onClick={() => setToggleHeart(!toggleHeart)}
                      >
                        {toggleHeart ? (
                          <FaRegHeart className="text-gray-500" />
                        ) : (
                          <FaHeart className="text-red-500" />
                        )}
                      </div>
                      <div className="flex-1 justify-center items-center flex">
                        <img src={img} alt="" />
                      </div>
                      <div className="space-y-2.5 capitalize font-syne">
                        <h1 className=" text-xl text-center font-bold">
                          {title}
                        </h1>
                        <p className="text-center">
                          {" "}
                          Lorem ipsum dolor sit amet consectetur.{" "}
                        </p>
                        <p className="text-cartGreen text-center">
                          2 hours left on deal
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <IoLocationSharp className="text-vividOrange size-4 shrink-0" />
                          <p className="text-[11px] text-nowrap">
                            shopping store name (2 miles away)
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          {[1, 2, 3, 4].map((_, key) => (
                            <div key={key} className="flex">
                              <MdOutlineStar className="text-buttonGreen size-5" />
                            </div>
                          ))}
                          <MdOutlineStar className="text-gray-200 size-5" />
                        </div>
                      </div>
                    </div>
                    <Button className="bg-buttonGreen font-bold font-syne w-full rounded-none h-12 absolute bottom-0">
                      Buy Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full mb-8 flex justify-center">
              <Button
                variant={"outline"}
                className="font-syne text-xl px-16 rounded-none h-12"
              >
                Load More
              </Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default DiscountPage;
