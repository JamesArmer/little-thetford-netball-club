import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";
import Image from "next/image";
import shield1 from "../public/images/2025/shield-2025-1.jpg";
import shield2 from "../public/images/2025/shield-2025-2.jpg";
import shield3 from "../public/images/2025/shield-2025-3.jpg";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="w-11/12 sm:w-3/5 text-4xl text-center font-bold text-blue-500 py-8">
          Welcome to Little Thetford Netball Club!
        </h1>
        <div className="w-11/12 sm:w-3/5 py-4">
          <p className="text-xl">
            Little Thetford Netball Club welcomes players of all abilities and
            are always delighted to have new members. All our members are
            currently adults. We may welcome players aged 14+, please contact us
            for more information.
            <br />
            <br />
            We are a friendly club whose main aim is enjoyment and fitness.
            <br />
            <br />
            We compete as one team in the Cambridge and District Netball League
            - both in the Winter and Summer Leagues. Players are also very
            welcome to join us for training sessions only.
            <br />
            <br />
            We also arrange occasional friendly matches with other local clubs.
          </p>
        </div>
        <div className="w-11/12 sm:w-3/5 py-6">
          <h2 className="text-2xl font-bold leading-10">Training</h2>
          <ul className="text-xl list-disc sm:pl-10 pl-6 pt-4 leading-relaxed">
            <li>
              <b>Where</b> - Little Thetford Recreation Ground MUGA
            </li>
            <li>
              <b>When</b> - every Tuesday 18:30-20:00
            </li>
          </ul>
          <p className="text-xl pt-4">
            We welcome any new players - whether current players, returning to
            the sport, or entirely new to netball and would like to give it a
            go.
          </p>
        </div>
        <div className="sm:flex w-11/12 sm:w-3/5 py-4 sm:py-4">
          <div className="flex-auto sm:pr-2">
            <Image src={shield1} alt="Players with awards 1" quality={100} />
          </div>
          <div className="flex-auto py-2 sm:py-0">
            <Image src={shield2} alt="Players with awards 2" quality={100} />
          </div>
          <div className="flex-auto py-2 sm:pl-2 sm:py-0">
            <Image src={shield3} alt="Players with awards 3" quality={100} />
          </div>
        </div>
        <div className="sm:flex sm:w-3/5 w-11/12">
          <div className="py-4">
            <h2 className="text-2xl font-bold leading-10">Safety on court</h2>
            <p className="text-xl leading-relaxed">
              We want everyone to stay safe and would ask that anyone taking
              part in netball:
            </p>
            <ul className="text-xl list-disc sm:pl-10 pl-6 pt-2 leading-relaxed">
              <li>Wears suitable clothing and footwear</li>
              <li>Ties back long hair</li>
              <li>Removes all jewellery</li>
              <li>Ensures nails are short</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
