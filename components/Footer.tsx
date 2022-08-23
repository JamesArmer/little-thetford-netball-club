import { FaFacebook } from "react-icons/fa";
import React from "react";

/**
 * Returns the page footer with text and icons
 * @return {React.FC} The footer function component
 */
export default function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        className="flex items-center justify-center gap-2"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Find us on <FaFacebook size={25} />
      </a>
    </footer>
  );
}
