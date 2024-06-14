import { Link } from "react-router-dom";
import SectionsPattern from "./SectionsPattern";

const AboutSection = () => {
  return (
    <Link to={"/about"}>
      <div className="bg-branding1 group hover:text-branding3">
        <SectionsPattern
          content={
            <p className="text-3xl md:text-5xl lg:text-6xl w-8/12 ">
              LINK Arkitektur is a leading Scandinavian architectural business
              in Denmark, Norway and Sweden.
            </p>
          }
          title={"About LINK "}
          url={"/about"}
        />
      </div>
    </Link>
  );
};

export default AboutSection;
