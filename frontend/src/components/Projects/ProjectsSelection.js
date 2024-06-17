import { useState, useEffect } from "react";
import ImgContainer from "../ImgContainer";

import Fllesskabets from "../../imgs/Home/F+ªllesskabets.jpg";
import Norrtälje from "../../imgs/Home/Norrtälje.jpg";
import Skolekvartalet from "../../imgs/Home/Skolekvartalet.jpg";
import Stovnertårnet from "../../imgs/Home/Stovnertårnet.jpg";

const ProjectsSelection = ({ allprojects }) => {
  console.log("allprojectsSelection received allprojects:", allprojects);
  const allprojectselector = [3, 2, 4, 1];
  const titleMY = "my-1 md:my-3";
  return (
    <div className="text-3xl">
      <div className="w-full flex flex-wrap md:flex-nowrap gap-4 justify-between align-top pb-0 md:pb-20">
        <ImgContainer
          width={"w-11/12 md:w-8/12"}
          url={"#"}
          img={Skolekvartalet}
          alt={allprojects[0].title}
          title={allprojects[0].title}
          titleMY={titleMY}
          description={allprojects[0].description}
        />

        <ImgContainer
          width={"w-11/12 md:w-4/12"}
          url={"#"}
          img={Norrtälje}
          alt={allprojects[1].title}
          title={allprojects[1].title}
          titleMY={titleMY}
          description={allprojects[1].description}
        />
      </div>
      <div className="w-full flex flex-wrap justify-between align-top">
        <ImgContainer
          width={"w-11/12 md:w-4/12"}
          url={"#"}
          img={Fllesskabets}
          alt={allprojects[2].title}
          title={allprojects[2].title}
          titleMY={titleMY}
          description={allprojects[2].description}
        />
        <ImgContainer
          width={"w-11/12 md:w-7/12"}
          url={"#"}
          img={Stovnertårnet}
          alt={allprojects[3].title}
          title={allprojects[3].title}
          titleMY={titleMY}
          description={allprojects[3].description}
        />
      </div>
    </div>
  );
};

export default ProjectsSelection;
