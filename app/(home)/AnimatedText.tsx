"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  className: string;
  text: string;
};

const quote = {
  initial: {
    opacity: 0,
  },
  animated: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.17,
    },
  },
};

const spanWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const AnimatedText = (props: Props) => {
  return (
    <div className="w-full mx-auto py-0 flex items-center justify-center text-center overflow-hidden md:py-2">
      <motion.h1
        className={`inline-block w-full text-dark font-bold ${props.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl dark:text-light`}
        variants={quote}
        initial="initial"
        animate="animated"
      >
        {props.text.split(" ").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={spanWord}
            // initial="initial"
            // animate="animated"
          >
            {letter}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
