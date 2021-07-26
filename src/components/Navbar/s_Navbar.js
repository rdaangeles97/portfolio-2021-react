import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MainStyles } from "../../data/GlobalData";

export const MainNav = styled.nav`
  width: 100%;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 999;
  max-width: 100rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const LogoLink = styled(Link)`
  margin-top: 1rem;
  img {
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
`;
