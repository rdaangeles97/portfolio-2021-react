import React from "react";
import $ from "jquery";

import {
  MainNav,
  MainNavWrapper,
  LogoLink,
  NavItems,
  NavLink,
  NavBurgerMenu,
  BurgerMenu,
} from "./s_Navbar";
import { MainStyles } from "../../data/GlobalData";


const index = () => {
  $(window).scroll(() => {
    if ($(window).scrollTop() === 0) {
      $(".main-nav").removeClass("scrolled");
    } else {
      $(".main-nav").addClass("scrolled");
    }
  });
  return (
    <MainNav className="main-nav">
      <MainNavWrapper>
        <LogoLink to="/">
          <img src={MainStyles.heroLogo} alt="" />
        </LogoLink>
        {/* On Desktop/Large Device */}

        <NavItems>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavItems>
        {/* On Mobile */}
        <NavBurgerMenu>
          <BurgerMenu />
        </NavBurgerMenu>
      </MainNavWrapper>
    </MainNav>
  );
};

export default index;
