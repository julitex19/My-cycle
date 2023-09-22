import React from "react";
import Java from "./Java";
import Marketing from "./Marketing";
import Smart from "./Smart";
import Technics from "./Technics";

function Monetize() {
  const bgDots = {
    backgroundImage: `url('./Assets/monetizeshapes.svg')`,
    // backgroundRepeat: "no-repeat",
    backgroundSize: "950px",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        className=" bg-5760fd "
        style={bgDots}
      >
        <div className="lg:flex lg:justify-around items-center lg:ml-[110px] lg:mr-[90px]">
          <div>
            <h1 className="w-[100%] pt-6 lg:mt-28 mb-4 text-center  tracking-wide text-white text-5xl font-semibold lg:w-[55%] lg:text-start lg:text-6xl md:text-center">
              Monetize
            </h1>

            <p className="leading-6 tracking-wider font-extralight text-white text-center pl-3 pr-3 lg:w-[75%] text-[15px] lg:text-start lg: pl-0 pr-0 ">
              You can monetize your community, collect membership fees , sell
              courses and collect about any payment you want to collect.
            </p>

            <div className="flex justify-center lg:flex lg:justify-start">
              <button className="bg-white text-indigo-600 py-4 px-10 rounded-xl hover:bg-blue-600 hover:text-white flex items-center mt-10 px-20 mb-5">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:flex sm:justify-center ml-28 mt-5 pl-4 sm:gap-10 md:justify-evenly p-16 lg:justify-center">
            <div className="pb-16">
              <Java />
              <Marketing />
            </div>
            <div>
              <Smart />
              <Technics />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Monetize;
