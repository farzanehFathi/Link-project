import { useState } from "react";

const FormField = ({ fieldLabel, field, setField }) => {
  return (
    <div className="flex justify-between items-center w-4/12">
      <label htmlFor={field}> {fieldLabel}</label>
      <input
        className="border-b border-gray-500 w-80 outline-none"
        type="text"
        onChange={(e) => setField(e.target.value)}
        value={field}
      />
    </div>
  );
};

const ProjectsForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState("");
  const [grossArea, setGrossArea] = useState("");
  const [services, setServices] = useState("");
  const [sectors, setSectors] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      title,
      location,
      client,
      status,
      grossArea,
      services,
      sectors,
      description,
    };

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
      setClient("");
      setGrossArea("");
      setStatus("");
      setSectors("");
      setServices("");
      setError(null);
      console.log("new project added");
    }
  };

  return (
    <div className="w-11/12 max-w-1800px mx-auto">
      <form action="" method="POST" onSubmit={handleSubmit}>
        <h3 className="text-3xl">Add a new project</h3>
        <FormField
          fieldLabel={"Project Title"}
          field={title}
          setField={setTitle}
        />

        <FormField
          fieldLabel={"Location"}
          field={location}
          setField={setLocation}
        />

        <FormField fieldLabel={"Client"} field={client} setField={setClient} />

        <FormField fieldLabel={"Status"} field={status} setField={setStatus} />

        <FormField
          fieldLabel={"Gross Area"}
          field={grossArea}
          setField={setGrossArea}
        />

        <FormField
          fieldLabel={"Services"}
          field={services}
          setField={setServices}
        />

        <FormField
          fieldLabel={"Sectors"}
          field={sectors}
          setField={setSectors}
        />

        <FormField
          fieldLabel={"Description"}
          field={description}
          setField={setDescription}
        />

        <button type="submit">Add Project</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default ProjectsForm;
