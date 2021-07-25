import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: #434343;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .arrow-down {
    position: fixed;
    bottom: 1%;
    font-size: 4rem;
    color: white;
  }
`;
export const HeroContentWrapper = styled.div`
  border: 1px solid white;
  height: 100%;
  width: 100%;
`;

export const HeroContent = styled.div`
  font-family: "Rock Salt", cursive;
  color: white;
  font-weight: normal;
  font-size: 4rem;
  text-align: center;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    position: relative;
    &:after {
      border-radius: 10px;
      content: "";
      width: 200px;
      height: 5px;
      background-color: #ffd500;
      position: absolute;
      bottom: -45%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const HeroImg = styled.div`
  width: 100%;

  img {
    max-width: 40rem;
  }
`;

export const HeroSocMedWrapper = styled.div`
  position: fixed;
  left: 5%;
  bottom: 0;
  height: 40%;
  display: flex;

  .divider {
    background-color: white;
    width: 1px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const HeroSocMed = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 35px;
    margin-bottom: 3rem;
  }
`;
