"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type Props = {};

const Detail = ({
  position,
  company,
  companyLink,
  date,
  address,
  description,
}: {
  position: string;
  company: string;
  companyLink: string;
  date: string;
  address: string;
  description: string;
}) => {
  const ref = useRef(null);
  return (
    <li className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        // viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="text-3xl font-bold">
          {position}&nbsp;
          <a href={companyLink} target="_blank" rel="noreferrer">
            @{company}
          </a>
          <span>
            {date} | {address}
          </span>
          <p className="mt-4 text-lg">{description}</p>
        </h3>
      </motion.div>
    </li>
  );
};

const Experience = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold">
        Experience
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%] ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="bg-dark absolute left-8 top-0 h-full w-[4px] origin-top dark:bg-light"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
          <Detail
            position="sth"
            company="sth"
            companyLink="https://sth.com"
            date="sth"
            address="sth"
            description="sth"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
