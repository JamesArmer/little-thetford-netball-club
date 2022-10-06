import { FaFacebook } from "react-icons/fa";
import React from "react";

/**
 * Returns the page footer with text and icons
 * @return {React.FC} The footer function component
 */
export default function Footer() {
  return (
    <footer className="flex h-24 border-t">
      <div className="flex-1">
        <p className="text-2xs sm:text-xs sm:absolute sm:bottom-3 sm:left-2">
          All media on this site is the sole property of Little Thetford Netball
          <br />
          Club and exclusive permissions must be obtained before use.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <a
          href="https://facebook.com"
          target="about:blank"
          rel="noopener noreferrer"
        >
          Find us on <FaFacebook size={25} className="inline-block" />
        </a>
      </div>
      <div className="flex-1">
        <p className="text-2xs sm:text-xs sm:absolute sm:bottom-3 sm:right-2">
          <br />© 2022 Little Thetford Netball Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
