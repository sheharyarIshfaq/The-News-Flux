import React, { useContext } from "react";
import { DarkModeContext } from "../context/darkMode-context";

import "./Footer.css";

const Footer = () => {
  const darkModeCtx = useContext(DarkModeContext);
  const darkMode = darkModeCtx.darkMode;

  const footerClass = `${darkMode ? "dark" : ""}`;

  return (
    <footer className={footerClass}>
      <p>© Copyright @2020-2021 The News Flux</p>
    </footer>
  );
};

export default Footer;
