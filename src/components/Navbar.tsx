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
      <div className="flex relative justify-between items-center p-4 max-w-screen-xl mx-auto">
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

