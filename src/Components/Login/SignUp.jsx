import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
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
        <div className="flex items-center gap-4 mt-10 lg:mt-[550px]">
          <p className="text-zinc-400  mt-2 text-[12px] ">&copy; logo</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">privacy & terms</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">Contact Us</p>
        </div>
      </div>

      <div className=" bg-white mt-12 rounded-lg shadow-xl lg:w-[550px] mb-4">
        <h1 className="text-center text-3xl text-indigo-600 lg:text-zinc-800 font-semibold pt-10 lg:pt-10">
          Sign Up
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

          <div className="flex justify-center gap-5">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-600 text-sm font-semibold  mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Input First Name"
                className="  pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Input Last Name"
                className=" pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
                required
              />
            </div>
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
            <button className="px-32 py-4 border border-gray-200 text-white text-lg bg-[#7474FF] rounded-lg mb-2 flex items-center gap-2 w-[400px]">
              Create account
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
            <span className="text-zinc-400  mt-2 m1-2 ">Existing User?</span>
            <Link
              to="/SignIn"
              className="text-indigo-600 hover:underline hover:text-blue-500 "
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
