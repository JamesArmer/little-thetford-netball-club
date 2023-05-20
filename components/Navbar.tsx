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
          <Link
            href="/"
            scroll={false}
            className={
              router.pathname == "/" ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/the-club"
            scroll={false}
            className={
              router.pathname == "/the-club"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }
          >
            The Club
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/news"
            scroll={false}
            className={
              router.pathname == "/news"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }
          >
            News
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/fixtures"
            scroll={false}
            className={
              router.pathname == "/fixtures"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }
          >
            Fixtures
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/gallery"
            scroll={false}
            className={
              router.pathname == "/gallery"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }
          >
            Gallery
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/contact"
            scroll={false}
            className={
              router.pathname == "/contact"
                ? "text-blue-500"
                : "hover:text-blue-500"
            }
          >
            Contact
          </Link>
        </ListItem>
      </ul>
    </div>
  );
}
