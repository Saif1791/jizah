import React from "react";
import Header from "../components/Header";
import Tagline from "../components/Tagline";
import Footer from "../components/Footer";
import Project from "../components/Project";
function Projects() {
  return (
    <div>
      <Header />
      <Tagline Tagline="Lorem ipsim lorem ipsum" />
      <Project />
      <Footer />
    </div>
  );
}

export default Projects;
