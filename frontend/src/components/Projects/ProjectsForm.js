import { useState } from "react";

const ProjectsForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = { title, location, description };

    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLocation("");
      setDescription("");
      setError(null);
      console.log("new project added");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h3>Add a new project</h3>
      <label htmlFor="title">Prjoect title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="location">Prjoect location</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />

      <label htmlFor="description">Prjoect description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Add Project</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default ProjectsForm;
