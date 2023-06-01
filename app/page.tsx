"use client";
import Image from "next/image";
import Layout from "./(home)/Layout";
import dp from "public/developer-pic-1.png";
import AnimatedText from "./(home)/AnimatedText";
import Link from "next/link";
import { LinkIcon } from "./(shared)/icon";
import About from "./(about)/page";
import Navbar from "./(shared)/Navbar";
import HomePage from "./(home)/HomePage";
import { useState } from "react";
import { SelectedPage } from "./(shared)/types";
import Project from "./projects/page";
import Contact from "./contact/page";
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
      {/* <main className="flex min-h-screen w-full items-center bg-light text-dark dark:bg-dark dark:text-light">
        <Layout className="!pt-16">
          <div className="justifyw-between flex w-full flex-col-reverse items-center md:flex-row">
            <div className="flex flex-col items-center self-center md:w-1/2">
              <AnimatedText
                text="I am Someone"
                className="!text-center !text-3xl sm:!text-5xl md:!text-left md:!text-6xl lg:!text-7xl xl:!text-8xl"
              />
              <p className="mx-8 my-4 text-base font-medium md:mx-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus.
              </p>
              <div className="mt-2 flex items-center self-center md:self-start">
                <Link
                  href="/openresource/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center rounded-lg border border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
                dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light"
                >
                  Resume
                  <LinkIcon className="ml-2 w-6" />
                </Link>
                <Link
                  href="mailto:tsuiwaiwai2000@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium underline"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-3/4 md:w-1/2">
              <Image
                alt="tech"
                placeholder="blur"
                src={dp}
                style={{ objectFit: "cover" }}
                className="h-auto w-full"
                priority
                sizes="(max-width: 480px) 100vw,
              (max-width: 768px) 75vw,
              (max-width: 1060px) 50vw,
              50vw"
              />
            </div>
          </div>
        </Layout>
      </main> */}
      <HomePage />
      <About />
      <Project  />
      <Contact  />
      <Footer />
    </>
  );
}
