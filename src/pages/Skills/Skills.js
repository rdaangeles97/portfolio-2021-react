import React from "react";
import SkillsComponent from "../../components/Skills";
import { SkillsSectionData } from "../../data/GlobalData";

import { motion } from "framer-motion";
import { skillsAnimation, transitionDuration } from "../../animation";

const Skills = () => {
  return (
    <motion.div
    initial='out'
    animate='in'
    exit='out'  
    variants={skillsAnimation}
    >
      <SkillsComponent skillsData={SkillsSectionData} />
    </motion.div>
  );
};

export default Skills;
