import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const renderProj = projects.map((eachProj) => {
    return <ProjectItem key={eachProj.id} name={eachProj.name} about={eachProj.about} technologies={eachProj.technologies}/>
  })


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProj}</div>
    </div>
  );
}

export default ProjectList;
