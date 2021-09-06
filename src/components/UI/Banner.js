import React from "react";

import classes from "./Banner.module.css";

const Banner = (props) => {
  return (
    <header className={classes.banner}>
      <img src={props.bannerImage} alt="Banner" />
    </header>
  );
};

export default Banner;
