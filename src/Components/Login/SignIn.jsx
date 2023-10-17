import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="mb-72 bg-[#FCFCFC] lg:flex justify-center gap-20">
      <div>
        <p className="font-dancing text-zinc-700 font-extrabold mb-10 ml-60 mt-8">
          my Circle
        </p>

        <div className=" bg-white mt-12 rounded-lg shadow-xl lg:w-[550px] mb-4">
          <h1 className="text-center text-3xl text-indigo-600 lg:text-zinc-800 font-semibold pt-10 lg:pt-10">
            Sign In
          </h1>

          <div className="flex flex-col items-center mt-12 ">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-semibold  mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Input Email"
                className="w-[400px]  pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Input Password"
                className="w-[400px]  pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
                required
              />
            </div>
            <Link to="/VerifyMail">
              <button className="px-40 py-4 border border-gray-200 text-white text-lg bg-[#7474FF] rounded-lg mb-2 flex items-center gap-2 w-[400px]">
                Continue
              </button>
            </Link>
            <div className="border-b border-gray-200 w-[400px] text-center mb-6 ">
              OR
            </div>
            <button className="px-24 py-4 border border-gray-200 rounded-md mb-2 flex items-center gap-2 w-[400px] mb-8 text-blue-400">
              <FcGoogle /> Continue with Google
            </button>
            <button className="px-24 py-4 border border-gray-200 rounded-md flex items-center gap-2 w-[400px] mb-8 text-blue-800">
              <FaFacebook /> Continue with Facebook
            </button>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-zinc-400  mt-2 m1-2 ">New User?</span>
              <Link
                to="/SignUp"
                className="text-indigo-600 hover:underline hover:text-blue-500 "
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
