import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-gray-100 border-b-2 sticky top-0 left-0 z-50">
      <div className="w-full lg:w-[80%] mx-auto py-5 flex items-center justify-between">
       <Link to="/"> <h1 className="text-xl lg:text-3xl font-bold">TvMaze</h1></Link>
        <Link to="/profile"><CiUser className="h-7 w-7" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
