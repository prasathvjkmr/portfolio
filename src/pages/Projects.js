import React from "react";

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A Github deployed website built with React JS.',
    link: 'https://github.com/prasathvjkmr/portfolio'
  },
  {
    title: 'Bluekode Digital',
    description: 'Bluekode digital is a complete end-to-end digital agency that sorts out all your branding needs using the perfect blend of creativity, strategy, and innovation. With our super-talented team, we design experiences & transform challenges into successful brands, thus making your business stand out from the crowd.',
    link: 'https://bluekodedigital.com/#/'
  }
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
