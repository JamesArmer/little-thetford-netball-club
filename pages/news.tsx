import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import georgieGiftPic from "../public/images/georgie_gift.jpeg";
import teamMiniProsecco2 from "../public/images/team_mini_prosecoo_2_cropped.jpeg";
import teamSummerLeaguePic from "../public/images/summer_league_team_cropped.jpeg";

const News: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          News
        </h1>
        <div className="w-4/5 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">
            Winter League 2021/22
          </h2>
          <p className="text-xl">
            We were delighted to win division 5 of the Cambridge and District
            Netball League (CDNL) Winter League and look forward to playing in
            division 4.
          </p>
        </div>
        <div className="flex w-5/5 sm:w-3/5 py-2 sm:py-4">
          <div className="flex-auto pr-2">
            <Image
              src={teamMiniProsecco2}
              alt="Winter League Celebration"
              layout="intrinsic"
              height={782}
              width={1257}
              quality={100}
            />
          </div>
        </div>
        <div className="w-4/5 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">Summer League 2022</h2>
          <p className="text-xl">
            This year we were placed in division C and were pleased to finish in
            the top half of the division, coming fourth.
          </p>
        </div>
        <div className="flex w-5/5 sm:w-3/5 py-2 sm:py-4">
          <div className="flex-auto pr-2">
            <Image
              src={teamSummerLeaguePic}
              alt="Summer League Team"
              layout="intrinsic"
              height={574}
              width={960}
              quality={100}
            />
          </div>
        </div>
        <div className="w-4/5 sm:w-3/5 py-6">
          <h2 className="text-2xl font-bold leading-10">Georgie Heaton</h2>
          <p className="text-xl">
            We owe Georgie a great debt of gratitude in setting up the club 14
            years ago. Georgie handed over her coaching role to Charlotte
            earlier in the year as she has now moved to Cornwall. Georgie keeps
            in touch and we hope to see her back at the club on her regular
            visits.
          </p>
        </div>
        <div className="relative leading-0 py-2">
          <Image
            src={georgieGiftPic}
            alt="Goergie Heaton Leaving Gift"
            title="Georgie Heaton with her leaving gift"
            layout="intrinsic"
            height={512}
            width={384}
            quality={100}
            className={"h-auto w-4/5"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default News;
