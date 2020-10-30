import React from "react";
import About from "./about/About";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Navbar from "./navbar/Navbars";
import Projects from "./projects/Projects";
import StarfieldAnimation from "react-starfield-animation";

const HomePage = () => {
  return (
    <div>
      <StarfieldAnimation
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      />
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default HomePage;
