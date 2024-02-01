import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useYourContext } from "../../ApplicationContext";

const SingleShowPage = () => {
  const [showsMainData, setShowsMainData] = useState();
  const { id } = useParams();
  const {showsData,setShowsData} = useYourContext()
  const navigate = useNavigate()
  

  const fetch =async()=>{
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    console.log(response.data)
    setShowsMainData(response.data)
  }

  useEffect(()=>{
    fetch()
    console.log(showsMainData?.summary)
  },[setShowsMainData])


  const bookingHandler =()=>{
    setShowsData(showsMainData)
    navigate("/booking")
  }

  return (
    <>
      <Navbar />
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 mt-10 lg:mt-20">
          <div className="w-full h-full mx-auto">
            <img
              src={showsMainData?.image?.original}
              alt=""
              className=""
            />
            <div className="bg-green-700  w-full">
                <h1 className="font-bold text-center text-white text-2xl">{showsMainData?.name}</h1>
            </div>
          </div>
          <div className="p-4 shadow-lg bg-white rounded-lg w-full h-fit">
               <p className="text-sm">{showsMainData?.summary}</p>
               <button className="w-full border text-center font-bold bg-gray-50 py-2 rounded-lg mt-5 hover:bg-gray-200 transition-all ease-in-out duration-300" onClick={bookingHandler}>Book Now</button>
          </div>
          <div className="p-4  rounded-lg w-full bg-white shadow-lg">
              <h1 className="text-center font-bold">Show Info</h1>
              <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Name:</p>
                <p className="text-lg  ">{showsMainData?.name}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Language:</p>
                <p className="text-lg  ">{showsMainData?.language}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Country:</p>
                <p className="text-lg  ">{showsMainData?.network?.country?.name}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Status:</p>
                <p className="text-lg  ">{showsMainData?.status}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  "> Type:</p>
                <p className="text-lg  ">{showsMainData?.type}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Genre:</p>
                <p className="text-lg  ">{showsMainData?.genres?.map((item)=>item+",")}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Language:</p>
                <p className="text-lg  ">{showsMainData?.language}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Premiered:</p>
                <p className="text-lg  ">{showsMainData?.premiered}</p>
               </div>
               <div className="w-full flex items-center gap-x-3  p-2  rounded-lg mb-2">
                <p className="text-lg  ">Ended:</p>
                <p className="text-lg  ">{showsMainData?.ended}</p>
               </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleShowPage;
