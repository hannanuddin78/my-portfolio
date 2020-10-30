import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import DetailsAbout from "./components/aboutPage/detailsAbout/DetailsAbout";
import AllProjects from "./components/projectsPage/allProjects/AllProjects";
import StarfieldAnimation from "react-starfield-animation";

function App() {
  return (
    <>
      <StarfieldAnimation
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      />
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={DetailsAbout} />
            <Route path="/portfolio" component={AllProjects} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
