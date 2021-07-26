import React from "react";
import Hero from "../../components/Hero/";
import Navbar from "../../components/Navbar";

import { HeroData } from "../../data/Hero/d_Hero";
import { SocialMedia } from "../../data/GlobalData";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero heroContent={HeroData} socMed={SocialMedia} />
    </>
  );
};

export default Home;
