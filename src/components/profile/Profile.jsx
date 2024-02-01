import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const bookingDetails = localStorage.getItem("bookingsDetail");
  const bookingsData = bookingDetails ? JSON.parse(bookingDetails) : [];
  return (
    <>
      <Navbar />
      <div className="mt-10 lg:mt-20">
        <div className="w-[95%] lg:w-[80%] mx-auto">
          {bookingsData && bookingsData.length > 0 ? (
            <div className="w-full  h-full p-3 lg:p-10 bg-white shadow-lg rounded-lg">
              <h1 className="text-center font-bold text-lg lg:text-2xl">
                Profile
              </h1>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mt-4">
                <p className="text-lg  ">Name:</p>
                <p className="text-lg  ">{bookingsData[0].name}</p>
              </div>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mt-4">
                <p className="text-lg  ">Contact:</p>
                <p className="text-lg  ">{bookingsData[0].phone}</p>
              </div>
              <div className="mt-10">
                {bookingsData?.map((item, i) => (
                  <div
                    className="w-full border p-3 lg:p-10 flex flex-col lg:flex-row gap-y-5 lg:gap-x-10 lg:gap-y-0 mb-5 rounded-lg"
                    key={i}
                  >
                    <div className="flex flex-row gap-x-5 border p-2 bg-gray-50">
                      <p className="text-lg  ">Show Name:</p>
                      <p className="text-lg  ">{item.showName}</p>
                    </div>
                    <div className="flex flex-row gap-x-5 border p-2 bg-gray-50">
                      <p className="text-lg  ">Show Date:</p>
                      <p className="text-lg  ">{item.date.substring(0, 10)}</p>
                    </div>
                    <div className="flex flex-row gap-x-5 border p-2 bg-gray-50">
                      <p className="text-lg  ">Show Timings:</p>
                      <p className="text-lg  ">{item.timeSlot}</p>
                    </div>
                    <div className="flex flex-row gap-x-5 border p-2 bg-gray-50">
                      <p className="text-lg  ">Number of Tickets:</p>
                      <p className="text-lg  ">{item.numberOfTickets}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full  h-full p-3 lg:p-10 bg-white shadow-lg rounded-lg">
              <Link to="/">
                <h1 className="text-center font-bold text-lg underline">
                  Book Now
                </h1>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
