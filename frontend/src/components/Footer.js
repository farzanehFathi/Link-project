import { useState } from "react";
import { Link } from "react-router-dom";

const SetToggle = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);
  const SetToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      {" "}
      <div className="md:hidden">
        {title}
        <span
          className="text-lg font-bold hover:cursor-pointer"
          onClick={SetToggle}
        >
          &#43;
        </span>
      </div>
      {isOpen ? (
        <div>{content}</div>
      ) : (
        <div className="hidden md:block">{content}</div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex my-100px w-11/12 mx-auto lg:text-xl">
      <div className="w-4/12 md:w-6/12 lg:w-4/12  ">
        <div className="hidden md:block">
          If you have any questions, please let us know!
        </div>

        <SetToggle
          title={"Offices "}
          content={
            <div className="mt-2 flex flex-col lg:flex-row">
              <div>
                {" "}
                <Link className="group mr-6 hover-effect">
                  {" "}
                  <span className="span-x-translate pr-2">&#8594;</span> Norway
                </Link>
              </div>
              <div>
                {" "}
                <Link className="group mr-6 hover-effect">
                  <span className="span-x-translate pr-2">&#8594;</span>
                  Sweden
                </Link>
              </div>
              <div>
                <Link className="group  hover-effect">
                  <span className="span-x-translate pr-2">&#8594;</span> Denmark
                </Link>
              </div>
            </div>
          }
        />
      </div>
      <div className="w-4/12 md:w-3/12 lg:w-4/12 pl-3">
        <div className="hidden md:block">Følg</div>
        <SetToggle
          title={"Følg "}
          content={
            <div className="mt-2 flex flex-col lg:flex-row md:visible">
              <div>
                <Link className="group mr-6 hover-effect">
                  {" "}
                  <span className="span-x-translate pr-2">&#8594;</span>Facebook
                </Link>
              </div>
              <div>
                {" "}
                <Link className="group mr-6 hover-effect">
                  {" "}
                  <span className="span-x-translate pr-2">&#8594;</span>
                  Instagram
                </Link>
              </div>
              <div>
                {" "}
                <Link className="group hover-effect">
                  {" "}
                  <span className="span-x-translate pr-2">&#8594;</span>
                  LinkedIn
                </Link>
              </div>
            </div>
          }
        />
      </div>
      <div>
        <div>
          <div className="hidden md:block"> Information</div>
          <SetToggle
            title={"Information "}
            content={
              <div className="mt-2 flex-col ">
                <div>
                  {" "}
                  <Link className="group hover-effect">
                    {" "}
                    <span className="span-x-translate pr-2">&#8594;</span>
                    Ethics and integrity
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link className="group hover-effect">
                    {" "}
                    <span className="span-x-translate pr-2">&#8594;</span>
                    Privacy policy
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
