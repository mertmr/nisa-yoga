"use client";

import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { RefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function useOutsideAlerter(ref: RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsSidebarOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex justify-between">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={toggleSidebar}
          className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
          <span className="pl-1">Menu</span>
        </button>
        <div></div>
      </div>
      <aside
        id="default-sidebar"
        ref={wrapperRef}
        className={`fixed left-0 top-0 z-40 h-screen w-64 md:block transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <div className="flex flex-row">
            <div className="pt-6">
              <Image
                className="w-screen rounded-full"
                src="/logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <Image
                  className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  src="/home-page-svgrepo-com.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <span className="ml-3">Ana Sayfa</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <Image
                  className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  src="/about-svgrepo-com.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <span className="ml-3 flex-1 whitespace-nowrap">Hakkimda</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <Image
                  className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  src="/group-svgrepo-com.svg"
                  width={20}
                  height={20}
                  alt="Picture of the "
                />
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Terapi Hakkinda
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* )} */}
    </div>
  );
}

export { Sidebar };
