// import React from 'react';

function Foottop() {
  return (
    <div className="border-2 h-60 bg-white absolute -top-56 shadow-sm rounded-2xl left-40 right-40 flex  items-center">
      <div className="w-2/4 ml-28">
        <div className="w-80">
             <p className="leading-loose tracking-wide text-zinc-600	font-poppins">
            Mycircle gives you the best platform solution connecting your
            business to the right community
          </p>
        </div>
        <div>
          <button className="bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-800">
            get Started
          </button>
        </div>
      </div>
      <div className="flex mr-28">
        <div className="w-24 h-24 border-2 border-dashed border-blue-200 rounded-full ml-8">
          <img
            src="./Assets/60b3a2a33046d 1.svg"
            alt=""
            className="w-24 h-26 rounded-full -p-4 "
          />
        </div>
        <div className="w-24 h-24 border-2 border-dashed border-red-400 rounded-full ml-8">
          <img
            src="./Assets/60b3a309b6cbf 1.svg"
            alt=""
            className="w-28 h-26 rounded-full -p-4 "
          />
        </div>
        <div className="w-24 h-24 border-2 border-dashed border-red-400 rounded-full ml-8">
          <img
            src="./Assets/60b3a3a1ec43e 1.svg"
            alt=""
            className="w-24 h-26 rounded-full -p-4 "
          />
        </div>
        <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full ml-8">
          <img
            src="./Assets/60b39f7b6fd76 1.svg"
            alt=""
            className="w-24 h-26 rounded-full -p-4 "
          />
        </div>
      </div>
    </div>
  );
}

export default Foottop;
