import Head from "next/head";
import Footer from "./Footer";
import React from "react";
import Header from "./Header";

/**
 * Returns the page layout wrapper with permanent head and footer
 * @return {React.FC} The layout function component
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Little Thetford Netball Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
