import React from "react";
import { ProjectSection, ProjectHeader, ProjectContent } from "./s_Projects";
const index = ({ projectData }) => {
  return (
    <ProjectSection>
      <ProjectHeader>
        <h1>{projectData.projHeaderText}</h1>
        <div className="overlay"></div>
      </ProjectHeader>

      <ProjectContent></ProjectContent>
    </ProjectSection>
  );
};

export default index;
