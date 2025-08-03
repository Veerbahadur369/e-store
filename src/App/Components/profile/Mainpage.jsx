import js from "@eslint/js";
import React from "react";
import RePieChart from "../ReactChart/Profile/RePieChart";
import ReAreaChart from "../ReactChart/Profile/ReAreaChart";

function Mainpage() {
  const [showData, setShowData] = React.useState([]);
  const data = JSON.parse(localStorage.getItem("userLogined"));
  console.log(data);
  return (
    <div className="flex flex-col justify-center w-full mt-10 text-white bg-[#242a2f]">
      <div>
        <h1 className="text-4xl text-center ">Profile</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
          className="w-40 h-w-40 mx-auto"
        />
        <h1 className="text-3xl text-center">{data.name}</h1>
        <h1 className="text-xl text-center">{data.email}</h1>
      </div>
      <div className="w-1/2 mx-auto shadow-2xl shadow-[#141517] p-4 bg-[#202427] rounded-2xl mt-10  hover:shadow-3xl hover:shadow-[#000000]">
        <h1 className="text-3xl text-center">User Info</h1>
        <div>
          <h1 className="text-2xl text-left">Name : {data.name}</h1>
          <h1 className="text-2xl text-left">Email : {data.email}</h1>
          <h1 className="text-2xl text-left">Password : {data.password}</h1>
        </div>
        <button className="bg-blue-500 text-left text-2xl rounded-md px-4 cursor-pointer">Edit</button>
      </div>
           <div className="flex  mb-4">
      <div className="w-60 h-60 mx-auto shadow-xl shadow-[#141517] p-4 bg-[#202427]  rounded-2xl mt-10 hover:shadow-3xl hover:shadow-[#000000]">
              <RePieChart />
      </div>
      <div className="w-1/2 h-60 mx-auto   shadow-xl  shadow-[#141517] p-4 bg-[#202427]  rounded-2xl mt-10 hover:shadow-3xl hover:shadow-[#000000]">
              <ReAreaChart className="w-full h-full m-0" />
      </div>
     
      </div>
    </div>
  );
}

export default Mainpage;
