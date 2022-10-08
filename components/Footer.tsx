import { FaFacebook } from "react-icons/fa";
import React from "react";

/**
 * Returns the page footer with text and icons
 * @return {React.FC} The footer function component
 */
export default function Footer() {
  return (
    <footer className="h-24 border-t">
      <div className="w-full flex items-center justify-center py-4 sm:py-8">
        <a
          href="https://facebook.com"
          target="about:blank"
          rel="noopener noreferrer"
        >
          Find us on <FaFacebook size={25} className="inline-block" />
        </a>
      </div>
      <div className="w-full">
        <p className="text-2xs sm:text-xs sm:absolute sm:bottom-2 sm:right-2">
          <br />© 2022 Little Thetford Netball Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
