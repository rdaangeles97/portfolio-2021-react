import React from "react";
import {
  SkillsContent,
  SkillsHeader,
  SkillsSection,
  SkillsWrapper,
  Skill,
} from "./s_Skills";
import { MainStyles } from "../../data/GlobalData";
const index = ({ skillsData }) => {
  return (
    <SkillsSection>
      <SkillsHeader>
        <h1>{skillsData.skillsHeaderText}</h1>
        <div className="overlay"></div>
      </SkillsHeader>

      {/* Content */}
      <SkillsContent>
        <p className="skill-headline">{skillsData.skillsContentHeadline}</p>
        <SkillsWrapper>
          {skillsData.skillsContentSkills.map((skill) => {
            return (
              <Skill>
                <div className="skill-title-wrapper">
                  <img src={skill.skillArrow} alt="" />
                  <h2>{skill.skill}</h2>
                </div>
                <p>{skill.skillContent}</p>
              </Skill>
            );
          })}
        </SkillsWrapper>
      </SkillsContent>
    </SkillsSection>
  );
};

export default index;
