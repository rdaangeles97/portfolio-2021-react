import React from "react";
import {
  MainNav,
  LogoLink,
  NavItems,
  NavLink,
  NavBurgerMenu,
  BurgerMenu,
} from "./s_Navbar";
import { MainStyles } from "../../data/GlobalData";
const index = () => {
  return (
    <MainNav>
      <LogoLink to="/">
        <img src={MainStyles.heroLogo} alt="" />
      </LogoLink>
      {/* On Desktop/Large Device */}

      <NavItems>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavItems>
      {/* On Mobile */}
      <NavBurgerMenu className="show-for-small">
        <BurgerMenu />
      </NavBurgerMenu>
    </MainNav>
  );
};

export default index;
