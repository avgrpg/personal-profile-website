"use client";
import About from "./(shared)/About";
import Navbar from "./(shared)/Navbar";
import HomePage from "./(home)/HomePage";
import { useState } from "react";
import { SelectedPage } from "./(shared)/types";
import Project from "./(shared)/Project";
import Contact from "./(shared)/Contact";
import Footer from "./(shared)/Footer";

const LayoutProp = {
  children: null,
  className: "",
};

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <HomePage setSelectedPage={setSelectedPage}/>
      <About  setSelectedPage={setSelectedPage} />
      <Project setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </>
  );
}
