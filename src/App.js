import { Route, Switch } from "react-router";
import "./App.css";
import Banner from "./components/UI/Banner";
import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer";
import banner from "./images/banner1.jpg";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode-context";

function App() {
  const darkModeCtx = useContext(DarkModeContext);
  const darkMode = darkModeCtx.darkMode;
  //it will change the meta theme color

  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  darkMode
    ? metaThemeColor.setAttribute("content", "#161616")
    : metaThemeColor.setAttribute("content", "#ce1212");

  const appClasses = `${darkMode ? "darkMode" : ""}`;

  return (
    <div className={appClasses}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Banner bannerImage={banner} />
          <NewsContainer category={"general"} />
        </Route>
        <Route path="/science" exact>
          <NewsContainer category={"science"} />
        </Route>
        <Route path="/health" exact>
          <NewsContainer category={"health"} />
        </Route>
        <Route path="/sports" exact>
          <NewsContainer category={"sports"} />
        </Route>
        <Route path="/technology" exact>
          <NewsContainer category={"technology"} />
        </Route>
        <Route path="/business" exact>
          <NewsContainer category={"business"} />
        </Route>
        <Route path="/entertainment" exact>
          <NewsContainer category={"entertainment"} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
