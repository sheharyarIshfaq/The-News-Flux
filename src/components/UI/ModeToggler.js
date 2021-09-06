import React, { useContext } from "react";
import "./ModeToogler.css";
import { DarkModeContext } from "../../context/darkMode-context";

const ModeToggler = () => {
  const darkModeCtx = useContext(DarkModeContext);

  const checkBoxChangeHandler = () => {
    darkModeCtx.setDarkModeHandler();
  };

  return (
    <div className="toggler">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={checkBoxChangeHandler}
      />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
        <div className="ball" />
      </label>
    </div>
  );
};

export default ModeToggler;
