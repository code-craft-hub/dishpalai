import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();

  const navigation = [
    { name: t("home"), href: "why", current: true },
    { name: t("aboutUs"), href: "about", current: false },
    { name: t("services"), href: "question", current: false },
  ];
  return (
    <Disclosure as="nav" className="">
      <div className="flex relative justify-between items-center px-4 max-w-screen-xl mx-auto">
        <div className="">
          <img
            alt="Your Company"
            src="/assets/logo.png"
            className="h-20 w-auto"
          />
        </div>
        <div className="max-md:hidden gap-8 flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-gray-300 hover:border-accent hover:border-b-2 hover:text-white
                      px-3 py-2 text-sm font-medium hover:font-bold hover:cursor-pointer`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <LanguageSelect />
          <DisclosureButton className="md:hidden">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-6 group-data-[open]:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-[open]:block"
            />
          </DisclosureButton>
        </div>
      </div>
      <DisclosurePanel className="flex flex-col">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`
                     ${
                       item.current
                         ? " text-white"
                         : "text-gray-300 hover:bg-accent hover:text-white"
                     } rounded-md px-3 py-2 text-sm font-medium`}
          >
            {item.name}
          </Link>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
{
  /* <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl p-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <img
              alt="Your Company"
              src="/assets/orangeLogo.png"
              className="h-44 w-auto"
            />
          </div>
          <div className="flex flex-1 items-center justify-center  sm:justify-start">
            <div className="hidden sm:ml-6 sm:flex items-center justify-center  flex-1">
              <div className="flex space-x-4 justify-center ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                     ${
                       item.current
                         ? " text-white"
                         : "text-gray-300 hover:bg-[#535252] hover:text-white"
                     } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#535252] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden ">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              // href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`
                     ${
                       item.current
                         ? "bg-[#535252] text-white"
                         : "text-gray-300 hover:bg-[#535252] hover:text-white"
                     } block rounded-md px-3 py-2 text-base font-medium`}
            >
              <Link key={item.name} to={item.href}>
                {item.name}
              </Link>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure> */
}
