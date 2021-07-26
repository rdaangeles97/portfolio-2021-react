import React from "react";
import { AboutSection, AboutContent, BtnLink } from "./s_About";

const Index = ({ aboutContent }) => {
  return (
    <AboutSection className="about-sect">
      <AboutContent>
        {aboutContent.map((contentItem) => {
          return (
            <>
              <img src={contentItem.myImg} alt="" />
              <p>{contentItem.myInfo.sentence1}</p>
              <p>{contentItem.myInfo.sentence2}</p>

              <BtnLink to="/about">
                {contentItem.btnText}
                <img src={contentItem.btnTriangle} alt="" />
              </BtnLink>
            </>
          );
        })}
      </AboutContent>
    </AboutSection>
  );
};

export default Index;
