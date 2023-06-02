import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";
import "./globals.css";
// import { Inter } from 'next/font/google'
import { Rubik } from "next/font/google";
import Script from "next/script";
import { useState } from "react";
import { SelectedPage } from "./(shared)/types";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Ben Tsui Personal Profile",
  description: "Ben Tsui Personal Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="dark:bg-dark">
        {children}
        <Footer />
      </body>
    </html>
  );
}
