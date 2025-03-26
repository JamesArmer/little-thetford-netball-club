import { FaFacebook } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import logoPic from "../public/images/2025/logo_2025.jpg";

/**
 * Returns the page footer with text and icons
 * @return {React.FC} The footer function component
 */
export default function Footer() {
  return (
    <footer className="h-24 border-t flex items-end justify-between px-4">
      <div className="flex items-start justify-start w-1/3 sm:w-1/5 h-full">
        <Image
          src={logoPic}
          alt="Little Thetford Netball Club Logo"
          quality={100}
          className="h-full object-contain"
        />
      </div>
      <div className="flex items-center w-1/3 py-4 sm:py-8">
        <a
          href="https://facebook.com"
          target="about:blank"
          rel="noopener noreferrer"
          className="flex items-center text-xs sm:text-base"
        >
          Find us on <FaFacebook size={25} className="inline-block ml-2" />
        </a>
      </div>
      <div className="flex items-center">
        <p className="text-2xs sm:text-xs sm:absolute sm:bottom-2 sm:right-2">
          © 2025 Little Thetford Netball Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
