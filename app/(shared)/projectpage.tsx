import Head from "next/head";
import React from "react";
import Layout from "../(home)/Layout";
import AnimatedText from "../(home)/AnimatedText";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GithubIcon } from "./icon";

import dp from "public/developer-pic-1.png";
import { motion } from "framer-motion";
import { SelectedPage } from "./types";

type Props = {};

const FeaturedProject = ({
  projectType,
  title,
  summary,
  img,
  link,
  githubLink,
}: {
  projectType: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  githubLink: string;
}) => {
  return (
    <article className="flex w-full items-center justify-center rounded-3xl border border-solid border-dark bg-light p-12 shadow-2xl dark:bg-dark dark:text-light">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          alt={title}
          placeholder="blur"
          src={img}
          style={{ objectFit: "cover" }}
          className="h-auto w-full"
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6">
        <span className="text-xl font-medium text-primary">{projectType}</span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-semibold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-1/7">
            <GithubIcon className="dark:fill-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark p-2 px-5 text-lg font-semibold text-light dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const NonFeaturedProject = ({
  projectType,
  title,
  summary,
  img,
  link,
  githubLink,
}: {
  projectType: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  githubLink: string;
}) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:bg-dark dark:text-light">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          alt={title}
          placeholder="blur"
          src={img}
          style={{ objectFit: "cover" }}
          className="h-auto w-full"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary">{projectType}</span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-semibold">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="mt-2 flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon className="dark:fill-light" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectEx = ({
  setSelectedPage,
}: {
  setSelectedPage: (value: SelectedPage) => void;
}) => {
  return (
      <motion.main
        id="projects"
        className="flex h-screen w-full min-h-screen flex-col items-center justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <Layout className="pt-16">
          {/* <AnimatedText text="Projects" className="mb-16" /> */}
          <div className="mt-24">Project</div>

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                projectType="Sample Project"
                title="React-Native-Firebase-Authentication"
                summary="A React Native app that uses Firebase Authentication to sign in and sign up users. It also uses the Firebase Realtime Database to store user data and send notifications to users. It also uses the Firebase Cloud Messaging to send push notifications to users. It also uses the Firebase Storage to store user profile pictures. It also uses the Firebase Firestore to store user data. It also uses the Firebase Functions to send push notifications to users. It also uses the Firebase Analytics to track user activity. It also uses"
                img={dp}
                link="https://github.com/mohamed-mohamed/React-Native-Firebase-Authentication"
                githubLink="https://github.com/mohamed-mohamed/React-Native-Firebase-Authentication"
              />
            </div>
            <div className="col-span-6">
              <NonFeaturedProject
                projectType="Sample Project"
                title="React-Native-Firebase-Authentication"
                summary="A React Native app that uses Firebase Authentication to sign in and sign up users. It also uses the Firebase Realtime Database to store user data and send notifications to users. It also uses the Firebase Cloud Messaging to send push notifications to users. It also uses the Firebase Storage to store user profile pictures. It also uses the Firebase Firestore to store user data. It also uses the Firebase Functions to send push notifications to users. It also uses the Firebase Analytics to track user activity. It also uses"
                img={dp}
                link="https://github.com/mohamed-mohamed/React-Native-Firebase-Authentication"
                githubLink="https://github.com/mohamed-mohamed/React-Native-Firebase-Authentication"
              />
            </div>
            <div className="col-span-6">
              <NonFeaturedProject
                projectType="Sample Project"
                title="React-Native-Firebase-Authentication"
                summary="A React Native app that uses Firebase Authentication to sign in and sign up users. It also uses the Firebase Realtime Database to store user data and send notifications to users. It also uses the Firebase Cloud Messaging to send push notifications to users. It also uses the Firebase Storage to store user profile pictures. It also uses the Firebase Firestore to store user data. It also uses the Firebase Functions to send push notifications to users. It also uses the Firebase Analytics to track user activity. It also uses"
                img={dp}
                link="https://github.com/mohamed-mohamed/React-Native-Firebase-Authentication"
                githubLink="https://github.com/mohamed-mohamed/React-Native-Firebase-Authentication"
              />
            </div>
            <div className="col-span-12"> sth</div>
          </div>
        </Layout>
      </motion.main>
  );
};

export default ProjectEx;
