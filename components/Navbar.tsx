import React from "react";
import Link from "next/link";
import ListItem from "./ListItem";

/**
 * Returns the page navbar
 * @return {JSX.Element} The navbar function component
 */
export default function Navbar() {
  return (
    <div className="flex justify-center">
      <ul className="list-none overflow-hidden">
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/club-info">Club Info</Link>
        </ListItem>
        <ListItem>
          <Link href="/news">News</Link>
        </ListItem>
        <ListItem>
          <Link href="/contact">Contact</Link>
        </ListItem>
      </ul>
    </div>
  );
}
