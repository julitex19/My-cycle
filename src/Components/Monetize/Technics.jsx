import React from 'react'
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

function Technics() {
  return (
  <div className="w-[240px] h-[220px] bg-white mb-4 rounded ml-3">
  <div>
    <img src="./Assets/lights.svg" alt="" className="w-[250px]" />
  </div>
  <p className="leading-6 tracking-wide text-sm w-[80%] pl-2">
    The 12 principles of Java Development
  </p>

  <div className="flex items-center gap-4 pt-2 ">
    <div className="flex gap-2 items-center">
      <MdOutlinePerson className="text-indigo-600 text-lg" />
      <p className="text-zinc-400 text-[10px] font-light">By Ope Adebayo</p>
    </div>
    <div className="flex gap-2 items-center">
      <AiOutlineClockCircle className="text-indigo-600 text-lg" />
      <p className="text-zinc-400 text-[10px] font-extralight">1hr 15mins</p>
    </div>
  </div>
</div>
  )
}

export default Technics
