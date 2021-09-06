import React, { useState } from "react";

export const DarkModeContext = React.createContext({
  darkMode: false,
  setDarkModeHandler: () => {},
});

const DarkModeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const setDarkModeHandler = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, setDarkModeHandler: setDarkModeHandler }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
