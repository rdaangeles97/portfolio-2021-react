import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MainStyles } from "../../data/GlobalData";

// Main Nav
export const MainNav = styled.nav`
  width: 100%;
  background-color: transparent;
  position: fixed;
  z-index: 999;
  transition: all 0.3s ease-in;
  top: 0;

  &.scrolled {
    background-color: ${MainStyles.quarternaryColor};
    box-shadow: 0px 0.5rem 10px rgba(0, 0, 0, 0.2);

    img {
      max-width: 2.5rem;
    }

    a {
      color: ${MainStyles.primaryColor};
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;
// Main Nav Wrapper
export const MainNavWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  @media screen and (min-width: 40em) {
    width: 90%;
  }
  @media screen and (min-width: 64em) {
    width: 93%;
  }
`;

// Logo
export const LogoLink = styled(Link)`
  margin-top: 1rem;

  img {
    transition: max-width 0.3s ease-in;

    width: 100%;
    max-width: 3.5rem;
  }
`;

// NavLinks on Desktop/Large device
export const NavItems = styled.div`
  display: none;

  @media screen and (min-width: 64em) {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${MainStyles.secondaryFont};
  color: ${MainStyles.quarternaryColor};
  position: relative;

  &::before {
    transition: all 0.3s ease-in-out;
    content: "";
    background-color: ${MainStyles.secondaryColor};
    height: 0.1rem;
    width: 0;
    position: absolute;
    bottom: -10%;
    left: 0;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

// Burger Menu on Mobile
export const NavBurgerMenu = styled.div`
  right: 2%;
  display: block;
  @media screen and (min-width: 64em) {
    display: none;
  }
`;
export const BurgerMenu = styled(FaBars)`
  font-size: 2rem;
  color: white;

  &.scrolled {
    color: ${MainStyles.primaryColor};
  }
`;
