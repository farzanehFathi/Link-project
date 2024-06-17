import ImgContainer from "../ImgContainer";

import Fllesskabets from "../../imgs/Home/F+ªllesskabets.jpg";
import Norrtälje from "../../imgs/Home/Norrtälje.jpg";
import Skolekvartalet from "../../imgs/Home/Skolekvartalet.jpg";
import Stovnertårnet from "../../imgs/Home/Stovnertårnet.jpg";

const ProjectDetails = ({ project }) => {
  const titleMY = "my-1 md:my-3";
  return (
    <div className="text-3xl">
      <ImgContainer
        width={"5/12"}
        url={"#"}
        img={Fllesskabets}
        alt={"Fllesskabets"}
        title={project.title}
        titleMY={titleMY}
        description={project.description}
      />
    </div>
  );
};

export default ProjectDetails;
