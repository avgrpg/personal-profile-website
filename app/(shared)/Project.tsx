"use client";
import { useState } from "react";
import Layout from "../(home)/Layout";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import projectImage from "public/projects/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import HCI from "public/projects/HCI_App_design.jpg"
import RPS from "public/projects/RPS.jpg"
import PPW from "public/projects/Personal_Profile_Website.jpg"
import {
  ExpressJSIcon,
  FigmaIcon,
  MaterialUiIcon,
  MongoIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
  VSCodeIcon,
} from "./Icon";
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
    image: PPW,
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
    type: "Frontend Development",
  },
  {
    id: 2,
    name: "Remote Proctoring System for Online Programming Exam",
    description:
      "(A range score Final Year Project) This project aims to develop a system that allows students to take programming examinations in remote locations. The system is built as a VS Code extension to enhance accessibility. It includes underlying functions in monitoring and logging students' typing behavior, computation of students' suspicion scores, two frontend interfaces for students and teachers, respectively, and a backend server.",
    furtherDescription:
      "The system is split into three parts: extension core, frontend, and backend. The extension core part is developed with VS Code API, Node.js, and typescript. The frontend interfaces are built using React, Material UI, Redux, and Vite for bundling. For the backend server, Express.js is used to create APIs and provide server routes. MongoDB is used as the backend database. Various technologies like Bcrypt and Jsonwebtoken are also utilized for enhancing server security.",
    link: "https://github.com/avgrpg/RPS_v2",
    image: RPS,
    techStack: [
      {
        name: "VSCode",
        icon: <VSCodeIcon width={iconSize} height={iconSize} />,
        link: "https://code.visualstudio.com/",
      },
      {
        name: "NodeJS",
        icon: <NodeJSIcon fill="#4f983f" width={iconSize} height={iconSize} />,
        link: "https://nodejs.org/",
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
        name: "React",
        icon: <ReactIcon fill="#61dafb" width={iconSize} height={iconSize} />,
        link: "https://reactjs.org/",
      },
      {
        name: "MaterialUI",
        icon: (
          <MaterialUiIcon fill="#3178c6" width={iconSize} height={iconSize} />
        ),
        link: "https://material-ui.com/",
      },
      {
        name: "Redux",
        icon: <ReduxIcon fill="#3178c6" width={iconSize} height={iconSize} />,
        link: "https://redux.js.org/",
      },
      {
        name: "ExpressJS",
        icon: <ExpressJSIcon width={iconSize} height={iconSize} />,
        link: "https://expressjs.com/",
      },
      {
        name: "MongoDB",
        icon: <MongoIcon width={iconSize} height={iconSize} />,
        link: "https://www.mongodb.com/",
      },
    ],
    type: "Full Stack Development",
  },
  {
    id: 3,
    name: "Human Computer Interaction Course Project",
    description:
      "This project is a group project assigned in the Human-Computer Interaction course. I was given to use Figma to build a prototype for the mobile app idea within the group. The interface is built with interaction design principles learned in the course. It is aesthetically pleasant and user-friendly. ",
    furtherDescription:
      "The interface is implemented using Figma. Components are built to ensure scalability and reusability. Consistency is also maintained thought out the app design. The interface offers interactive feedback. It also permits easy reversal of actions, such as navigating the previous page. Various design principles like progressive disclosure are adopted in the design. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    link: "https://www.figma.com/proto/76mw9JRzJeRctAhRR5IiM5/Oi6Maai6Hap6?type=design&node-id=29-445&scaling=scale-down&page-id=0%3A1&starting-point-node-id=29%3A445",
    image: HCI,
    techStack: [
      {
        name: "Figma",
        icon: <FigmaIcon width={iconSize} height={iconSize} />,
        link: "https://figma.com/",
      },
    ],
    type: "Interface Design",
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
                    // type: "spring",
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
                      className="h-auto w-full rounded-md"
                    />
                  </div>

                  <div className="flex basis-2/3 flex-col p-5">
                    <h2 className="text-xl font-bold">{card.name}</h2>
                    <h3 className="my-1 self-start rounded-full bg-neutral-700 px-3 py-1 text-sm font-normal text-white dark:bg-neutral-200 dark:text-dark">
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
                      className="mt-4 flex flex-row gap-3"
                    />
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      className=" mt-4 rounded-md bg-blue-500 px-4 py-2 text-white md:self-start"
                    >
                      <a href={card.link} target="_blank">
                        Open Project
                      </a>
                    </motion.button> */}
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      className=" mt-4 rounded-md bg-blue-500 px-4 py-2 text-white md:self-start text-center"
                      href={card.link} target="_blank"
                    >
                        Open Project
                    </motion.a>
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
