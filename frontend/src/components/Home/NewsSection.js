import SectionsPattern from "./SectionsPattern";
import ImgContainer from "../ImgContainer";

import augmented from "../../imgs/Home/The-augmented-architect.jpg";
import hospital from "../../imgs/Home/lpgc3uwqt5yrtaamvgxc.jpg";

const NewsSection = () => {
  return (
    <div>
      <SectionsPattern
        content={
          <div className="flex flex-wrap md:flex-nowrap gap-x-24 w-9/12 font-bold text-base lg:text-lg">
            <ImgContainer
              width={"w-11/12 md:w-6/12"}
              url={"#"}
              img={augmented}
              alt={"LINK Arkitektur launches The Augmented Architect"}
              title={"LINK Arkitektur launches The Augmented Architect"}
              description={"28.02.2023"}
            />

            <ImgContainer
              width={"w-11/12 md:w-6/12"}
              url={"#"}
              img={hospital}
              alt={"LINK Arkitektur wins hospital project in southern Sweden"}
              title={"LINK Arkitektur wins hospital project in southern Sweden"}
              description={"11.01.2022"}
            />
          </div>
        }
        title={"News"}
        url={"news"}
      />
    </div>
  );
};

export default NewsSection;
