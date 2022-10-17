import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import favicon from "../public/favicon.ico";

/**
 * Returns the next app
 * @return {JSX.Element} The MyApp function component
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Little Thetford Netball Club</title>
        <link rel="icon" href={favicon.src} />
        <meta
          name="description"
          content="Little Thetford Netball Club welcomes players of all abilities and
            are always delighted to have new members."
        />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Little Thetford Netball Club" />
        <meta
          name="og:description"
          content="Little Thetford Netball Club welcomes players of all abilities and
            are always delighted to have new members."
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
