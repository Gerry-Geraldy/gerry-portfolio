import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { name, showBlog, showResume } = data;

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = (
    <>
      <Button onClick={handleWorkScroll}>Work</Button>
      <Button onClick={handleAboutScroll}>About</Button>
      {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
      {showResume && (
        <Button onClick={() => router.push("/resume")}>Resume</Button>
      )}
      <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
        Contact
      </Button>
      {mounted && theme && data.darkMode && (
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Image
            className="h-6"
            src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
            width={24}
            height={24}
            alt="Theme Toggle"
          />
        </Button>
      )}
    </>
  );

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>
              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      width={24}
                      height={24}
                      alt="Theme Toggle"
                    />
                  </Button>
                )}
                <Popover.Button>
                  <Image
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    width={20}
                    height={20}
                    alt="Menu"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark"
                  ? "bg-slate-800 text-white"
                  : "bg-white text-black"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">{menuItems}</div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row p-2 items-center justify-between sticky top-0 z-10 tablet:flex transition-all duration-300 ${
          theme === "light" ? "text-black" : "dark:text-white"
        } ${
          scrolled
            ? "backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-md"
            : "bg-transparent"
        }`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        <div className="flex">{menuItems}</div>
      </div>
    </>
  );
};

export default Header;
