import styled from "styled-components";
import { MainStyles } from "../../data/GlobalData";
import { NavLink as Link } from "react-router-dom";

export const AboutSection = styled.section`
  background-color: ${MainStyles.secondaryColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const AboutContent = styled.div`
  width: 90%;
  max-width: 50rem;
  text-align: center;
  img {
    width: 90%;
    max-width: 25rem;
  }

  p {
    font-family: ${MainStyles.secondaryFont};
    font-size: ${MainStyles.mobilePfontSize};
    line-height: 1.4rem;
    margin-top: 2rem;
    color: ${MainStyles.quarternaryColor};
    &:nth-child(odd) {
      margin-top: 1rem;
    }
  }

  @media screen and (min-width: 40em) {
    p {
      line-height: 1.8rem;
    }
  }
`;

export const BtnLink = styled(Link)`
  background-color: ${MainStyles.quinaryColor};
  height: 3rem;
  width: 15rem;
  margin: 2rem auto 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: ${MainStyles.quarternaryColor};
  font-family: ${MainStyles.secondaryFont};
  cursor: pointer;

  img {
    width: 100%;
    max-width: 1.2rem;
  }
`;
