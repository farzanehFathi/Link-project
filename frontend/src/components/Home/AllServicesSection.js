import SectionsPattern from "./SectionsPattern";

const AllServicesSection = () => {
  return (
    <div>
      <SectionsPattern
        content={
          <div className="text-3xl lg:text-5xl w-10/12 ">
            <h2 className="mb-12">All services</h2>
            <div className="flex  flex-wrap justify-between relative">
              <div className="group/showText w-10/12">
                <h2 className="mb-4  group hover:opacity-50 hover:translate-x-4 transform transition-transform duration-300">
                  <span className="span-x-translate">&#8594; </span>Architecture
                </h2>{" "}
                <p className="absolute top-0 right-0 text-lg lg:text-xl w-5/12 opacity-0 md:group-hover/showText:opacity-100 transition duration-300">
                  Good architecture creates the basis for a good life. Good
                  architecture contributes positively to sustainable social
                  development. Good architecture is pleasing to the eye and fine
                  for the mind.
                </p>
              </div>
              <div className="group/showText w-10/12">
                {" "}
                <h2 className="mb-4  group hover:opacity-50 hover:translate-x-4 transform transition-transform duration-300">
                  <span className="span-x-translate">&#8594; </span>Interior
                  Architecture
                </h2>
                <p className="absolute top-0 right-0 text-lg lg:text-xl w-5/12 opacity-0 md:group-hover/showText:opacity-100 transition duration-300">
                  In LINK, we have 50 interiou architects who are ambitious to
                  create an environment that inspires people's everyday lives
                  and contributes to a good quality of life. We facilitate
                  interaction between people and create spaces that nurture work
                  and learning, play and joy, concentration and inspiration.
                </p>
              </div>

              <div className="group/showText w-10/12 ">
                <h2 className="mb-4 group hover:opacity-50 hover:translate-x-4 transform transition-transform duration-300">
                  <span className="span-x-translate">&#8594; </span>Landscape
                </h2>
                <p className="absolute top-0 right-0 text-lg lg:text-xl w-5/12 opacity-0 md:group-hover/showText:opacity-100 transition duration-300">
                  LINK represents one of the foremost envieronments within
                  Landscapre Architecture in Scandinavia. In 2021 the studio was
                  honored as "Best Scandinavian Landscape Architectrue Office".
                  Our amibition is to create multifunctional, inclusive outdooer
                  spaces that enrich bilogical diversity and make the
                  environment more resistant to climage change.
                </p>
              </div>

              <div className="group/showText w-10/12 ">
                <h2 className="mb-4 group hover:opacity-50 hover:translate-x-4 transform transition-transform duration-300">
                  <span className="span-x-translate">&#8594; </span>
                  Sustainability
                </h2>
                <p className="absolute top-0 right-0 text-lg lg:text-xl w-5/12 opacity-0 md:group-hover/showText:opacity-100 transition duration-300">
                  Sustainability is no longer about making less bad choices, but
                  about maxmising the positive impact. We have analysed the
                  societal challenges that offer the greatest opportunity for us
                  to contribute to UN's global goals for sustianable
                  development, and defined how they can be applied in projects.
                </p>
              </div>

              <div className="group/showText w-10/12 ">
                <h2 className="mb-4 group hover:opacity-50 hover:translate-x-4 transform transition-transform duration-300">
                  <span className="span-x-translate">&#8594; </span>
                  Transformation
                </h2>{" "}
                <p className="absolute top-0 right-0 text-lg lg:text-xl w-5/12 opacity-0 md:group-hover/showText:opacity-100 transition duration-300">
                  Architecture is about transforming the context of cities,
                  places, or buildings to be preserved and filled with new life;
                  to convert existing buildings and areas to better utilization
                  and new functions. To give old buildings a boost and fill them
                  with new content. A change for the better.
                </p>
              </div>

              <div className="group/showText w-10/12 ">
                <h2 className="mb-4 group hover:opacity-50 hover:translate-x-4 transform transition-transform duration-300">
                  <span className="span-x-translate">&#8594; </span>
                  Digital practice
                </h2>{" "}
                <p className="absolute top-0 right-0 text-lg lg:text-xl w-5/12 opacity-0 md:group-hover/showText:opacity-100 transition duration-300">
                  LINK is at the forefront of digital development, enabling us
                  to create sustainable architecture from the early phases of a
                  project through to completion. The customers will thus achieve
                  full potential in any project, with the highest possible
                  profit and the lowest possible risk.
                </p>
              </div>
            </div>
          </div>
        }
        title={"Services"}
      />
    </div>
  );
};

export default AllServicesSection;
