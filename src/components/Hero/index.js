import React from "react";
import {
  HeroSection,
  HeroSocMedWrapper,
  HeroSocMed,
  HeroContent,
  HeroImg,
} from "./HeroStyles";
import codingSVG from "../../assets/coding.svg";
import linked_in from "../../assets/linkedin-app.svg";
import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";

const index = () => {
  return (
    <HeroSection>
      {/* Social Medias - Fixed */}
      <HeroSocMedWrapper>
        <HeroSocMed>
          <img src={linked_in} alt="" />
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={github} alt="" />
          <img src={twitter} alt="" />
        </HeroSocMed>

        <div className="divider"></div>
      </HeroSocMedWrapper>

      {/* Main Content - Centered */}
      <HeroContent>
        <HeroImg>
          <img src={codingSVG} alt="" srcset="" />
        </HeroImg>
        <h1>Hi, I am Nikko</h1>
        <p>Web Developer, Web Designer</p>
      </HeroContent>

      {/* Arrow - fixed - bottom */}

      <i class="fas fa-chevron-down arrow-down"></i>
    </HeroSection>
  );
};

export default index;
