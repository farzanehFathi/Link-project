import { Link } from "react-router-dom";

const ImgContainer = ({
  width,
  url,
  img,
  alt,
  title,
  titleMY,
  description,
}) => {
  return (
    <div className={width}>
      <Link to={url}>
        <div className="relative w-fit">
          <div className="bg-gray-800 z-50 absolute right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-40 transition-opacity ease-in-out delay-150"></div>
          <img className="object-fill" src={img} alt={alt} />
        </div>
        <h3 className={titleMY}>{title}</h3>
        <p className="mb-5 md:mb-0 text-base lg:text-lg">{description}</p>
      </Link>
    </div>
  );
};

export default ImgContainer;
