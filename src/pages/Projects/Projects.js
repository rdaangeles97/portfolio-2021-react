import React from "react";
import ProjectComponent from "../../components/Projects";

import { ProjectsSectionData } from "../../data/GlobalData";

import { motion } from "framer-motion";
import { animationThree } from "../../animation";

const Projects = () => {
  return (
    <motion.div initial="out" animate="end" out="out" variants={animationThree}>
      <ProjectComponent projectData={ProjectsSectionData} />
    </motion.div>
  );
};

export default Projects;
