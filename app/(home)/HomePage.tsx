import Image from "next/image";
import dp from "public/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg";
import {
  FigmaIcon,
  JavascriptIcon,
  LinkIcon,
  MaterialUiIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/app/(shared)/Icon";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { SelectedPage } from "../(shared)/types";
import { motion } from "framer-motion";
import TechStack from "../(shared)/TechStack";
import { TypeAnimation } from "react-type-animation";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const iconSize = 30;
const iconList: Array<{
  name: string;
  icon: JSX.Element;
  link?: string;
}> = [
  {
    name: "Javascript",
    icon: <JavascriptIcon fill="#f0db4f" width={iconSize} height={iconSize} />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "NodeJS",
    icon: <NodeJSIcon fill="#4f983f" width={iconSize} height={iconSize} />,
    link: "https://nodejs.org/en/",
  },
  {
    name: "React",
    icon: <ReactIcon fill="#61dafb" width={iconSize} height={iconSize} />,
    link: "https://reactjs.org/",
  },
  {
    name: "Typescript",
    icon: (
      <TypescriptIcon
        fill="#3178c6"
        width={iconSize - 3}
        height={iconSize - 3}
      />
    ),
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "TailwindCSS",
    icon: <TailwindIcon fill="#64B5F6" width={iconSize} height={iconSize} />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "MaterialUI",
    icon: <MaterialUiIcon fill="#3178c6" width={iconSize} height={iconSize} />,
    link: "https://material-ui.com/",
  },
  {
    name: "NextJS",
    icon: <NextJSIcon width={iconSize} height={iconSize} />,
    link: "https://nextjs.org/",
  },
  {
    name: "Figma",
    icon: <FigmaIcon width={iconSize} height={iconSize} />,
    link: "https://www.figma.com/",
  },
];

const HomePage = ({ setSelectedPage }: Props) => {
  return (
    <main
      className="flex min-h-screen w-full items-center bg-light text-dark dark:bg-dark dark:text-light"
      id="home"
    >
      <Layout className="mx-auto !pt-16">
        <motion.div
          className="mx-auto flex w-full flex-col-reverse items-center justify-between gap-4 md:flex-row xl:w-3/4"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <div className="flex flex-col items-center self-center md:w-1/2">
            <AnimatedText
              text="I am Ben Tsui"
              className="mt-4 !text-center !text-3xl sm:!text-5xl md:!text-left md:!text-6xl lg:!text-7xl xl:!text-8xl"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="my-auto flex flex-row py-5 text-2xl font-semibold md:self-start"
            >
              <span>Also a&nbsp;</span>
              <div className="text-blue-600 dark:text-blue-500">
                <TypeAnimation
                  sequence={[
                    "",
                    500,
                    "Learner",
                    500,
                    "",
                    500,
                    "Coder",
                    500,
                    "",
                    500,
                    "Designer",
                    500,
                  ]}
                  repeat={Infinity}
                  speed={50}
                />
              </div>
            </motion.div>
            <motion.div
              className="mx-8 mb-4 text-center text-base font-medium md:mx-0 md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              I am Ben Tsui, a fresh graduate passionate about frontend
              development and interface design. I am looking forward to becoming
              a frontend developer. Scroll down to learn more!
            </motion.div>
            <motion.div
              className="mt-2 flex items-center self-center md:self-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <a
                  href="https://personal-profile-website.vercel.app/CV_Ben_Tsui.pdf"
                  target={"_blank"}
                  className="t flex items-center rounded-lg border border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark"
                >
                  Resume
                  <LinkIcon className="ml-2 w-6" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="self-center md:self-start"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <TechStack
                iconList={iconList}
                className="mt-12 flex items-center gap-4 md:self-start"
              />
            </motion.div>
          </div>
          <div className="mt-12 w-3/4 md:w-1/2">
            <Image
              alt="tech"
              placeholder="blur"
              src={dp}
              style={{ objectFit: "cover" }}
              className="h-full w-full rounded-full bg-slate-500"
              priority
              sizes="(max-width: 480px) 100vw,
              (max-width: 768px) 75vw,
              (max-width: 1060px) 50vw,
              50vw"
            />
          </div>
        </motion.div>
      </Layout>
    </main>
  );
};

export default HomePage;
