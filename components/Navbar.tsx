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
          <Link href="/" scroll={false}>
            <a
              className={
                router.pathname == "/" ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              Home
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/the-club" scroll={false}>
            <a
              className={
                router.pathname == "/the-club"
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }
            >
              The Club
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/fixtures" scroll={false}>
            <a
              className={
                router.pathname == "/fixtures"
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }
            >
              Fixtures
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/gallery" scroll={false}>
            <a
              className={
                router.pathname == "/gallery"
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }
            >
              Gallery
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/news" scroll={false}>
            <a
              className={
                router.pathname == "/news"
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }
            >
              News
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contact" scroll={false}>
            <a
              className={
                router.pathname == "/contact"
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }
            >
              Contact
            </a>
          </Link>
        </ListItem>
      </ul>
    </div>
  );
}
