import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className=" flex-1 flex-row min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-xl mt-3 py-2 px-5">
        <p className="text-2xl font-bold text-slate-700">
          zin<span className="text-red-600">AI</span>ous
        </p>
        <img
          className="w-11 border rounded-full"
          src={assets.user_icon}
          alt=""
        />
      </div>

      {/* main container */}
      <div className="w-[900px] m-auto">
        <div className="my-8 text-6xl font-semibold text-slate-500 p-5">
          <p className="mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-red-400 bg-clip-text text-transparent">
              Hello, Developer
            </span>
          </p>
          <p>How can I help you today? </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
          <div className="h-52 p-4  relative cursor-pointer bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-cyan-300">
            <p className="text-gray-600 font-semibold mt-1">
              Suggest beautiful places to visit on an upcoming road trip
            </p>
            <img
              className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
              src={assets.compass_icon}
              alt=""
            />
          </div>

          <div className="h-52 p-4  relative cursor-pointer bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-sky-400">
            <p className="text-gray-600 font-semibold mt-1">
              Briefly summarize this concept: startup product market fit
            </p>
            <img
              className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
              src={assets.bulb_icon}
              alt=""
            />
          </div>

          <div className="h-52 p-4  relative cursor-pointer  bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-purple-300">
            <p className="text-gray-600 font-semibold mt-1">
              Tell me the difference between React js and React native
            </p>
            <img
              className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
              src={assets.code_icon}
              alt=""
            />
          </div>

          <div className="h-52 p-4  relative cursor-pointer  bg-gray-200 hover:bg-slate-300 rounded-xl shadow-md shadow-red-300">
            <p className="text-gray-600 font-semibold mt-1">
              Brainstorm team bonding activities for our work retreat
            </p>
            <img
              className="w-9 p-1 absolute bg-slate-50 rounded-full bottom-2 right-2"
              src={assets.message_icon}
              alt=""
            />
          </div>
        </div>

        {/* Main Bottom */}
        <div className="absolute bottom-6 w-full max-w-[900px] px-5 mx-auto rounded-3xl">
          <div className="flex items-center justify-between gap-5 bg-gray-100 py-3 px-5 border rounded-[48px] shadow-sm shadow-red-400">
            <input
              className=" flex-1 bg-transparent border-none outline-none p-1 text-lg "
              type="text"
              placeholder="Start Messaging"
            />
            <div className="flex flex-row items-center justify-between gap-5">
              <img className="w-6" src={assets.gallery_icon} alt="" />
              <img className="w-6" src={assets.mic_icon} alt="" />
              <img className="w-6" src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="text-sm font-medium my-3 mt-4 text-gray-500 mx-auto text-center">
            zinAIous may display inaccurate info, including about people, so
            double-check its responses.Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;