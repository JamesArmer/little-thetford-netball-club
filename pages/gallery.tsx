import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";
import Gallery from "react-photo-gallery";

const GalleryPage: NextPage = () => {
  const photos = [
    {
      src: "/images/england_netball_event.jpeg",
      title: "Team trip to Birmingham Arena for the Netball Super League",
      width: 8,
      height: 3,
    },
    {
      src: "/images/team_mini_prosecco.jpeg",
      title:
        "Celebrations after the final league winning match at Netherhall March 2022",
      width: 8,
      height: 3,
    },
    {
      src: "/images/team_selfie.jpeg",
      title: "Cosy in our new team snoods, thanks Georgie.",
      width: 7,
      height: 2,
    },
    {
      src: "/images/team_sweets.jpeg",
      title: "Comic Relief tournament winners 2022",
      width: 8,
      height: 3,
    },
    {
      src: "/images/georgie_shield_presentation.jpeg",
      title:
        "Trophy presentation to club chair Georgie Heaton for winning division 5 of CDNL Winter League 2021/22",
      width: 5,
      height: 4,
    },
    {
      src: "/images/netball_cakes.jpeg",
      title: "Celebration cakes",
      width: 5,
      height: 4,
    },
    {
      src: "/images/georgie_gift.jpeg",
      title: "Georgie Heaton with her leaving gift",
      width: 5,
      height: 4,
    },
    {
      src: "/images/team_shield.jpeg",
      title: "Little Thetford squad with the Winter League 2021/22 trophy",
      width: 8,
      height: 3,
    },
    {
      src: "/images/summer_league_team.jpeg",
      title: "Summer League 2022 at Northstowe",
      width: 8,
      height: 3,
    },
  ];
  return (
    <Layout>
      <Gallery photos={photos} />
    </Layout>
  );
};

export default GalleryPage;
