"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import useThemeSwitcher from "./useThemeSwitcher";
import { LightIcon } from "./Icon";
import { MoonIcon } from "./Icon";
import { motion } from "framer-motion";
import SmoothLink from "./Link";
import { SelectedPage } from "./types";

const CustomLink = ({
  href,
  title,
  className = "mx-4",
  className2 = "",
}: {
  href: string;
  title: string;
  className?: string;
  className2?: string;
}) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={className + " group relative"}>
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-0.5 bg-black transition-all duration-300 group-hover:w-full dark:bg-light
      ${pathname === href ? "w-full" : "w-0"}
      ${className2}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const home = {
  href: "/",
  title: "Home",
  className: "mr-4",
};
const about = {
  href: "#about",
  title: "About",
};
const projects = {
  href: "/projects",
  title: "Projects",
};
const articles = {
  href: "/",
  title: "Articles",
};

const mobileHome = {
  href: "/",
  title: "Home",
  className: "my-4",
  className2: "bg-light dark:bg-dark",
};
const mobileAbout = {
  href: "/about",
  title: "About",
  className: "my-4",
  className2: "bg-light dark:bg-dark",
};
const mobileProjects = {
  href: "/projects",
  title: "Projects",
  className: "my-4",
  className2: "bg-light dark:bg-dark",
};
const mobileArticles = {
  href: "/",
  title: "Articles",
  className: "my-4",
  className2: "bg-light dark:bg-dark",
};

const navLinks = ["Home", "About", "Projects", "Contact"];

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // let tmp: "light" | "dark" = mode === "dark" ? "light" : "dark";
  const flexbetween = "flex items-center justify-between";

  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`${flexbetween} backdrop fixed z-30 w-full px-8 font-medium dark:bg-transparent dark:text-light md:px-32
      ${animateHeader && "shadow-lg backdrop-blur-lg backdrop-filter"}`}
    >
      {/* Mobile nav menu button */}
      <button
        className="flex flex-col items-center justify-center md:hidden"
        onClick={handleClick}
        aria-label="Open menu"
      >
        <span
          className={`block h-0.5 w-6 -translate-y-0.5 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-100 ease-out dark:bg-light ${
            isOpen && "invisible"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="text-2xl font-bold">Ben Tsui</div>

      <div
        className={`flex items-center py-10 duration-500 ease-in-out ${
          animateHeader && "py-5"
        }`}
      >
        {/* <nav className="hidden md:flex">
          <CustomLink {...home}>Home</CustomLink>
          <CustomLink {...about}>About</CustomLink>
          <CustomLink {...projects}>Projects</CustomLink>
          <CustomLink {...articles}>Articles</CustomLink>
        </nav> */}

        <nav className="hidden md:flex">
          {navLinks.map((link, item) => (
            <SmoothLink
              key={item}
              page={link}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
          {/* <SmoothLink
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <SmoothLink
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <SmoothLink
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <SmoothLink
            page="Articles"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          /> */}
        </nav>

        <nav className="flex">
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`ml-3 rounded-full p-1 `}
            aria-label="Dark light mode toggle"
          >
            {mode === "dark" ? <LightIcon /> : <MoonIcon />}
          </button>
          {/* <Link target="_blank" href="/">
          social
        </Link> */}
        </nav>
      </div>

      {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div> */}

      {/* Mobile menu*/}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "20%" }}
          animate={{ scale: 1, opacity: 1 }}
          className={`${flexbetween} absolute left-1/2 top-1/2 z-30 min-h-[70vh] min-w-[70vw]  flex-col rounded-lg bg-dark/90 py-32 backdrop-blur-sm dark:bg-light/90`}
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex flex-col items-center justify-center text-xl font-medium text-light dark:text-dark">
            {navLinks.map((link, item) => (
              <SmoothLink
                key={item}
                page={link}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMobileScreen
              />
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
