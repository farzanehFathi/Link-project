import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import ProjectsForm from "../components/Projects/ProjectsForm";
import ProjectDetails from "../components/Projects/ProjectDetails";
import ProjectsSelection from "../components/Projects/ProjectsSelection";

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

  console.log(projects);
  return (
    <div className="w-11/12 max-w-1800px mx-auto">
      <span>
        <Link to="/">
          Home <i className="fa-solid fa-angle-right pr-1 text-sm"></i>
        </Link>
        Projects
      </span>

      <h2 className="text-6xl mt-12 mb-8">Projects</h2>

      {projects &&
        projects.map((project) => (
          <ProjectDetails key={project._id} project={project} />
        ))}
      <ProjectsForm />
      <ProjectsSelection allprojects={projects} />
    </div>
  );
};

export default Projects;
