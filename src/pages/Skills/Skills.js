import React from "react";
import SkillsComponent from "../../components/Skills";

import { SkillsSectionData } from "../../data/GlobalData";
const Skills = () => {
  return (
    <>
      <SkillsComponent skillsData={SkillsSectionData} />
    </>
  );
};

export default Skills;
