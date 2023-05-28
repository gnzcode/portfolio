import { useState, useEffect } from "react";
import Container from "./layout/container";
import Section from "./layout/section";
import Project from "./project";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      let newProjects = await fetch("/projects.json");
      newProjects = await newProjects.json();
      setProjects(newProjects);
    };
    getProjects();
  }, []);
  return (
    <Section
      id="projects"
      className="projects"
      title="My Projects"
      subtitle="What have I done?"
    >
      <Container>
        <div className="projects__container grid">
          {projects.map((project) => (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              github={project.github}
              website={project.website}
              tecnologies={project.tecnologies}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
