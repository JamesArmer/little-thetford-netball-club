import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import englandNetballPic from "../public/images/england_netball_cropped.jpg";

const Fixtures: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          Fixtures
        </h1>
        <div className="w-4/5 sm:w-3/5 py-2">
          <h2 className="text-2xl font-bold leading-10">Winter League</h2>
          <p className="text-xl">
            Winter league matches are played at a central venue (currently
            Netherhall School in Cambridge) on a Saturday morning with around 16
            fixtures during the winter season (Oct-Apr).
            <br />
            <br />
            <a
              href="https://cdnl.org/winter-league-2022-23-fixtures-results"
              target="about:blank"
              className="underline leading-10"
            >
              Click here to visit the CDNL website for details
            </a>
            <br />
            <a
              href="https://en-gb.facebook.com/groups/cdnlnetball/"
              target="about:blank"
              className="underline leading-10"
            >
              Click here to visit the CDNL Facebook Page for details
            </a>
          </p>
        </div>
        <div className="w-4/5 sm:w-3/5 py-2">
          <h2 className="text-2xl font-bold leading-10">Summer League</h2>
          <p className="text-xl">
            Summer league matches are played at a central venue (currently
            Northstowe College to the west of Cambridge) on a Wednesday or
            Thursday evening with around 8 fixtures during the summer season
            (Apr - Jul)
            <br />
            <br />
            <a
              href="https://cdnl.org/summer-league-2022-fixtures-results"
              target="about:blank"
              className="underline leading-10"
            >
              Click here to visit the CDNL website for details
            </a>
            <br />
            <a
              href="https://en-gb.facebook.com/groups/cdnlnetball/"
              target="about:blank"
              className="underline leading-10"
            >
              Click here to visit the CDNL Facebook Page for details
            </a>
          </p>
        </div>
        <div className="w-4/5 sm:w-3/5 py-2">
          <h2 className="text-2xl font-bold leading-10">England Netball</h2>
          <div>
            <p className="text-xl">
              In order to play in the leagues, players need to be registered
              with England Netball.
            </p>
            <div className="m-auto py-6 w-4/5 sm:w-3/5">
              <Image
                src={englandNetballPic}
                alt="England Netball"
                layout="intrinsic"
                height={1080}
                width={1920}
                quality={100}
              />
            </div>
            <p className="text-xl">
              Further general information about playing netball can also be
              found on the website:{" "}
              <a
                href="https://www.englandnetball.co.uk/"
                target="about:blank"
                className="underline"
              >
                https://www.englandnetball.co.uk/
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fixtures;
