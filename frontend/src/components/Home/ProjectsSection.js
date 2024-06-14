import SectionsPattern from "./SectionsPattern";
import ImgContainer from "../ImgContainer";

import Fllesskabets from "../../imgs/Home/F+ªllesskabets.jpg";
import Norrtälje from "../../imgs/Home/Norrtälje.jpg";
import Skolekvartalet from "../../imgs/Home/Skolekvartalet.jpg";
import Stovnertårnet from "../../imgs/Home/Stovnertårnet.jpg";

const ProjectsSection = () => {
  const titleMY = "my-1 md:my-3";
  return (
    <div>
      <SectionsPattern
        content={
          <div className="flex flex-wrap w-11/12 text-2xl lg:text-3xl">
            <div className="w-full flex flex-wrap md:flex-nowrap gap-4 justify-between align-top pb-0 md:pb-20">
              <ImgContainer
                width={"w-11/12 md:w-8/12"}
                url={"#"}
                img={Skolekvartalet}
                alt={"Ski school quarter"}
                title={"Ski school quarter"}
                titleMY={titleMY}
                description={"Urban development in the heart of Ski"}
              />

              <ImgContainer
                width={"w-11/12 md:w-4/12"}
                url={"#"}
                img={Norrtälje}
                alt={"Norrtälje Mortuary"}
                title={"Norrtälje Mortuary"}
                titleMY={titleMY}
                description={"Tasteful design for a dignified farewell"}
              />
            </div>
            <div className="w-full flex flex-wrap justify-between align-top">
              <ImgContainer
                width={"w-11/12 md:w-4/12"}
                url={"#"}
                img={Fllesskabets}
                alt={"Fællesskabets Hus"}
                title={"Fællesskabets Hus"}
                titleMY={titleMY}
                description={"A space for care and domesticity"}
              />
              <ImgContainer
                width={"w-11/12 md:w-7/12"}
                url={"#"}
                img={Stovnertårnet}
                alt={"Stovnertårnet - Stovner tower"}
                title={"Stovnertårnet - Stovner tower"}
                titleMY={titleMY}
                description={" Norway's most inclusive landscape project"}
              />
            </div>
          </div>
        }
        title={"Projects"}
        url={"projects"}
      />
    </div>
  );
};

export default ProjectsSection;
