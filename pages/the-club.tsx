import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import englandNetballPic from "../public/images/england_netball.jpg";
import teamPhotoPic from "../public/images/team_mini_prosecco_cropped.jpeg";

const TheClub: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          The Club
        </h1>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">The Club</h2>
          <p className="text-xl">
            Little Thetford Netball Club started in 2008 as a social netball
            club in Little Thetford when the new Multi-Use Games Area (MUGA) was
            first built in the village as part of improved leisure facilities.
            After a couple of years of social netball and friendly fixtures we
            joined the Cambridge and District Netball League.
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Winter League</h2>
          <p className="text-xl">
            Winter league matches are played at a central venue (currently
            Netherhall School in Cambridge) on a Saturday morning with around 16
            fixtures during the winter season (Oct-Apr). Please see link to{" "}
            <a href="https://cdnl.org" className="underline">
              CDNL.org
            </a>{" "}
            for more details.
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Summer League</h2>
          <p className="text-xl">
            Summer league matches are played at a central venue (currently
            Northstowe College to the west of Cambridge) on a Wednesday or
            Thursday evening with around 8 fixtures during the summer season
            (Apr - Jul)
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">England Netball</h2>
          <div className="flex flex-col">
            <p className="text-xl">
              In order to play in the leagues, players need to be registered
              with England Netball.
            </p>
            <Image
              src={englandNetballPic}
              alt="England Netball"
              layout="intrinsic"
              height={1080}
              width={1920}
              quality={100}
              className={"w-1/5"}
            />
          </div>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Umpires &amp; Coaches</h2>
          <p className="text-xl">
            Apart from playing, there are other opportunities to get involved in
            netball. If you are thinking about taking an umpiring or coaching
            qualification Little Thetford Netball Club can support you, help you
            obtain funding, find courses and most importantly get you that
            much-needed practice and experience.
            <br />
            <br />
            All players are encouraged to take an occasional turn at scoring
            matches after completing a short informal scorers course (on zoom).
            <br />
            <br />
            Little Thetford Netball Club expects all players to adhere to the
            England Netball Code of Conduct and treat captains, officials,
            coaches and fellow players with respect.
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Kit</h2>
          <p className="text-xl">
            We currently play in light blue/ dark blue/ white kit which is
            provided by the club. We would like to thank our supporters for
            their assistance with kit purchase:
          </p>
          <ul className="text-xl list-disc pl-10">
            <li>Paradise Sports Centre</li>
            <li>Waitrose</li>
            <li>Tesco</li>
          </ul>
        </div>
        <div className="relative leading-0 py-4">
          <Image
            src={teamPhotoPic}
            alt="Team Photo Prosecco"
            layout="intrinsic"
            height={525}
            width={1183}
            quality={100}
            className={"h-auto w-4/5"}
          />
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">What does it cost?</h2>
          <p className="text-xl">
            Training is £3 per session or £15 per month (first session is free)
            <br />
            England Netball - registration and payment is direct with them,
            £38.50 for 2022/23 season which includes insurance
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TheClub;
