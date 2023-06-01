"use client"
import React from "react";
import Layout from "../(home)/Layout";
import Image from "next/image";
import dp from "public/remy_loz-3S0INpfREQc-unsplash.jpg";
import { SelectedPage } from "./types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const flexbetween = "flex items-center justify-between";

  return (
    <section
      className="mx-auto w-full bg-light dark:bg-dark dark:text-light"
      id="about"
    >
      <Layout className="mt-20 py-16">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onViewportEnter={() => setSelectedPage(SelectedPage.About)}
          viewport={{ once: true, amount: 0.8 }}
          className={`${flexbetween} mx-auto flex-col gap-12 px-0 md:flex-row md:px-12 lg:w-5/6 2xl:w-1/2`}
        >
          <div className="w-5/6 md:w-1/2">
            <Image
              alt="tech"
              placeholder="blur"
              src={dp}
              style={{ objectFit: "cover" }}
              className="h-auto w-full rounded-2xl bg-slate-500 shadow-lg"
              priority
              sizes="(max-width: 480px) 100vw,
              (max-width: 768px) 75vw,
              (max-width: 1060px) 50vw,
              50vw"
            />
          </div>
          <div className="mb-auto w-5/6 md:w-1/2">
            <div className="text-md font-extrabold">ABOUT ME</div>
            <div className="my-2 text-2xl font-bold">
              Passionate in Creating Pleasant Frontend Development & Design
            </div>
            <p className="text-lg">
              Ben Tsui is a fresh graduate passionate about frontend development
              and interface design. He will own a Bachelor of Engineering in
              Information Engineering from the City University of Hong Kong. His
              background in engineering and passion for frontend development
              make him eager to stay in tune with the latest technologies
              related to web development and interface design. He self-learned
              various technologies like Node.js, React, Typescript, Tailwind,
              and more. With passion and skills learned, he looks forward to
              building responsive, pleasant, and user-friendly websites with
              optimized performance.
            </p>
          </div>
        </motion.div>
        {/* <div className="mb-40" /> */}
        {/* <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.About)}
          className="grid w-full grid-cols-8 gap-16"
        >
          <div className="col-span-3 flex flex-col items-center justify-start">
            <h2 className="mb-4 text-lg font-bold text-dark/75 dark:text-light/75">
              about me
            </h2>
            <p className="my-4 font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
              tellus.
            </p>
          </div>
          <div
            className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
            dark:border-light dark:bg-dark"
          >
            <div className="absolute -right-4 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light"></div>
            <Image
              alt="tech"
              placeholder="blur"
              src={dp}
              style={{ objectFit: "cover" }}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">sth</span>
              <h2 className="text-xl font-medium text-dark/75 dark:text-light/75">
                sth
              </h2>
            </div>
          </div>
        </motion.div> */}
        {/* <Skills /> */}
        {/* <Experience /> */}
      </Layout>
    </section>
  );
};

export default About;
