import Head from "next/head";
import Footer from "./Footer";
import React from "react";
import Navbar from "./Navbar";

/**
 * Returns the page layout wrapper with permanent head and footer
 * @return {React.FC} The layout function component
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Little Thetford Netball Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="text-6xl font-bold">Little Thetford Netball Club</h1>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
