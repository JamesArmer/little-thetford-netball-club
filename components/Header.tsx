import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import bannerPic from "../public/images/team_shield_cropped.jpeg";

/**
 * Returns the page header with text and icons
 * @return {React.FC} The header function component
 */
export default function Header() {
  return (
    <header>
      <div className="relative text-center text-white leading-0">
        <Image
          src={bannerPic}
          alt="Team Photo"
          height={568}
          width={1600}
          quality={100}
          className={"h-auto w-full"}
        />
        <h1 className="text-2xl sm:text-6xl font-bold absolute bottom-2 left-10 sm:bottom-4 sm:left-1/4">
          Little Thetford Netball Club
        </h1>
      </div>
      <Navbar />
    </header>
  );
}
