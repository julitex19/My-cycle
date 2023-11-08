import React from 'react';

function Position() {
  return (
      <div className="xl:h-48 lg:h-44 hidden  bg-white absolute md:-bottom-[50px] lg:bottom-[4px] xl:-bottom-[50px] -bottom-[150px]  shadow-2xl rounded-2xl lg:left-40 lg:right-40 right-10 left-10 md:flex  items-center  flex-col-reverse lg:flex-row p-4 xl:flex-row ">
          
          
      <div className="lg:w-2/4 lg:ml-10 w-[100%] text-center ">
        <div className="xl:w-96 lg:w-72  mt-4">
          <p className="leading-loose tracking-wide text-zinc-600 lg:text-lg text-sm lg:text-left">
            Mycircle gives you the best platform solution connecting your
            business to the right community
          </p>
        </div>
        <div className="lg:flex lg:items-left">
          <button className="bg-blue-600 text-white lg:py-2  py-2 lg:px-10  px-10 lg:text-md text-lg rounded-xl hover:bg-blue-800 mt-4">
            get Started
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start xl:justify-start ">
        <div className="md:w-20 md:h-20 xl:w-24 xl:h-24  border-2 border-dashed border-blue-400 rounded-full  w-12 h-12 ml-2">
          <img
            src="./Assets/60b3a2a33046d 1.svg"
            alt=""
            className="w-14 h-12 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded-full p-2"
          />
        </div>

        <div className="md:w-20 md:h-20 xl:w-24 xl:h-24  border-2 border-dashed border-red-400 rounded-full  w-12 h-12 ml-2">
          <img
            src="./Assets/60b3a309b6cbf 1.svg"
            alt=""
            className="w-14 h-12 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded-full p-2"
          />
        </div>

        <div className="md:w-20 md:h-20 xl:w-24 xl:h-24 border-2 border-dashed border-red-400 rounded-full  w-12 h-12 ml-2">
          <img
            src="./Assets/60b3a3a1ec43e 1.svg"
            alt=""
            className="w-14 h-12 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded-full p-2"
          />
        </div>

        <div className="md:w-20 md:h-20 xl:w-24 xl:h-24 border-2 border-dashed border-gray-400 rounded-full   w-12 h-12 ml-2">
          <img
            src="./Assets/60b39f7b6fd76 1.svg"
            alt=""
            className="w-14 h-12 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded-full p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Position;
