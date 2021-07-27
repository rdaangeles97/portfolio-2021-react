import HeroLogo from "../assets/my-logo-3-svg.svg";
import sm_github from "../assets/github.svg";
import sm_linked_in from "../assets/linkedin-app.svg";
import sm_fb from "../assets/fb.svg";
import sm_insta from "../assets/insta.svg";
import sm_twitter from "../assets/twitter.svg";

// Skills Section
import skillsHeaderBg from "../assets/skillsBg.jpg";
import skillArrow from "../assets/skill-arrow.png";
export const MainStyles = {
  primaryColor: "#434343",
  secondaryColor: "#F0A500",
  tertiaryColor: "#FFD500",
  quarternaryColor: "#FFFFFF",
  quinaryColor: "#CF7500",
  primaryFont: "'Rock Salt', cursive; sans-serif",
  secondaryFont: "'Montserrat', sans-serif;",
  heroLogo: HeroLogo,
  largeFontSize: "3.5rem",
  mediumFontSize: "2rem",
  smallFontSize: "3rem;",
  mobilePfontSize: "1rem",
};

export const SocialMedia = [
  {
    socMedSvg: sm_github,
  },
  {
    socMedSvg: sm_linked_in,
  },
  {
    socMedSvg: sm_fb,
  },
  {
    socMedSvg: sm_insta,
  },
  {
    socMedSvg: sm_twitter,
  },
];

export const SkillsSectionData = {
  skillsHeaderBg: skillsHeaderBg,
  skillsHeaderText: "What I can do.",
  skillsContentHeadline: "Skillsets:",
  skillsContentSkills: [
    {
      skillArrow: skillArrow,
      skill: "Web Development",
      skillContent:
        "In ut dapibus elit. Pellentesque nibh quam, convallis ac tincidunt at, ullamcorper at velit. Ut imperdiet pharetra turpis, eu ultrices risus eleifend nec.",
    },
    {
      skillArrow: skillArrow,
      skill: "Database",
      skillContent:
        "In ut dapibus elit. Pellentesque nibh quam, convallis ac tincidunt at, ullamcorper at velit. Ut imperdiet pharetra turpis, eu ultrices risus eleifend nec.",
    },
    {
      skillArrow: skillArrow,
      skill: "Adobe XD",
      skillContent:
        "In ut dapibus elit. Pellentesque nibh quam, convallis ac tincidunt at, ullamcorper at velit. Ut imperdiet pharetra turpis, eu ultrices risus eleifend nec.",
    },
    {
      skillArrow: skillArrow,
      skill: "Adobe Adter Effects",
      skillContent:
        "In ut dapibus elit. Pellentesque nibh quam, convallis ac tincidunt at, ullamcorper at velit. Ut imperdiet pharetra turpis, eu ultrices risus eleifend nec.",
    },
    {
      skillArrow: skillArrow,
      skill: "Adobe Illustrator",
      skillContent:
        "In ut dapibus elit. Pellentesque nibh quam, convallis ac tincidunt at, ullamcorper at velit. Ut imperdiet pharetra turpis, eu ultrices risus eleifend nec.",
    },
    {
      skillArrow: skillArrow,
      skill: "Adobe Photoshop",
      skillContent:
        "In ut dapibus elit. Pellentesque nibh quam, convallis ac tincidunt at, ullamcorper at velit. Ut imperdiet pharetra turpis, eu ultrices risus eleifend nec.",
    },
  ],
};
