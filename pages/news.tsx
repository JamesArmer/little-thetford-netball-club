import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";

const News: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          News
        </h1>
        <div className="w-3/5 py-2">
          <p className="text-xl">
            Walking Netball sessions start Tuesday 14th September 2021 at Ely
            College indoor hall. Aimed at ladies who want to continue playing
            netball but with the benefit of playing a slightly slower game,
            still keeping you fit in a competitive environment. If you feel
            regular netball is no longer for you, then come along and give it a
            go and stay connected to the sport!
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Our Supporters</h2>
          <p className="text-xl">
            Little Thetford Netball Club would like to acknowledge our recent
            supporters- Sport England, Mick George Sports Fund, Living Sport,
            Cambridgeshire Community Fund, Ridgeons, Skipton Building Society
            Grassroots Giving and The People&apos;s Postcode Lottery.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default News;
