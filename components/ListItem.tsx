import React from "react";

/**
 * Returns a list item for the navbar
 * @return {JSX.Element} The list item function component
 */
export default function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="float-left px-6 pt-6 text-xl">{children}</li>;
}
