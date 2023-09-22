import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="mb-72">
      <div className="max-w-[400px]  mx-auto">
        <p className="font-dancing text-zinc-700 font-extrabold">my Circle</p>
        <div className="flex gap-3">
          <div>
            <img src="./Assets/checkbox.svg" alt="" className="mt-1" />
          </div>
          <div>
            <h1>Get started</h1>
            <p className="text-zinc-500 text-[12px] mt-2 mb-2 font-light">
              Create an account via your email, facebook or gmail account
            </p>
          </div>
        </div>
        <div className=" flex gap-3">
          <div>
            <img src="./Assets/checkbox.svg" alt="" className=" h-7" />
          </div>
          <div>
            <h1>Get started</h1>
            <p className="text-zinc-500 text-[12px] mt-2 mb-2 font-light">
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
            <h1>Get started</h1>
            <p className="text-zinc-500 text-[12px] mt-2 mb-2 font-light">
              Provide integration platforms for both small and large business
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-zinc-400  mt-2 text-sm ">&copy; logo</p>
          <p className="text-zinc-400  mt-2 text-sm ">privacy & terms</p>
          <p className="text-zinc-400  mt-2 text-sm ">Contact Us</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center mt-20">
          <button className="px-20 py-3 border border-gray-400 rounded-md mb-2 flex items-center gap-2 w-96">
            <MdEmail /> Signup with Email
          </button>

          <div className="border-b border-gray-400 w-80 text-center mb-6">
            OR
          </div>

          <button className="px-20 py-3 border border-gray-400 rounded-md mb-2 flex items-center gap-2 w-96">
            <FcGoogle /> Continue with Google
          </button>
          <button className="px-20 py-3 border border-gray-400 rounded-md flex items-center gap-2 w-96">
            <FaFacebook /> Continue with Facebook
          </button>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500  mt-2 mb-2 ">Existing User?</span>
            <Link
              to="/SignUp"
              className="text-indigo-600 hover:underline hover:text-blue-500"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
