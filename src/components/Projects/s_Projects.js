import styled from "styled-components";

import { MainStyles, ProjectsSectionData } from "../../data/GlobalData";

export const ProjectSection = styled.section``;
export const ProjectHeader = styled.div`
  background-image: url(${ProjectsSectionData.projHeaderBg});
  height: 50vh;
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
export const ProjectContent = styled.div`
  color: ${MainStyles.quarternaryColor};
  background-color: ${MainStyles.secondaryColor};
  padding: 2rem 0;
  height: 50vh;
`;
