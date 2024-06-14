import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import photos
import felixgerlach from "../../imgs/Home/felixgerlach.jpg";
import Lierstranda from "../../imgs/Home/Lierstranda.jpg";
import Spritfabriken from "../../imgs/Home/Spritfabriken.jpg";
import TheParkside from "../../imgs/Home/TheParkside.jpg";

const heroImgData = [
  {
    imgSrc: felixgerlach,
    projectTitle: "natrium",
    projectUrl: "#",
  },
  {
    imgSrc: Lierstranda,
    projectTitle: "Fjordbyen Lier og Drammen",
    projectUrl: "#",
  },
  {
    imgSrc: Spritfabriken,
    projectTitle: "Spritfabriken",
    projectUrl: "#",
  },
  {
    imgSrc: TheParkside,
    projectTitle: "The Parkside",
    projectUrl: "#",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImgData.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const currentImage = heroImgData[currentIndex];
  return (
    <div>
      <div className="relative h-fit">
        <Link to={currentImage.projectUrl}>
          <img
            src={currentImage.imgSrc}
            alt={currentImage.projectTitle}
            className="object-cover h-[calc(100vh-4rem)] w-full"
          />
        </Link>
        <Link to={currentImage.projectUrl}>
          <h2 className="absolute bottom-10 left-10 text-3xl text-white">
            {currentImage.projectTitle}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
