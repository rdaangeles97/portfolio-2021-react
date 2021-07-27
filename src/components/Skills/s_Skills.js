import styled from "styled-components";
import { MainStyles, SkillsSectionData } from "../../data/GlobalData";

export const SkillsSection = styled.section``;

// Header Section
export const SkillsHeader = styled.div`
  height: 50vh;
  background-image: url(${SkillsSectionData.skillsHeaderBg});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  color: ${MainStyles.quarternaryColor};

  .overlay {
    background-color: ${MainStyles.primaryColor};
    opacity: 0.7;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  h1 {
    position: absolute;
    z-index: 1;
    font-size: ${MainStyles.mediumFontSize};
  }

  @media screen and (min-width: 40em) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const SkillsContent = styled.div`
  color: ${MainStyles.quarternaryColor};
  background-color: ${MainStyles.secondaryColor};
  padding: 2rem 0;

  .skill-headline {
    text-align: center;
    color: black;
    position: relative;
    font-size: 1.2rem;

    &::before {
      content: "";
      border-radius: 10px;
      background-color: ${MainStyles.tertiaryColor};
      height: 0.2rem;
      width: 6rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 2rem;
  h2,
  p {
    font-family: ${MainStyles.secondaryFont};
    font-weight: 300;
  }

  p {
    margin-left: 1rem;
  }

  .skill-title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
      max-width: 1.2rem;
      margin-right: 1rem;
    }
  }
`;
