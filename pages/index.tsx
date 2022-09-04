import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          Welcome to Little Thetford Netball Club!
        </h1>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">
            Little Thetford Netball Club wants you!
          </h2>
          <p className="text-xl">
            Little Thetford Netball Club welcomes new adult players (16+) of all
            abilities. We are a friendly club who offer the opportunity to play
            competitive netball within our teams who compete in the Cambridge
            and District Netball League. Although we have a competitive streak,
            we also appreciate keeping fit and having fun and a number of our
            members come along for training sessions only.
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Training</h2>
          <p className="text-xl">
            We train every Tuesday at the courts at Little Thetford sports
            facilities from 19:00 until 20:00. We welcome new players who may be
            returning to the sport, have moved to the area, complete newbies or
            those who are curious to give it a go. <br />
            <i>(Check out our &apos;News&apos; page for more information)</i>
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Training</h2>
          <p className="text-xl">
            Little Thetford Netball Club wants everybody to enjoy training and
            remain safe whilst doing so, we therefore ask all players to follow
            some basic netball etiquette.
            <br /> Please:
          </p>
          <ul className="text-xl list-disc pl-10">
            <li>Ensure your nails are short</li>
            <li>Remove all jewellery</li>
            <li>Tie long hair back</li>
            <li>Wear appropriate attire and footwear</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
