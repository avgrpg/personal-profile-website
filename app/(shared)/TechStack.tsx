import { useState } from "react";
import {
  FigmaIcon,
  JavascriptIcon,
  MaterialUiIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "./icon";
import { AnimatePresence, motion } from "framer-motion";
import js from "public/icons/js.svg"

type Props = {};
const iconSize = 30;

const iconList: Array<{
  name: string;
  icon: JSX.Element;
  link?: string;
}> = [
  {
    name: "Javascript",
    icon: <JavascriptIcon fill="#f0db4f" width={iconSize} height={iconSize} />,
    // icon: js
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

const TechStackComponent = ({
  name,
  icon,
  link,
  index,
  showTechDetail,
  setShowTechDetail,
  popOut,
  setpopOut,
}: {
  name: string;
  icon: JSX.Element;
  link?: string;
  index: number;
  showTechDetail: boolean;
  setShowTechDetail: (value: boolean) => void;
  popOut: boolean;
  setpopOut: (value: boolean) => void;
}) => {
  <motion.a
    href={link}
    target="_blank"
    onHoverStart={() => {
      setShowTechDetail(true);
      setpopOut(true);
    }}
    onHoverEnd={() => {
      setShowTechDetail(false);
      setpopOut(false);
    }}
    key={index}
    className="flex flex-row items-center gap-2"
  >
    <motion.div
      whileHover={{ y: -2 }}
      animate={popOut ? { x: 5 } : { x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    {showTechDetail && (
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 5 }}
        transition={{ duration: 0.5 }}
      >
        {name}
      </motion.div>
    )}
  </motion.a>;
};

const TechStack = (props: Props) => {
  const flexbetween = "flex items-center";
  const [popedout, setPopedout] = useState(false);
  const [showTechDetail, setShowTechDetail] = useState<Number | null>(null);

  return (
    <div className={`${flexbetween} mt-12 gap-4 md:self-start`}>
      {iconList.map(({ name, icon, link }, index) => {
        return (
          <motion.a
            href={link}
            target="_blank"
            onHoverStart={() => {
              setShowTechDetail(index);
              setPopedout(true);
            }}
            onHoverEnd={() => {
              setShowTechDetail(null);
              setPopedout(false);
            }}
            key={index}
            className="flex flex-row items-center gap-2"
          >
            <motion.div
              whileHover={{ y: -2 }}
              animate={popedout ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            {(showTechDetail === index) && (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ duration: 0.5 }}
              >
                {name}
              </motion.div>
            )}
          </motion.a>
        );
      })}
      {/* <motion.div
        whileHover={{ y: -2 }}
        onHoverStart={() => setShowTechDetail(true)}
        onHoverEnd={() => setShowTechDetail(false)}
      >
        <JavascriptIcon fill="#f0db4f" width={iconSize} height={iconSize} />
      </motion.div>
      <motion.div whileHover={{ y: -2 }}>
        <NodeJSIcon fill="#4f983f" width={iconSize} height={iconSize} />
      </motion.div>
      <motion.div whileHover={{ y: -2 }}>
        <ReactIcon fill="#61dafb" width={iconSize} height={iconSize} />
      </motion.div>
      <motion.div whileHover={{ y: -2 }}>
        <TypescriptIcon
          fill="#3178c6"
          width={iconSize - 3}
          height={iconSize - 3}
        />
      </motion.div>
      <motion.div whileHover={{ y: -2 }}>
        <TailwindIcon width={iconSize} height={iconSize} fill="#64B5F6" />
      </motion.div>
      <motion.div whileHover={{ y: -2 }}>
        <MaterialUiIcon fill="#3178c6" width={iconSize} height={iconSize} />
      </motion.div>
      <motion.div whileHover={{ y: -2 }}>
        <NextJSIcon width={iconSize} height={iconSize} />
      </motion.div>
      <motion.div whileHover={{ y: -2 }}>
        <FigmaIcon width={iconSize} height={iconSize} />
      </motion.div> */}

      {/*<div className={`${flexbetween} ml-2 gap-4`}>
        <div className="h-24 w-24">&nbsp;</div>
        <JavascriptIcon fill="#f0db4f" />
        <NodeJSIcon fill="#4f983f"/>
        <ReactIcon  fill="#61dafb"/>
        <TypescriptIcon fill="#3178c6"/>
      </div> */}
    </div>
  );
};

export default TechStack;
function setShowTechDetail(arg0: boolean) {
  throw new Error("Function not implemented.");
}
