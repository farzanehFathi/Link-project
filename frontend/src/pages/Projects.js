import { useEffect, useState } from "react";
import ProjectsForm from "../components/Projects/ProjectsForm";
import ProjectDetails from "../components/Projects/ProjectDetails";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");

      const json = await response.json();

      if (response.ok) {
        setProjects(json);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <ProjectDetails key={project._id} project={project} />
        ))}
      <ProjectsForm />
    </div>
  );
};

export default Projects;
