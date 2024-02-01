import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ShowCard from "../Showcard/ShowCard";
import axios from "axios";


const Home = () => {
    const [showsData,setShowsData] = useState()
    
    const fetchData = async()=>{
    

        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        //console.log(response.data)
        setShowsData(response.data)


    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      <Navbar />
      {
        showsData?.length > 0 && (
            <div className="w-[95%] lg:w-[80%] mx-auto">
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-x-24 lg:gap-y-0 mt-10 lg:mt-20">
          {
            showsData?.map((item,i)=>(
                <ShowCard key={i} id={item.show.id} imgUrl={item.show?.image?.medium} title={item?.show?.name} language={item?.show?.language}/>
            ))
          }
        </div>
      </div>
        )
      }
    </div>
  );
};

export default Home;
