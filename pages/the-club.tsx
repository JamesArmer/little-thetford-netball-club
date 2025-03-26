import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import teamJumpingPic from "../public/images//2025/team_jumping_2025.jpg";
import trainingLandscapeGeorge from "../public/images/2025/team_trainging_george_2025.jpg";
import teamLandscapeGrass from "../public/images/2025/team_training_grass_2025.jpg";
import TMWFLogo from "../public/images/TMWF-site-icon.png";
import umpireTrainingPic from "../public/images//2025/umpire_training.jpg";
import kitSponsorTShirts from "../public/images/2025/kit_sponsor_t-shirts.jpg";
import whitingsSponsoredJackets from "../public/images/2025/whitings_sponsored_jackets.jpg";

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
              src={trainingLandscapeGeorge}
              alt="Portrait Training Photo Georgie Leaving"
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
          </p>
          <div className="flex justify-self-center w-11/12 sm:w-1/2 py-8">
            <Image
              src={umpireTrainingPic}
              alt="Umpire training"
              quality={100}
            />
          </div>
          <p className="text-xl">
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
            <li>Landmark Scaffolding</li>
            <li>Mark Smith Electrical Services</li>
            <li>Whitings Chartered Accountants LLP</li>
          </ul>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-1 pr-2">
            <Image
              src={teamLandscapeGrass}
              alt="Team Showing Off Their Kit"
              quality={100}
            />
          </div>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-1 pr-2">
            <Image
              src={kitSponsorTShirts}
              alt="Team Showing Off Their Sponsored T-Shirts"
              quality={100}
            />
          </div>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-1 pr-2">
            <Image
              src={whitingsSponsoredJackets}
              alt="Team Showing Off Their Sponsored Jackets"
              quality={100}
            />
          </div>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <p className="text-xl">
            New jackets kindly sponsored by Whitings Chartered Accountants LLP.
            We&apos;ve already had so many compliments on them and been so
            grateful to have them over the grey, miserable months. Massive thank
            you.
          </p>
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
            src={teamJumpingPic}
            alt="Team Photo Prosecco Celebration"
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
