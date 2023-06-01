"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="bg-dark text-light flex cursor-pointer items-center rounded-full py-3 px-6 font-semibold shadow-black absolute"
      whileHover={{ scale: 1.1 }}
      initial={{ x:0, y:0}}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = (props: Props) => {
  return (
    <>
      <h2 className="mt-64 w-full text-center text-2xl font-bold">Skills</h2>
      <div className="relative flex h-screen w-full items-center justify-center rounded-full bg-slate-50">
        <motion.div
          className="bg-dark text-light flex cursor-pointer items-center rounded-full p-8 font-semibold shadow-black"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>

        <Skill name="React" x="-5vw" y="-10vh" />
      </div>
    </>
  );
};

export default Skills;
