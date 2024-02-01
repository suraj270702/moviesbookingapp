import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ imgUrl, title, id,language }) => {
  return (
    <Link to={`/single/${id}`}>
      <div className="w-full lg:w-[310px] h-full lg:h-[450px] relative z-10 rounded-lg">
        <img src={imgUrl} alt="poster" className="z-10" />
        <div className="absolute top-24">
          <div className="bg-gray-100 p-1 w-fit rounded-lg">
            <h1 className="text-md font-bold text-black ">{title}</h1>
          </div>
          <div className="bg-gray-100 p-1 w-fit rounded-lg mt-2">
            <h1 className="text-md font-bold text-black ">{language}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShowCard;
