import Link from "next/link";
import Image from "next/image";
import dp from "public/nubelson-fernandes-iE71-TMrrkE-unsplash.jpg";
import { DownIcon, LinkIcon } from "../(shared)/icon";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { SelectedPage } from "../(shared)/types";
import { motion } from "framer-motion";
import TechStack from "../(shared)/TechStack";

const HomePage = () => {
  return (
    <main
      className="flex min-h-screen w-full items-center bg-light text-dark dark:bg-dark dark:text-light"
      id="home"
    >
      <Layout className="mx-auto !pt-16">
        <motion.div
          className="mx-auto flex w-full flex-col-reverse items-center justify-between gap-4 md:flex-row xl:w-3/4"
          // onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <div className="flex flex-col items-center self-center md:w-1/2">
            <AnimatedText
              text="I am Ben Tsui"
              className="mt-4 !text-center !text-3xl sm:!text-5xl md:!text-left md:!text-6xl lg:!text-7xl xl:!text-8xl"
            />
            <motion.div
              className="mx-8 my-4 text-base font-medium md:mx-0"
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
              a frontend developer.
              {/* <div className="mt-2 flex flex-row items-center gap-2 self-center">
                Scroll down to learn more
                <motion.div
                  initial={{y:-5}}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  animate={{
                    y: 5,
                  }}
                >
                  <DownIcon />
                </motion.div>
              </div> */}
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
                <Link
                  href="/openresource/dummy.pdf"
                  target={"_blank"}
                  className="t flex items-center rounded-lg border border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark"
                >
                  Resume
                  <LinkIcon className="ml-2 w-6" />
                </Link>
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
              <TechStack />
            </motion.div>
          </div>
          <div className="mt-12 w-3/4 md:w-1/2">
            <Image
              alt="tech"
              placeholder="blur"
              src={dp}
              style={{ objectFit: "cover" }}
              className="h-full w-full bg-slate-500 rounded-full"
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
