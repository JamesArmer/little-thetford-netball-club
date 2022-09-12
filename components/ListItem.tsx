import React from "react";

/**
 * Returns a list item for the navbar
 * @return {JSX.Element} The list item function component
 */
export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="float-left px-8 sm:px-6 py-2 sm:py-4 text-lg sm:text-xl">
      {children}
    </li>
  );
}
