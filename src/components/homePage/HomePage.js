import React from "react";
import About from "./about/About";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Navbar from "./navBarMenu/navBarMenu";
import Projects from "./projects/Projects";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;
