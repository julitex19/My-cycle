import React from 'react';

function Position() {
  return (
      <div className="lg:h-48 bg-white absolute lg:-bottom-[50px] -bottom-[150px]  shadow-2xl rounded-2xl lg:left-40 lg:right-40 right-10 left-10 flex  items-center  flex-col-reverse lg:flex-row p-4 xl:flex-row ">
          
          
      <div className="lg:w-2/4 lg:ml-10 w-[100%] text-center ">
        <div className="lg:w-80 mt-4">
          <p className="leading-loose tracking-wide text-zinc-600 lg:text-lg text-sm lg:text-left">
            Mycircle gives you the best platform solution connecting your
            business to the right community
          </p>
        </div>
        <div className="lg:flex lg:items-left">
          <button className="bg-blue-600 text-white lg:py-3  py-4 lg:px-3  px-16 lg:text-md text-lg rounded-xl hover:bg-blue-800 mt-4">
            get Started
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start xl:justify-start lg:pr-2">
        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-blue-400 rounded-full lg:ml-6 w-16 h-16 ml-4">
          <img
            src="./Assets/60b3a2a33046d 1.svg"
            alt=""
            className="w-16 h-16 lg:w-24 lg:h-24 rounded-full p-2"
          />
        </div>

        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-red-400 rounded-full lg:ml-6 w-16 h-16 ml-4">
          <img
            src="./Assets/60b3a309b6cbf 1.svg"
            alt=""
            className="w-16 h-16 lg:w-24 lg:h-24 rounded-full p-2"
          />
        </div>

        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-red-400 rounded-full lg:ml-6 w-16 h-16 ml-4">
          <img
            src="./Assets/60b3a3a1ec43e 1.svg"
            alt=""
            className="w-16 h-16 lg:w-24 lg:h-24 rounded-full p-2"
          />
        </div>

        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-gray-400 rounded-full lg:ml-6 w-16 h-16 ml-4">
          <img
            src="./Assets/60b39f7b6fd76 1.svg"
            alt=""
            className="w-16 h-16 lg:w-24 lg:h-24 rounded-full p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Position;
