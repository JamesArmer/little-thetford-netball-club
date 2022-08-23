import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

/**
 * Returns the next app
 * @return {JSX.Element} The MyApp function component
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
