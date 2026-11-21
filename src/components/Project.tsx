import React from "react";
import "../assets/styles/Project.scss";
import { projects } from "../data/content";
import Icon from "./Icon";

function Project() {
  return (
    <section className="block" id="projects" aria-labelledby="projects-heading">
      <div className="wrap">
        <div className="block-head">
          <h2 id="projects-heading">Projects</h2>
          <p>Personal projects and published research.</p>
        </div>
        <ul className="projects">
          {projects.map((project) => (
            <li className="project" key={project.title}>
              <a href={project.href} target="_blank" rel="noreferrer">
                <div className="project-title"><h3>{project.title}</h3><Icon name="arrow" /></div>
                <div>
                  {project.subtitle && <p className="project-sub">{project.subtitle}</p>}
                  <p>{project.text}</p>
                  <span className="mono">{project.meta}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Project;
