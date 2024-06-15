const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
