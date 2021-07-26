import React from "react";
import Hero from "../../components/Hero/";
import About from "../../components/About/";

import { HeroData } from "../../data/Hero/d_Hero";
import { AboutData } from "../../data/About/d_About";
import { SocialMedia } from "../../data/GlobalData";

const Home = () => {
  return (
    <>
      <Hero heroContent={HeroData} socMed={SocialMedia} />
      <About aboutContent={AboutData} />
    </>
  );
};

export default Home;
