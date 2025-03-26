import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import React from "react";
import teamMiniProsecco2 from "../public/images/team_mini_prosecoo_2_cropped.jpeg";
import teamSummerLeaguePic from "../public/images/2025/summer_league_2025.jpg";

const News: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          News
        </h1>
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">Winter League</h2>
          <p className="text-xl">
            We currently play in division 3 of the Cambridge and District
            Netball League (CDNL) and are doing well.
            <br />
            <br />
            2023/24 season saw us placed third in division 3 - narrowly missing
            out on a play-off position by 1 point.
            <br />
            <br />
            We were delighted to win division 4 for the 2022/23 winter season
            with promotion to division 3.
            <br />
            <br />
            This comes on the back of winning division 5 of the League in
            2021/22 and promotion again was a fantastic achievement.
          </p>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-auto pr-2">
            <Image
              src={teamMiniProsecco2}
              alt="Winter League Celebration"
              height={782}
              width={1257}
              quality={100}
            />
          </div>
        </div>
        <div className="w-11/12 sm:w-3/5 py-4">
          <h2 className="text-2xl font-bold leading-10">Summer League</h2>
          <p className="text-xl">
            For the Summer League 2024 we played in division B and came second.
            <br />
            <br />
            2023 Summer League saw us placed third in division C.
          </p>
        </div>
        <div className="flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-auto">
            <Image
              src={teamSummerLeaguePic}
              alt="Summer League Team"
              quality={100}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
