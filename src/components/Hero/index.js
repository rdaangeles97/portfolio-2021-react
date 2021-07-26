import React from "react";
import {
  HeroSection,
  HeroContent,
  HeroArrowLink,
  ArrowDown,
  HeroSocialMediaWrapper,
  SocialMedia,
} from "./s_Hero";
import { Link } from "react-scroll";
const index = ({ heroContent, socMed }) => {
  return (
    <HeroSection>
      {/* Main content */}
      <HeroContent>
        {heroContent.map((item) => {
          return (
            <>
              <img src={item.codingSVG} alt="" />
              <h1>{item.tagline}</h1>
              <p>{item.subTagline}</p>
            </>
          );
        })}
      </HeroContent>

      {/* Arrow Down Button - Leads to About section */}
      <HeroArrowLink>
        <Link
          to="about-sect"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <ArrowDown />
        </Link>
      </HeroArrowLink>

      {/* Social Medias - Fixed */}
      <HeroSocialMediaWrapper>
        <SocialMedia>
          {socMed.map((socMedItem) => {
            return <img src={socMedItem.socMedSvg} alt="" />;
          })}
        </SocialMedia>
      </HeroSocialMediaWrapper>
    </HeroSection>
  );
};

export default index;
