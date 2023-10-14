import React from "react";
import slider from "../helper/slider.json";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="projectContainer">
      {slider.map((projects) => (
        <ProjectCard key={projects.id} projects={projects} />
      ))}
    </div>
  );
}

export default Project;
