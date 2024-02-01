import React, { useState } from "react";
import { useYourContext } from "../../ApplicationContext";
import Navbar from "../Navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const timesSlot = ["10:00-1:00", "2:00-5:00", "6:30-9:30"];
  const { showsData } = useYourContext();
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [phone, setPhoneNo] = useState();
  const [slot, setTimeSlot] = useState(timesSlot[0]);

  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const storedBookingData = localStorage.getItem("bookingsDetail");
  const initialBookingData = storedBookingData
    ? JSON.parse(storedBookingData)
    : [];

  const [bookingData, setBookingData] = useState(initialBookingData);
  const navigate = useNavigate();
  const bookingConfirm = () => {
    if (!name) {
      alert("please provide a name");
      return;
    }
    if (!phone || phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const updatedBookingData = [
      ...initialBookingData,
      {
        name,
        phone,
        numberOfTickets,
        date: startDate,
        timeSlot: slot,
        showName: showsData.name,
      },
    ];

    setBookingData(updatedBookingData);
    localStorage.setItem("bookingsDetail", JSON.stringify(updatedBookingData));
    navigate("/success");
  };

  //console.log(showsData);
  return (
    <div>
      <Navbar />
      <div className="mt-10 lg:mt-20">
        <div className="w-[95%] lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-5 lg:gap-y-0">
            <div className="bg-white shadow-lg rounded-lg p-3 lg:p-10 w-full h-full">
              <h1 className="text-center text-lg lg:text-4xl font-bold ">
                Booking Details
              </h1>
              <div className="mt-5">
                <img
                  src={showsData?.image?.original}
                  className="h-[400px] mx-auto"
                />
              </div>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mb-3 mt-4">
                <p className="text-lg  ">Name:</p>
                <p className="text-lg  ">{showsData?.name}</p>
              </div>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mb-3 mt-4">
                <p className="text-lg  ">Country:</p>
                <p className="text-lg  ">{showsData?.network?.country?.name}</p>
              </div>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mb-3 mt-4">
                <p className="text-lg  ">Language:</p>
                <p className="text-lg  ">{showsData?.language}</p>
              </div>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mb-3 mt-4">
                <p className="text-lg  ">Status:</p>
                <p className="text-lg  ">{showsData?.status}</p>
              </div>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mb-3 mt-4">
                <p className="text-lg  ">Type:</p>
                <p className="text-lg  ">{showsData?.type}</p>
              </div>
              <div className="w-full flex items-center gap-x-3  p-2 border rounded-lg mb-3 mt-4">
                <p className="text-lg  ">Genre:</p>
                <p className="text-lg  ">
                  {showsData?.genres?.map((item, i) =>
                    i === showsData?.length - 1 ? item : `${item}, `
                  )}
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full h-fit p-3 lg:p-10">
              <div className="mt-3 ">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full py-2 px-2 border mt-2 border-gray-600 text-gray-400"
                  required={true}
                />
              </div>
              <div className="mt-3 ">
                <label>Contact</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full py-2 px-2 border mt-2 border-gray-600 text-gray-400"
                  required={true}
                />
              </div>
              <div className="mt-3 ">
                <label>Select time slot</label>
                <select
                  className="w-full py-2 px-2 border mt-2 border-gray-600 text-gray-400"
                  value={slot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  
                >
                  {timesSlot.map((item, i) => (
                    <option key={i + 1} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-3 ">
                <label>Number of tickets</label>
                <select
                  className="w-full py-2 px-2 border mt-2 border-gray-600 text-gray-400"
                  value={numberOfTickets}
                  onChange={(e) => setNumberOfTickets(e.target.value)}
                  
                >
                  {Array(5)
                    .fill(" ")
                    .map((item, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                </select>
              </div>
              <div className="mt-3 flex flex-col gap-y-1">
                <label>Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full py-2 px-2 border mt-2 border-gray-600 text-gray-400"
                />
              </div>
              <div className="mt-6">
                <button
                  className="w-full text-lg  py-2 bg-gray-200 border hover:bg-gray-300 transition-all ease-in-out duration-300 font-bold"
                  onClick={bookingConfirm}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
