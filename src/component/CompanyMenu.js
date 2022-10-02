/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import ArrowDown from "../UI/Arrow/ArrowDown";
import ArrowUp from "../UI/Arrow/ArrowUp";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CompanyMenu() {
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <Menu as="div" className=" inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => setBtnClicked(!btnClicked)}
          className="hover:text-almostBlack font-semibold text-lg flex items-center justify-center space-x-3"
        >
          <p>Company</p>
          {btnClicked ? <ArrowUp /> : <ArrowDown />}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" left-0 font-semibold z-10 mt-2 w-24 text-center origin-top-right rounded-md  focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? " text-gray-900" : "text-mediumGray",
                    "block px-4 py-2 text-sm text-left"
                  )}
                >
                  History
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? " text-gray-900" : "text-mediumGray",
                    "block px-4 py-2 text-sm text-left"
                  )}
                >
                  Our Team
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? " text-gray-900" : "text-mediumGray",
                    "block px-4 py-2  text-sm text-left"
                  )}
                >
                  Blog
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
