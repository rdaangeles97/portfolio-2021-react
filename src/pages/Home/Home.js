import React from "react";
import Hero from "../../components/Hero/";
import About from "../../components/About/";

import { HeroData } from "../../data/Hero/d_Hero";
import { AboutData } from "../../data/About/d_About";
import { SocialMedia } from "../../data/GlobalData";
import { motion } from "framer-motion";
import { landingAnimation, transitionDuration } from "../../animation";
const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={landingAnimation}
      transition={transitionDuration}
    >
      <Hero heroContent={HeroData} socMed={SocialMedia} />
      <About aboutContent={AboutData} />
    </motion.div>
  );
};

export default Home;
