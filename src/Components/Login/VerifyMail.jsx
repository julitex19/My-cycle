import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function VerifyMail() {
  return (
    <div className="mb-72 bg-[#FCFCFC] lg:flex  justify-center gap-20">
      <div className="max-w-[400px]  mx-auto mt-10 lg:mx-0">
        <p className="font-dancing text-zinc-700 font-extrabold mb-10">
          my Circle
        </p>
        <div className="flex gap-3">
          <div>
            <img src="./Assets/checkbox.svg" alt="" className="mt-1" />
          </div>
          <div>
            <h1>Get Started</h1>
            <p className="text-zinc-400 text-[11px] mt-2 mb-2 font-light">
              Create an account via your email, facebook or gmail account
            </p>
          </div>
        </div>
        <div className=" flex gap-3">
          <div>
            <img src="./Assets/checkbox.svg" alt="" className=" h-7" />
          </div>
          <div>
            <h1>Setup Community</h1>
            <p className="text-zinc-400 text-[12px] mt-2 mb-2 font-light">
              Setup your community and own it with your brand, setup your domain
              name if you wish, edit your landing page etc"
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src="./Assets/checkbox.svg" alt="" className="mt-1" />
          </div>
          <div>
            <h1>Automate Workflow</h1>
            <p className="text-zinc-400 text-[11px] mt-2 mb-2 font-light">
              Provide integration platforms for both small and large business
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-10 lg:mt-48">
          <p className="text-zinc-400  mt-2 text-[12px] ">&copy; logo</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">privacy & terms</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">Contact Us</p>
        </div>
      </div>

      <div className=" bg-white mt-12 rounded-lg shadow-xl lg:w-[550px] mb-4">
        <h1 className="text-center text-2xl text-indigo-600 lg:text-zinc-800 font-semibold pt-10 lg:pt-10">
          Verify Email Address
        </h1>
        <p className="text-zinc-600 text-[14px] mt-4 mb-2 w-[80%] ml-20 font-light">
          To verify email,we’ve sent a one time password (OTP) to
          darkkyweb@gmail.com
        </p>
        <div className="flex flex-col items-center mt-12 ">
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-gray-600 text-sm font-light  mb-2"
            >
              OTP code
            </label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Input OTP"
              className="w-[400px]  pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
              required
            />
          </div>

          <button className="px-32 py-4 border border-gray-200 text-white text-lg bg-blue-600 hover:bg-blue-800 rounded-lg mb-8 mt-8 flex items-center gap-2 w-[400px]">
           Confirm Email
          </button>

          <div className="flex items-center gap-4 mb-12">
            <span className="text-zinc-400  mt-2 m1-2 ">Didn't get a code?</span>
            <Link
              to="/SignIn"
              className="text-indigo-600 hover:underline hover:text-blue-500 "
            >
              Resend
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyMail;
