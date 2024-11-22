import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
const navigation = [
  { name: "Home", href: "why", current: true },
  { name: "About Us", href: "about", current: false },
  { name: "Our Services", href: "question", current: false },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
// 

export default function Example() {
  return (
    <Disclosure as="nav" className="">
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
    </Disclosure>
  );
}