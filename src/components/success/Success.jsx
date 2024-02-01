import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[95%] mx-auto flex items-center justify-center mt-10 lg:mt-52">
        <div className="bg-white p-3 lg:p-10 rounded-lg shadow-lg w-full lg:w-fit">
          <div className=" mx-auto">
          <img
            src="https://i.gifer.com/7efs.gif"
            className="lg:w-[250px] w-full h-[150px]"
          />
          </div>
          <h1 className=" text-center text-3xl font-bold">Booking Confirmed</h1>
          <div className="mt-5 flex items-center justify-center">
          <Link  to="/profile" className=" underline text-center w-full">Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
