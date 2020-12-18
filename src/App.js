import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import DetailsAbout from "./components/aboutPage/detailsAbout/DetailsAbout";
import AllProjects from "./components/projectsPage/allProjects/AllProjects";
import StarfieldAnimation from "react-starfield-animation";
import AllBolg from "./components/blogPage/allBlog/AllBolg";
import DetailsContact from "./components/contactPage/detailsContact/DetailsContact";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="ani-app">
      <StarfieldAnimation
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={DetailsAbout} />
          <Route exact path="/portfolio" component={AllProjects} />
          <Route exact path="/blog" component={AllBolg} />
          <Route exact path="/contact" component={DetailsContact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
