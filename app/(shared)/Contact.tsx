"use client";
import { motion } from "framer-motion";
import Layout from "../(home)/Layout";
import { SelectedPage } from "./types";
import {
  CopyIcon,
  GithubIcon,
  LinkIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./icon";
import { useState } from "react";
import Link from "next/link";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({setSelectedPage}:Props) => {
  const [pressedCopied, setPressedCopied] = useState(false);
  return (
    <section
      className="mx-auto flex w-full flex-col items-center justify-center bg-light dark:bg-dark dark:text-light"
      id="contact"
    >
      <Layout className="mx-auto md:px-12 lg:w-5/6 2xl:w-3/4">
        <motion.h1
          className="my-12 text-4xl font-bold"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
          Contact Me
        </motion.h1>
        <div className="mx-4 my-8 flex flex-row items-center justify-start">
          <motion.a
            href="mailto:tsuiwaiwai2000@gmail.com"
            target={"_blank"}
            whileHover={{ scale: 1.2 }}
          >
            <MailIcon className="h-12 w-12" fill="currentColor" />
          </motion.a>
          <div className="mx-4 text-lg font-semibold">
            tsuiwaiwai2000@gmail.com
          </div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverEnd={() => setPressedCopied(false)}
            onClick={() => {
              navigator.clipboard.writeText("Copy this text to clipboard");
              setPressedCopied(true);
            }}
          >
            <CopyIcon className="mr-4 h-6 w-6" fill="currentColor" />
          </motion.button>
          {pressedCopied && <div>copied</div>}
        </div>
        <div className="mx-4 my-4 flex flex-row items-center justify-start">
          <motion.a
            href="tel:95616303"
            target={"_blank"}
            whileHover={{ scale: 1.2 }}
          >
            <PhoneIcon className="h-12 w-12" fill="currentColor" />
          </motion.a>
          <div className="ml-4 text-lg font-semibold">95616303</div>
        </div>
        <div className="mx-4 my-8 flex flex-row items-center justify-start">
          <motion.a
            href="https://github.com/avgrpg"
            target={"_blank"}
            whileHover={{ scale: 1.2 }}
          >
            <GithubIcon className="h-12 w-12" fill="currentColor" />
          </motion.a>
          <div className="ml-4 text-lg font-semibold">Visit Github</div>
        </div>
        <div className="mx-4 my-8 flex flex-row items-center justify-start">
          <motion.a
            href="https://github.com/avgrpg"
            target={"_blank"}
            whileHover={{ scale: 1.2 }}
          >
            <LinkedInIcon
              className="h-12 w-12 rounded-lg"
              fill="currentColor"
            />
          </motion.a>
          <div className="ml-4 text-lg font-semibold">Visit LinkedIn</div>
        </div>
        <div className="mx-4 my-8 flex flex-row items-center justify-start">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/openresource/dummy.pdf"
              target={"_blank"}
              className="flex rounded-lg bg-dark p-2.5 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark"
            >
              Resume
              <LinkIcon className="ml-2 w-6" />
            </Link>
          </motion.div>
        </div>
      </Layout>
    </section>
  );
};

export default Contact;
