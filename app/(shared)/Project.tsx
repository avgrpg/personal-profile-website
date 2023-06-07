"use client";
import { useState } from "react";
import Layout from "../(home)/Layout";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import projectImage from "public/projects/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import { NextJSIcon, ReactIcon, TailwindIcon, TypescriptIcon } from "./Icon";
import Link from "next/link";
import { SelectedPage } from "./types";
import TechStack from "./TechStack";

const iconSize = 25;
const cards = [
  {
    id: 1,
    name: "Personal Profile Website",
    description:
      "This project is a personal profile website built as a web version of my resume, presenting my skills, expertise, and experience in an informative manner. This website is responsive that works in different aspect ratios on various platforms, desktop or mobile. This website also has a dark-light mode toggling feature and interactive design.",
    furtherDescription:
      "This website is developed using React, Typescript, Next.js, and Tailwind CSS. Both of the four frameworks or libraries used are in the latest version. For instance, Next.js 13 was released about seven months ago, featuring breaking changes compared to the previous version. Building this website using the latest frameworks shows my willingness to learn and utilize newer technologies. ",
    link: "https://github.com/avgrpg/personal-profile-website",
    image: projectImage,
    techStack: [
      {
        name: "React",
        icon: <ReactIcon fill="#61dafb" width={iconSize} height={iconSize} />,
        link: "https://reactjs.org/",
      },
      {
        name: "Typesrcipt",
        icon: (
          <TypescriptIcon
            fill="#3178c6"
            width={iconSize - 2}
            height={iconSize - 2}
          />
        ),
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "NextJS",
        icon: <NextJSIcon width={iconSize} height={iconSize} />,
        link: "https://nextjs.org/",
      },
      {
        name: "TailwindCSS",
        icon: (
          <TailwindIcon fill="#64B5F6" width={iconSize} height={iconSize} />
        ),
        link: "https://tailwindcss.com/",
      },
    ],
    type: "Frontend Development"
  },
  {
    id: 2,
    name: "Remote Proctoring System for Online Programming Exam",
    description:
      "This project aims to build a remote proctoring system that allows students to take examinations in remote locations. The system is written as a VS Code extension. The system built can monitor candidates typing behavior and log it. It also logs candidates' clipboard history and checks if disallowed extensions are enabled, like AI autocompletion. The system then determines the cheating suspicion level and generates individual reports regarding cheating. The logs will be stored in an online database for future review",
    furtherDescription:
      "This project aims to build a remote proctoring system that allows students to take examinations in remote locations. The system is written as a VS Code extension. The system built can monitor candidates typing behavior and log it. It also logs candidates' clipboard history and checks if disallowed extensions are enabled, like AI autocompletion. The system then determines the cheating suspicion level and generates individual reports regarding cheating. The logs will be stored in an online database for future review. The systems also provides information about candidates' cheating suspicion scores, clipboard history, and enabled extensions. It additionally provides a code replay feature, similar to a video player.",
    link: "https://google.com",
    image: projectImage,
    techStack: [
      {
        name: "React",
        icon: <ReactIcon fill="#61dafb" width={iconSize} height={iconSize} />,
        link: "https://reactjs.org/",
      },
      {
        name: "NextJS",
        icon: <NextJSIcon width={iconSize} height={iconSize} />,
        link: "https://nextjs.org/",
      },
    ],
    type: "Full Stack Development"
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    furtherDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    link: "https://google.com",
    image: projectImage,
    techStack: [
      {
        name: "NextJS",
        icon: <NextJSIcon width={iconSize} height={iconSize} />,
        link: "https://nextjs.org/",
      },
    ],
    type: "Interface Design"
  },
];

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const cardVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const [selectedCard, setSelectedCard] = useState<Number | null>(null);
  return (
    <section
      className="mx-auto flex w-full bg-light dark:bg-dark dark:text-light"
      id="projects"
    >
      <Layout className="mx-auto md:px-12 lg:w-5/6 2xl:w-3/4">
        <motion.h1
          className="my-12 text-4xl font-bold"
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          Projects
        </motion.h1>
        <motion.div
          className="self-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariant}
        >
          {cards.map((card, index) => {
            return (
              <motion.div variants={childVariant} key={index}>
                <motion.div
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  onTap={() =>
                    setSelectedCard(index === selectedCard ? null : index)
                  }
                  className="my-6 cursor-pointer items-center justify-between rounded-md bg-neutral-200 shadow-lg dark:bg-neutral-800 md:flex"
                >
                  <div className="basis-1/3">
                    <Image
                      alt={card.name}
                      placeholder="blur"
                      src={card.image}
                      style={{ objectFit: "cover" }}
                      className="h-auto w-full rounded-xl"
                    />
                  </div>

                  <div className="flex basis-2/3 flex-col p-5">
                    <h2 className="text-xl font-bold">{card.name}</h2>
                    <h3 className="bg-neutral-700 text-white text-sm my-1 font-normal dark:bg-neutral-200 dark:text-dark py-1 px-3 rounded-full self-start">
                      {card.type}
                    </h3>
                    <p className="mt-1 text-base">{card.description}</p>
                    <AnimatePresence>
                      {selectedCard == index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          className="mt-2 text-base"
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: {
                                duration: 0.4,
                              },
                              opacity: {
                                duration: 0.25,
                              },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: {
                                duration: 0.4,
                              },
                              opacity: {
                                duration: 0.25,
                              },
                            },
                          }}
                        >
                          {card.furtherDescription}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <TechStack
                      iconList={card.techStack}
                      className="mt-4 flex flex-row gap-2"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className=" mt-4 rounded-md bg-blue-500 px-4 py-2 text-white md:self-start"
                    >
                      <Link href={card.link} target="_blank">
                        Open Project
                      </Link>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Layout>
    </section>
  );
};

export default Projects;
