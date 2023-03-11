import classNames from "classnames";
import Container from "../Container";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { routes } from "../../../routes";
import { useRouter } from "next/router";
import { useTheme } from "../../../hooks/useTheme";

type NavbarProps = {
  //
};

const navigation = [
  { name: "Home", href: "/", isNextLink: true, show: true },
  {
    name: "App",
    href: "https://app.jexchange.io/",
    isNextLink: false,
    target: "_blank",
    show: true,
  },
  {
    name: "Litepaper",
    href: "https://medium.com/@jexchangep2p/jex-litepaper-b5d48e69b084",
    isNextLink: false,
    target: "_blank",
    show: true,
  },
  { name: "Tokenomics", href: "/tokenomics", isNextLink: true, show: true },
  { name: "Roadmap", href: "/roadmap", isNextLink: true, show: true },
  { name: "Our team", href: "/team", isNextLink: true, show: true },
  { name: "FAQ", href: "/faq", isNextLink: true, show: true },
];

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-dark-600/50 backdrop-filter backdrop-blur bg-opacity-70 dark:bg-opacity-70 items-center sticky top-0 shadow-sm z-20"
    >
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ml-12 sm:ml-0">
                  <img
                    className="block lg:hidden h-9 w-auto"
                    src="/assets/img/logo.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-9 w-auto"
                    src="/assets/img/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.show ? (
                        item.isNextLink ? (
                          <Link href={item.href} key={item.name}>
                            <a
                              className={classNames(
                                router.pathname === item.href
                                  ? "text-primary-500 font-bold"
                                  : "",
                                "hover:text-primary-500 py-2 text-sm font-medium transition duration-200 ease-in-out cursor-pointer"
                              )}
                            >
                              {item.name}
                            </a>
                          </Link>
                        ) : (
                          <a
                            key={item.name}
                            href={item.target && item.href}
                            target={item.target}
                            rel="noreferrer"
                            className={classNames(
                              router.pathname == item.href ? "" : "",
                              "hover:text-primary-500 py-2 text-sm font-medium transition duration-200 ease-in-out cursor-pointer"
                            )}
                            aria-current={
                              router.pathname == item.href ? "page" : undefined
                            }
                          >
                            {item.name}
                          </a>
                        )
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="group">
                <button onClick={toggleTheme} type="button" className={""}>
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:rotate-12"
                    >
                      <path
                        className=" group-hover:fill-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:rotate-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" group-hover:fill-black"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </Container>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="div">
                  <Link href={item.href} key={item.name}>
                    <a
                      className={classNames(
                        router.pathname == item.href
                          ? "bg-dark-500"
                          : "hover:bg-dark-500",
                        "block px-3 py-2 rounded-md text-base font-medium duration-200 ease-in-out transition"
                      )}
                      aria-current={
                        router.pathname == item.href ? "page" : undefined
                      }
                    >
                      {item.name}
                    </a>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

Navbar.propTypes = {
  //
};

export default Navbar;
