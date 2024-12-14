import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { t } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 550;
      setIsFixed(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigation = [
    { name: t("home"), href: "home", current: true },
    { name: t("aboutUs"), href: "why", current: false },
    { name: t("services"), href: "question", current: false },
  ];
  return (
    <Disclosure
      as="nav"
      className={`transition-all duration-300 ${
        isFixed
          ? "fixed top-0 left-0 w-full shadow-2xl backdrop-blur-3xl z-50"
          : ""
      }`}
    >
      <div className="flex relative justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="">
          <img
            alt="Your Company"
            src="/assets/logo.png"
            className="h-20 w-auto md:hidden"
          />
          <img
            alt="Your Company"
            src="/assets/desktopLogo.png"
            className="h-20 w-auto hidden md:block"
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
      <DisclosurePanel className="flex flex-col p-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            spy={true}
            smooth={true}
            duration={2500}
            offset={-70}
            className="w-full"
          >
            <DisclosureButton
              className={`
                     ${
                       item.current
                         ? " text-white"
                         : "text-gray-300 hover:bg-accent hover:text-white"
                     } rounded-md px-3 py-2 text-sm font-medium w-full text-start`}
            >
              {item.name}
            </DisclosureButton>
          </Link>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
