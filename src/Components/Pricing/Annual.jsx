import React from "react";
import styles from "./Pricing.module.css";

function Annual() {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:gap-6">
        {/* this is free plan */}
        <div className="w-[400px] h-[440px] shadow-xl mt-8 rounded-xl border-blue-600">
          <div className="flex items-center pl-14 mt-6 mb-4 gap-4">
            <img src="./Assets/fan.svg" alt="" />

            <div className="flex gap-2 flex-col">
              <h1 className="text-xl text-zinc-800">Free Plan</h1>
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
          <button className="bg-indigo-600 py-5 px-28 list-disc text-white text-md rounded-2xl ml-8 mr-5 mb-12 mt-4">
            Start Trial Plan
          </button>
        </div>
        {/* this si monthly plan */}

        <div className="w-[420px] shadow-xl mt-8 rounded-xl">
          <div className="flex items-center pl-14 mt-6 mb-4 gap-4">
            <img src="./Assets/fan.svg" alt="" />

            <div className="flex gap-2 flex-col">
              <h1 className="text-xl text-zinc-800">Free Plan</h1>
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
          <button className="bg-indigo-600 py-5 px-28 list-disc text-white text-md rounded-2xl ml-8 mr-5 mb-12 mt-4">
            Start perfect Plan
          </button>
        </div>
        {/* this is annual plan */}

        <div className="w-[420px] h-[550px] shadow-xl mt-8 rounded-xl ">
          <div className="flex items-center pl-14 mt-6 mb-4 gap-4">
            <img src="./Assets/fan.svg" alt="" />

            <div className="flex gap-2 flex-col">
              <h1 className="text-xl text-zinc-800">Free Plan</h1>
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
          <button className="bg-indigo-600 py-5 px-28 list-disc text-white text-md rounded-2xl ml-8 mr-5 mb-12 mt-4">
            Start Basic Plan
          </button>
        </div>
      </div>
    </>
  );
}

export default Annual;
