import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="mb-60 bg-[#FCFCFC] lg:flex  justify-center gap-20">
      <div className="max-w-[400px]  mx-auto mt-10 lg:mx-0">
        <p className="font-dancing text-zinc-700 font-extrabold mb-10 mt-5">
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
        {/* hidden in large screen */}
        <div className="items-center gap-4 mt-56 hidden lg:flex">
          <p className="text-zinc-400  mt-2 text-[12px] ">&copy; logo</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">privacy & terms</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">Contact Us</p>
        </div>
      </div>

      <div className=" bg-white mt-12 rounded-lg shadow-xl lg:w-[550px] lg:mb-10">
        <h1 className="text-center text-3xl text-indigo-600 lg:text-zinc-800 font-semibold pt-10 lg:pt-10">
          Sign-Up
        </h1>
        <div className="flex flex-col items-center mt-12 ">
          <Link to="/SignUp">
            <button className="px-24 py-4 border border-gray-200 rounded-md mb-2 flex items-center gap-2 w-[400px]">
              <MdEmail /> Signup with Email
            </button>
          </Link>

          <div className="border-b border-gray-200 w-[400px] text-center mb-6 ">
            OR
          </div>

          <button className="px-24 py-4 border border-gray-200 rounded-md flex items-center gap-2 w-[400px] mb-8 text-blue-400">
            <FcGoogle /> Continue with Google
          </button>
          <button className="px-24 py-4 border border-gray-200 rounded-md flex items-center gap-2 w-[400px] mb-8 text-blue-800">
            <FaFacebook /> Continue with Facebook
          </button>

          <div className="flex items-center gap-4 mb-12">
            <span className="text-zinc-400  mt-2 m1-2 ">Existing User?</span>
            <Link
              to="/SignIn"
              className="text-indigo-600 hover:underline hover:text-blue-500 ">
              Sign in
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-20 ml-48 pb-6 lg:hidden">
          <p className="text-zinc-400  mt-2 text-[12px] ">&copy; logo</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">privacy & terms</p>
          <p className="text-zinc-400  mt-2 text-[12px] ">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
