import React from "react";
import About from "./about/About";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Navbar from "./navbar/Navbars";
import Projects from "./projects/Projects";

const HomePage = () => {
  return (
    <div>
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
