import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  const techCard = technologies.map((eachTech) => {
    return <span key={eachTech}>{eachTech}</span>
  })

  console.log(techCard)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {techCard}
      </div>
    </div>
  );
}

export default ProjectItem;
