// import React from 'react';

function Foottop() {
  return (
    <div className="border-2 lg:h-60 bg-white absolute lg:-top-56 -top-52 shadow-sm rounded-2xl lg:left-40 lg:right-40 right-10 left-10 flex  items-center  flex-col-reverse lg:flex-row p-2 md:flex-row">

      <div className="lg:w-2/4 lg:ml-28 w-[100%] text-center ">
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

      <div className="flex lg:mr-28 ">
        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-blue-400 rounded-full lg:ml-8 w-16 h-16">
          <img
            src="./Assets/60b3a2a33046d 1.svg"
            alt=""
            className="w-24 h-26 rounded-full -p-4 "
          />
        </div>

        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-red-400 rounded-full lg:ml-8 w-16 ml-4 h-16">
          <img
            src="./Assets/60b3a309b6cbf 1.svg"
            alt=""
            className="lg:w-28 lg:h-26 rounded-full -p-4 "
          />
        </div>

        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-red-400 rounded-full lg:ml-8 w-16 h-16 ml-4">
          <img
            src="./Assets/60b3a3a1ec43e 1.svg"
            alt=""
            className="w-24 h-26 rounded-full lg:-p-4 "
          />
        </div>

        <div className="lg:w-24 lg:h-24 border-2 border-dashed border-gray-400 rounded-full lg:ml-8 w-16 h-16 ml-4">
          <img
            src="./Assets/60b39f7b6fd76 1.svg"
            alt=""
            className="w-24 h-26 rounded-full lg:-p-4 "
          />
        </div>
      </div>
    </div>
  );
}

export default Foottop;
