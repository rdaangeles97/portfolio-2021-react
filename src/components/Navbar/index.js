import React from "react";
// import $ from "jquery";

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
  // $(window).scroll(() => {
  //   if ($(window).scrollTop() === 0) {
  //     $("nav").removeClass("scrolled");
  //   } else {
  //     $("nav").addClass("scrolled");
  //     $("burger-menu").addClass("scrolled");
  //   }
  // });
  return (
    <MainNav>
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
    </MainNav>
  );
};

export default index;
