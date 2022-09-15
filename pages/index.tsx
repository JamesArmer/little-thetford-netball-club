import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";
import Image from "next/image";
import trainingPic from "../public/images/training_square_1.jpeg";
import ballPic from "../public/images/ball_and_net.jpeg";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="w-4/5 sm:w-3/5 text-4xl text-center font-bold text-blue-500 py-8">
          Welcome to Little Thetford Netball Club!
        </h1>
        <div className="w-4/5 sm:w-3/5 py-2">
          <p className="text-xl">
            Little Thetford Netball Club welcomes players of all abilities and
            are always delighted to have new members. We are mostly adult
            players (16+) but do welcome those slightly younger (please contact
            us for more information).
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
        <div className="sm:flex w-4/5 sm:w-3/5 py-6">
          <div className="sm:flex-1 sm:pr-4">
            <h2 className="text-2xl font-bold leading-10">Training</h2>
            <p className="text-xl">
              We train every Tuesday on the MUGA (Multi-Use Games Area) at the
              Little Thetford recreation ground from 18.30 to 20.00. Little
              Thetford village is located a couple of miles south of Ely in
              Cambridgeshire just off the A10. We are part of Little Thetford
              Sports and Social Club and have use of the changing room
              facilities.
              <br />
              <br />
              We welcome any new players - whether current players, returning to
              the sport, or entirely new to netball and would like to give it a
              go.
            </p>
          </div>
          <div className="sm:flex-1 sm:pl-4 m-auto pt-8 w-4/5 sm:w-2/5">
            <Image
              src={trainingPic}
              alt="Team Training"
              layout="intrinsic"
              height={1024}
              width={1024}
              quality={100}
            />
          </div>
        </div>
        <div className="w-4/5 sm:w-3/5 py-2">
          <h2 className="text-2xl font-bold leading-10">
            Other Information - safety on court
          </h2>
          <p className="text-xl">
            We want everyone to stay safe and would ask that anyone taking part
            in netball:
          </p>
          <ul className="text-xl list-disc pl-10">
            <li>Wears suitable clothing and footwear</li>
            <li>Ties back long hair</li>
            <li>Removes all jewellery</li>
            <li>Ensures nails are short</li>
          </ul>
        </div>
        <div className="m-auto py-6 w-4/5 sm:w-2/5">
          <Image
            src={ballPic}
            alt="Netball Goal"
            layout="intrinsic"
            height={1024}
            width={1024}
            quality={100}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
