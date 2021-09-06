import React, { useState, useEffect, useContext } from "react";

import NewsItem from "./NewsItem";
import classes from "./NewsContainer.module.css";
import newsImage from "../images/banner2.jpg";
import Spinner from "./UI/Spinner";
import { DarkModeContext } from "../context/darkMode-context";

const API_KEY = "b64ade79be004ad895baf40066ce69b9";

const NewsContainer = (props) => {
  const darkModeCtx = useContext(DarkModeContext);
  const darkMode = darkModeCtx.darkMode;

  const [newsData, setNewsData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  //function to Capitilize the first Letter
  //it will be used to capitilize the first letter of the category we are getting on the props
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let category = !props.category ? "general" : props.category;
  category = capitalizeFirstLetter(category);

  const truncate = (string, length) => {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  useEffect(() => {
    setNewsData([]);
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${API_KEY}&pageSize=8&page=${page}`
      );
      const data = await response.json();

      setTotalPages(Math.ceil(data.totalResults / 8));
      setNewsData(data.articles);
      setIsLoading(false);
    };
    fetchNews();
  }, [page, category]);

  const nextPageHandler = () => {
    if (page === totalPages) {
      return;
    }
    setPage(page + 1);
  };

  const previousPageHanlder = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const newsContainerClasses = `${classes.container} ${
    darkMode && classes.dark
  }`;

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && newsData && newsData.length > 0 && (
        <div className={newsContainerClasses}>
          <h1 className={classes["main-title"]}>Top {category} Headlines</h1>
          <div className={classes.row}>
            {newsData.map((news) => (
              <NewsItem
                key={news.url}
                title={news.title}
                description={
                  news.description === null
                    ? ""
                    : truncate(news.description, 130)
                }
                source={news.source.name}
                date={news.publishedAt}
                author={news.author ? news.author : "Unknown"}
                category={category}
                imageUrl={!news.urlToImage ? newsImage : news.urlToImage}
                url={news.url}
              />
            ))}
          </div>
          <div className={classes.buttons}>
            <button
              onClick={previousPageHanlder}
              className={page === 1 ? classes.disabled : ""}
            >
              Previous
            </button>
            <button
              onClick={nextPageHandler}
              className={page === totalPages ? classes.disabled : ""}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {!isLoading && !newsData && (
        <div className={classes.notFoundContainer}>
          <p>No News Found!</p>
        </div>
      )}
    </>
  );
};

export default NewsContainer;
