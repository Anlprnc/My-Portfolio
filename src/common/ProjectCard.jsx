import React from 'react';

function ProjectCard({ desc, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <h3>{h3}</h3>
      <br />
      <p>{p}</p>
      <br />
      {/* <img className="hover" src={src} alt={`${h3} logo`} /> */}
      <p>{desc}</p>
    </a>
  );
}

export default ProjectCard;
