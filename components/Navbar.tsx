import React from "react";
import Link from "next/link";
import ListItem from "./ListItem";
import { useRouter } from "next/router";

/**
 * Returns the page navbar
 * @return {JSX.Element} The navbar function component
 */
export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-black">
      <ul className="list-none overflow-hidden text-white">
        <ListItem>
          <Link href="/">
            <a className={router.pathname == "/" ? "text-blue-500" : ""}>
              Home
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/club-info">
            <a
              className={router.pathname == "/club-info" ? "text-blue-500" : ""}
            >
              Club Info
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/news">
            <a className={router.pathname == "/news" ? "text-blue-500" : ""}>
              News
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "text-blue-500" : ""}>
              Contact
            </a>
          </Link>
        </ListItem>
      </ul>
    </div>
  );
}
