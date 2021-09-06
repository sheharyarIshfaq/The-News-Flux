import React, { useContext } from "react";
import { DarkModeContext } from "../context/darkMode-context";
import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const darkModeCtx = useContext(DarkModeContext);
  const darkMode = darkModeCtx.darkMode;

  let publishedDate = props.date;
  const date = new Date(publishedDate).toUTCString();

  const containerClasses = `${classes.container} ${
    darkMode && classes.darkItem
  }`;

  return (
    <div className={containerClasses}>
      <div className={classes.left}>
        <div className={classes["news-source"]}>
          <h4>{props.source}</h4>
          <h5>{date}</h5>
        </div>
        <h2 className={classes.title}>{props.title}</h2>
        <p>{props.description}</p>
        <div className={classes["news-info"]}>
          <h5>Author: {props.author}</h5>
          <h5>Category: {props.category}</h5>
        </div>
        <div className={classes.button}>
          <button>
            <a href={props.url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </button>
        </div>
      </div>
      <div className={classes.right}>
        <img src={props.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default NewsItem;
