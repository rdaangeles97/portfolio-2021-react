import styled from "styled-components";
import { MainStyles } from "../../data/GlobalData";
import { MdKeyboardArrowDown } from "react-icons/md";

export const HeroSection = styled.section`
  height: 100vh;
  background-color: ${MainStyles.primaryColor};
  color: ${MainStyles.quarternaryColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative; ;
`;

// Main hero Content
export const HeroContent = styled.div`
  /* padding: 0 2rem; */
  text-align: center;

  img {
    width: 90%;
  }

  h1 {
    font-size: ${MainStyles.smallFontSize};
  }
  p {
    font-family: ${MainStyles.secondaryFont};
    position: relative;
    &:before {
      content: "";
      background-color: ${MainStyles.tertiaryColor};
      position: absolute;
      bottom: -60%;
      left: 50%;
      transform: translateX(-50%);
      width: 6rem;
      height: 0.2rem;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 40em) {
    img {
      max-width: 40rem;
    }
  }
  @media screen and (min-width: 64em) {
    h1 {
      font-size: ${MainStyles.largeFontSize};
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

// Hero Arrow
export const HeroArrowLink = styled.div`
  position: absolute;
  bottom: 0;
`;
export const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 4rem;
`;

// Social Media
export const HeroSocialMediaWrapper = styled.div`
  display: none;

  @media screen and (min-width: 64em) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 25rem;
    width: 100%;
    max-width: 100rem;
    padding: 0 2rem;

    &::before {
      content: "";
      position: absolute;
      height: 100px;
      width: 2px;
      background-color: ${MainStyles.quarternaryColor};
      bottom: 0%;
      left: 2.8rem;
      z-index: 999;
    }
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  img {
    max-width: 1.7rem;
    margin-bottom: 2rem;
  }
`;
