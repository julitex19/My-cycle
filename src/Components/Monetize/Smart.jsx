import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

function Marketing() {
  return (
    <div className="relative w-[260px] h-[240px] bg-5760fd flex justify-center mb-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0"></div>

      <div className="relative z-10 w-[250px] h-[220px] bg-white rounded">
        <div>
          <img src="./Assets/smart.svg" alt="" className="w-[250px] rounded-t" />
        </div>

        <p className="leading-6 tracking-wide pb-4 text-sm w-[70%] p-2">
          Smart Business goals
        </p>

        <div className="flex items-center gap-4 p-2">
          <div className="flex gap-2 items-center">
            <MdOutlinePerson className="text-indigo-600 text-lg" />
            <p className="text-zinc-400 text-[10px] font-light">
              By Ope Adebayo
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineClockCircle className="text-indigo-600 text-lg" />
            <p className="text-zinc-400 text-[10px] font-extralight">
              1hr 15mins
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-[10px]">
        <img src="./Assets/smartdot.svg" alt="" />
      </div>
    </div>
  );
}

export default Marketing;
