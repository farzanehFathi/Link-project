import { Link } from "react-router-dom";

const SectionsPattern = ({ content, title, url }) => {
  return (
    <div className="w-11/12 max-w-1800px mx-auto">
      <div className="py-100px flex justify-between items-top">
        {content}
        <div className="text-3xl [writing-mode:vertical-lr]">
          <Link to={url}>
            <h2 className="group hover:opacity-50">
              {title}
              <span className="span-y-translate pt-1">&#8594;</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionsPattern;
