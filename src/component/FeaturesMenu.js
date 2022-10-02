/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import react, { React } from "react";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Calendar from "../UI/Icons/Calendar";
import Planning from "../UI/Icons/Planning";
import Reminders from "../UI/Icons/Reminders";
import Todo from "../UI/Icons/Todo";
import ArrowDown from "../UI/Arrow/ArrowDown";
import ArrowUp from "../UI/Arrow/ArrowUp";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FeaturesMenu() {
  const [btnClicked, setBtnClicked] = useState(false);
  // const arrowHandler = () => {};

  return (
    <Menu as="div" className=" inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => setBtnClicked(!btnClicked)}
          className="hover:text-almostBlack text-mediumGray text-lg font-semibold text-semibold flex items-center justify-center space-x-3"
        >
          <p>Features</p>
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
        <Menu.Items className=" left-0 z-10 mt-2 font-semibold w-36 text-center origin-top-right rounded-md  focus:outline-none">
          <div className="py-1">
            <Menu.Item className="">
              {({ active }) => (
                <div className="flex items-center justify-center space-x-2">
                  <a
                    href="#"
                    className={classNames(
                      active ? " text-gray-900" : "text-mediumGray",
                      " w-full py-2 text-sm text-left flex items-center justify-start pl-3 space-x-4"
                    )}
                  >
                    <Todo />
                    <p>Todo List</p>
                  </a>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? " text-gray-900" : "text-mediumGray",
                    " w-full flex items-center justify-start pl-3  space-x-4 py-2 text-sm text-left"
                  )}
                >
                  <Calendar />
                  <p>Calendar</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? " text-gray-900" : "text-mediumGray",
                    " w-full py-2 flex items-center pl-3 justify-start  space-x-4  text-sm text-left"
                  )}
                >
                  <Reminders />
                  <p>Reminders</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? " text-gray-900" : "text-mediumGray",
                    "flex items-center pl-3 justify-start  space-x-4 w-full py-2  text-sm text-left"
                  )}
                >
                  <Planning />
                  <p>Planning</p>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
