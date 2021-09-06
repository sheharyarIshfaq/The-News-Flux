import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode-context";
import "./Spinner.css";

const Spinner = () => {
  const darkModeCtx = useContext(DarkModeContext);
  const darkMode = darkModeCtx.darkMode;

  const spinnerClasses = darkMode
    ? "spinner-container darkSpinner"
    : "spinner-container";

  return (
    <div className={spinnerClasses}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
