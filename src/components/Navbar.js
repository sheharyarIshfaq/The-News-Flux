import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import classes from "./Navbar.module.css";
import ModeToggler from "./UI/ModeToggler";
import { DarkModeContext } from "../context/darkMode-context";

const Navbar = () => {
  const darkModeCtx = useContext(DarkModeContext);

  const darkMode = darkModeCtx.darkMode;

  const [showNavbar, setShowNavbar] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar(true);
  };

  const hideNavbarHandler = () => {
    setShowNavbar(false);
  };

  const navbarClasses = `${classes["large-navbar"]} ${
    showNavbar ? classes["responsive"] : " "
  }`;

  const containerClasses = `${classes.container} ${
    darkMode ? classes.dark : ""
  }`;
  return (
    <div className={containerClasses}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img src={logo} alt="The News Flux" />
        </div>
        <div className={classes["responsive-navbar"]}>
          {!showNavbar && (
            <img
              src={hamburger}
              alt="Hamburger Icon"
              className={classes.hamburger}
              onClick={showNavbarHandler}
            />
          )}
          {showNavbar && (
            <img
              src={close}
              alt="Close Icon"
              className={classes.close}
              onClick={hideNavbarHandler}
            />
          )}
        </div>
        <div className={navbarClasses}>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to="/" exact>
                  General
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/science">
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/health">
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/sports">
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/technology">
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/business">
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={classes.buttons}>
            <ModeToggler />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
