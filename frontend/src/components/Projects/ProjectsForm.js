import { useState } from "react";

const FormField = ({ fieldLabel, field, setField }) => {
  return (
    <div className="flex justify-between w-4/12 mb-3 items-baseline">
      <label className="text-lg" htmlFor={field}>
        {" "}
        {fieldLabel}
      </label>
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
  const [photo, setPhoto] = useState("");
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
      photo,
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
      setPhoto("");
      setSectors("");
      setServices("");
      setError(null);
      console.log("new project added");
    }
  };

  return (
    <div>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <h3 className="text-3xl mb-6">Add a new project</h3>

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

        <FormField fieldLabel={"Photo"} field={photo} setField={setPhoto} />

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

        <div className="w-4/12">
          <label className="block text-lg" htmlFor={description}>
            {" "}
            Description
          </label>
          <textarea
            className="w-full border-b border-gray-500 outline-none h-16"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <button
          type="submit"
          className="w-4/12 bg-branding4 text-white text-lg hover:bg-branding1 transition-colors ease-in-out duration-200"
        >
          Add Project
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default ProjectsForm;
