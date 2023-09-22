import React from "react";
import { BiSolidLockAlt } from "react-icons/bi";

function Interest() {
  const intDots = {
    position: "relative",
    backgroundImage: `url('./Assets/mentorShape.svg')`,
    backgroundSize: "950px",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="mb-72 bg-zinc-100" style={intDots}>
        <div>
          <h1 className="text-center text-5xl text-zinc-700 font-bold pt-6 pb-3 lg:pt-8 pb-6 lg:text-5xl lg:w-[50%] lg:ml-96">
            Have you got differing interests in your community?
          </h1>

          <p className="leading-6 tracking-wider font-light text-center text-zinc-500 text-[15px] pt-4 pb-8">
            Use groups to foster engagement of people with like minds.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-6">
          <div className="w-[250px] h-[220px] bg-white mb-8 ml-3 rounded text-center">
            <div className="flex items-center gap-3 ml-12">
              <div>
                <img src="./Assets/creative.svg" alt="" className="w-[150px]" />
              </div>
              <div className="w-7 h-7 rounded-full bg-stone-400 flex items-center justify-center">
                <BiSolidLockAlt className="text-white h-6" />
              </div>
            </div>
            <p className="leading-6 tracking-wide text-sm">Creative Brief</p>
            <p className="text-zinc-400 text-[10px] font-extralight mt-2 mb-2">
              198 Members
            </p>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-blue-800">
              Join Group
            </button>
          </div>

          <div className="w-[250px] h-[220px] bg-white mb-8 ml-3 rounded text-center">
           
              <div>
                <img src="./Assets/tinypeople.svg" alt="" className="w-[250px]" />
              </div>
            
           
            <p className="leading-6 tracking-wide text-sm">Creative Brief</p>
            <p className="text-zinc-400 text-[10px] font-extralight mt-2 mb-2">
              198 Members
            </p>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-blue-800">
              Join Group
            </button>
          </div>

          <div className="w-[250px] h-[220px] bg-white mb-8 ml-3 rounded text-center">
            <div className="flex items-center gap-8 ml-20">
              <div>
                <img src="./Assets/image9.svg" alt="" className="w-[50px]" />
              </div>
              <div className="w-7 h-7 rounded-full bg-stone-400 flex items-center justify-center">
                <BiSolidLockAlt className="text-white h-6" />
              </div>
            </div>
            <p className="leading-6 tracking-wide text-sm">Creative Brief</p>
            <p className="text-zinc-400 text-[10px] font-extralight mt-2 mb-2">
              198 Members
            </p>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-blue-800">
              Join Group
            </button>
          </div>

          <div className="w-[250px] h-[220px] bg-white mb-8 ml-3 rounded text-center">
              <div>
                <img src="./Assets/image8.svg" alt="" className="w-[250px]" />
              </div>
            <p className="leading-6 tracking-wide text-sm">Creative Brief</p>
            <p className="text-zinc-400 text-[10px] font-extralight mt-2 mb-2">
              198 Members
            </p>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-blue-800">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interest;
