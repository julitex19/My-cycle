import React from "react";
// import styles from './Managing.module.css'

function Managing() {
  const manageLines = {
    position: 'relative',
    backgroundImage: `url('./Assets/section2shape.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "950px",
    backgroundPosition: "center",
  };

  return (
    <div className=" bg-5760fd mb-16 " style={manageLines}>
      <p className="text-white text-lg pt-6 text-center lg:pt-12 lg:pb-8 lg:text-2xl">
        My circle allows you to:
      </p>

      <div className="lg:flex lg:items-center">
        <div>
          <h1 className="w-[100%] lg:mt-28 mb-4 text-center lg:ml-28 lg:mr-28 tracking-wide text-white text-5xl font-semibold xl:w-[55%] lg:text-start lg:text-6xl">
            Manage your community
          </h1>
          <p className="leading-6 tracking-wider font-light text-white text-center pl-1 pr-3 xl:w-[55%] text-[15px] lg:ml-28 lg:text-start">
            Bring your circle together for a common cause. Looking for a space
            to grow your followers and give them the best of you?
          </p>
          <div className="flex justify-center lg:flex lg:justify-start">
            <button className="bg-white text-indigo-600 py-2 px-8 rounded-xl hover:bg-blue-600 lg:ml-28 hover:text-white flex items-center mt-10 mb-12">
              Get Started
            </button>
          </div>
        </div>
        
        <div className="relative" >
          
          <div className="flex justify-center lg:-mb-2 lg:border lg:border-white lg:bg-white lg:w-[400px] xl:w-[470px] lg:mr-10 xl:mr-64" >
            <img src="./Assets/MacBook.svg" alt="" className="w-[230px] z-10 md:w-[450px]"  />
          </div>
          <img src="./Assets/rightdot.svg" alt="" className=" absolute -top-5 hidden xl:block xl:right-[230px]" />
          <img src="./Assets/leftdot.svg" alt="" className="absolute bottom-4 hidden xl:block xl:left-[-50px]" />
        </div>
      </div>
    </div>
  );
}

export default Managing;
