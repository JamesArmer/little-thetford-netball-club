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
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
