import React from "react";
import styles from "./Pricing.module.css";

function Annual() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:flex lg:justify-center lg:gap-6">
        {/* this is free plan */}
        <div className="md:w-[400px]  w-[300px] h-[440px] shadow-xl mt-8 rounded-lg border-blue-600">
          <div className="flex items-center justify-center mt-6 mb-4 gap-4">
            <img src="./Assets/fan.svg" alt="" />

            <div className="flex gap-2 flex-col">
              <h1 className="text-xl text-zinc-800 font-bold">Free Plan</h1>
              <p className="text-indigo-600 text-[14px]">
                Enjoy 14 days Free trial plan
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-100 my-4 mx-6" />
          <div className="pl-14 pb-4">
            <h5 className="font-bold pb-4 text-zinc-700">Community Features</h5>
            <ul className={styles.list}>
              <li>Polls and question</li>
              <li>Number limits -100 or 200</li>
              <li>Public Private groups</li>
              <li>Landing page</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="bg-indigo-600 flex flex-col items-center justify-center lg:py-5 py-2 px-6 lg:px-28 text text-white text-md rounded-lg  mb-12 mt-4">
              Start Basic Plan
            </button>
          </div>
        </div>
        {/* this si monthly plan */}

        <div className="md:w-[400px]  w-[300px] shadow-xl mt-8 rounded-lg">
          <div className="flex items-center justify-center mt-6 mb-4 gap-4">
            <img src="./Assets/fan.svg" alt="" />

            <div className="flex gap-2 flex-col">
              <h1 className="text-xl text-zinc-800 font-bold">Perfect Plan</h1>
              <p className="text-indigo-600 text-[16px] font-bold">1,160$</p>
            </div>
          </div>
          <hr className="border-t border-gray-100 my-4 mx-6" />
          <div className="pl-14 pb-4">
            <h5 className="font-bold pb-4 text-zinc-700">Community Features</h5>
            <ul className={styles.list}>
              <li>Landing page</li>
              <li>Custom Domain</li>
              <li>Polls and question</li>
              <li>Events and Courses</li>
              <li>Public Private groups</li>
              <li> Membership Plan</li>
              <li> Membership Rewards</li>
              <li> Mentorship Managements</li>
              <li> Wed / Desktop and Mobile Platform</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="bg-indigo-600 flex flex-col items-center justify-center lg:py-5 py-2 px-6 lg:px-28 text text-white text-md rounded-lg  mb-12 mt-4">
              Start Basic Plan
            </button>
          </div>
        </div>
        {/* this is annual plan */}

        <div className="md:w-[400px]  w-[300px] h-[550px] shadow-xl mt-8 rounded-lg ">
          <div className="flex items-center  justify-center mt-6 mb-4 gap-4">
            <img src="./Assets/fan.svg" alt="" />

            <div className="flex gap-2 flex-col">
              <h1 className="text-xl text-zinc-800 font-bold">Basic Plan</h1>
              <p className="text-indigo-600 text-[16px] font-bold">400$</p>
            </div>
          </div>
          <hr className="border-t border-gray-100 my-4 mx-6" />
          <div className="pl-14 pb-4">
            <h5 className="font-bold pb-4 text-zinc-700">Community Features</h5>
            <ul className={styles.list}>
              <li>Landing page</li>
              <li>Custom Domain</li>
              <li>Polls and question</li>
              <li>Events and Courses</li>
              <li>Public Private groups</li>
              <li> Membership Plan</li>
              <li> Membership Rewards</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button className="bg-indigo-600 flex flex-col items-center justify-center lg:py-5 py-2 px-6 lg:px-28 text text-white text-md rounded-lg  mb-12 mt-4">
              Start Basic Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Annual;
