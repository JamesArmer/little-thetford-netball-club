import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import teamPhotoPic from "../public/images/team_mini_prosecco_cropped.jpeg";
import trainingLandscapeGeorgeLeaving from "../public/images/team_george_leaving_cropped.jpeg";
import teamLandscapeGrass from "../public/images/team_grass_cropped.jpeg";
import TMWFLogo from "../public/images/TMWF-site-icon.png";

const TheClub: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          The Club
        </h1>
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">The Club</h2>
          <p className="text-xl">
            Little Thetford Netball Club started in 2008 as a social netball
            club in Little Thetford when the new Multi-Use Games Area (MUGA) was
            first built in the village as part of improved leisure facilities.
            Club members are now drawn from the wider surrounding area. After a
            couple of years of social netball and friendly fixtures we joined
            the Cambridge and District Netball League.
          </p>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-1 pr-2">
            <Image
              src={trainingLandscapeGeorgeLeaving}
              alt="Portrait Training Photo Georgie Leaving"
              height={1096}
              width={1199}
              quality={100}
            />
          </div>
        </div>
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">
            Umpires &amp; Coaches
          </h2>
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
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">Kit</h2>
          <p className="text-xl">
            We currently play in light blue/ dark blue/ white kit which is
            provided by the club. We would like to thank our supporters for
            their assistance with kit purchase:
          </p>
          <ul className="text-xl list-disc sm:pl-10 pl-6 pt-2 leading-relaxed">
            <li>Cambridge Scaffolding</li>
            <li>Mark Smith Electrical Services</li>
          </ul>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-1 pr-2">
            <Image
              src={teamLandscapeGrass}
              alt="Landscape Team Showing Off Their Kit"
              height={933}
              width={1236}
              quality={100}
            />
          </div>
        </div>
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">Charities</h2>
          <p className="text-xl">
            We are also proudly associated with The Malcolm Whales Foundation -
            taking steps to beat cancer.
          </p>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="m-auto w-11/12 sm:w-3/5">
            <a
              href="https://tmwf.co.uk/"
              target="about:blank"
              className="underline"
            >
              <Image
                src={TMWFLogo}
                alt="The Malcolm Whales Foundation logo"
                height={512}
                width={512}
                quality={100}
              />
            </a>
          </div>
        </div>
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">What does it cost?</h2>
          <ul className="text-xl list-disc sm:pl-10 pl-6 pt-2 leading-relaxed">
            <li>
              First session free and small monthly training contribution
              thereafter
            </li>
            <li>
              England Netball - registration and payment is direct with them;
              please see their website for current details: <br />
              <a
                href="https://www.englandnetball.co.uk/"
                target="about:blank"
                className="underline"
              >
                https://www.englandnetball.co.uk/
              </a>
            </li>
          </ul>
        </div>
        <div className="w-11/12 sm:w-3/5 py-4">
          <Image
            src={teamPhotoPic}
            alt="Team Photo Prosecco Celebration"
            height={525}
            width={1183}
            quality={100}
          />
        </div>
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">
            What can you do to help the club?
          </h2>
          <p className="text-xl">
            There are lots of ways to help and any volunteering is very welcome
            - please just ask.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TheClub;
