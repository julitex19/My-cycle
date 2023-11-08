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
        <div className="lg:flex lg:justify-center items-center ">
          <div className="xl:pl-32 pl-5">
            <h1 className="w-[100%] pt-6 mb-4 text-center  tracking-wide text-white text-5xl font-semibold lg:w-[55%] lg:text-start lg:text-6xl md:text-center">
              Monetize
            </h1>

            <p className="leading-6 tracking-wider font-extralight text-white text-center lg:w-full xl:w-10/12 xl:text-[18px] lg:text-start ">
              You can monetize your community, collect membership fees , sell
              courses and collect about any payment you want to collect.
            </p>

            <div className="flex justify-center lg:flex lg:justify-start">
              <button className="bg-white text-indigo-600 py-3 px-10 rounded-lg hover:bg-blue-600 hover:text-white flex items-center mt-10 mb-5">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:flex justify-center p-14 lg:ml-28 mt-5 lg:pl-4 gap-10 md:justify-evenly lg:justify-center">
            <div className="pb-16 flex justify-center items-center flex-col md:block">
              <Java />
              <Marketing />
            </div>
            <div className="flex justify-center items-center flex-col md:block">
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
