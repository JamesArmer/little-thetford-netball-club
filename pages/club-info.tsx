import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";

const ClubInfo: NextPage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-4">
          Club Information
        </h1>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">The Club</h2>
          <p className="text-xl">
            Little Thetford Netball Club in Cambridgeshire started in 20XX and
            is open to women aged 16 and over of all netballing abilities. We
            have teams that compete in the Cambridgeshire and District Netball
            League which is recognised by England Netball.
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">What does it cost?</h2>
          <p className="text-xl">
            The first couple of sessions are free to give you a chance to come
            along and take part before deciding whether you want to join the
            club. Membership fees are £10 per month. Membership allows you to
            attend training on a Wednesday evening and take part in any friendly
            matches or tournaments organised by the club. If you decide you
            would like to join a team and take part in competitive matches
            played at the weekend during the winter or summer season, there is
            an affiliation fee paid directly to England Netball which covers
            your insurance to take part.
          </p>
        </div>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Umpires and Coaches</h2>
          <p className="text-xl">
            Apart from playing, there are other opportunities to get involved in
            netball. If you are thinking about taking an umpiring or coaching
            qualification Little Thetford netball club can support you, help you
            obtain funding, find courses and most importantly get you that
            much-needed practice and experience.
            <br />
            Little Thetford netball club expects all players to adhere to the
            England Netball Code of Conduct and treat captains, officials,
            coaches and fellow players with respect.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ClubInfo;
