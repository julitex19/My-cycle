import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="mb-72 lg:flex lg:justify-center gap-20 lg:gap-10">
      <div className="max-w-[400px] mx-auto mt-10">
        <p className="font-dancing text-zinc-700 font-extrabold text-center lg:text-left mb-6">
          my Circle
        </p>
        <div className="flex flex-col gap-4 lg:text-left px-6">
          <div className="flex items-center gap-3">
            <img src="./Assets/checkbox.svg" alt="" className="h-6" />
            <div>
              <h1>Get Started</h1>
              <p className="text-zinc-400 text-sm mt-2 font-light">
                Create an account via your email, Facebook, or Gmail account
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src="./Assets/checkbox.svg" alt="" className="h-6" />
            <div>
              <h1>Setup Community</h1>
              <p className="text-zinc-400 text-sm mt-2 font-light">
                Setup your community, own it with your brand, set up your domain
                name if you wish, and edit your landing page.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src="./Assets/checkbox.svg" alt="" className="h-6" />
            <div>
              <h1>Automate Workflow</h1>
              <p className="text-zinc-400 text-sm mt-2 font-light">
                Provide integration platforms for both small and large businesses
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden items-center gap-4 mt-6 lg:mt-72">
          <p className="text-zinc-400 text-xs">&copy; logo</p>
          <p className="text-zinc-400 text-xs">Privacy & Terms</p>
          <p className="text-zinc-400 text-xs">Contact Us</p>
        </div>
      </div>

      <div className="bg-white mt-8 lg:mt-0 rounded-lg shadow-xl px-10 md:mx-32 lg:w-[420px] xl:w-[550px] mx-4">
        <h1 className="text-center text-3xl text-indigo-600 font-semibold pt-8 lg:pt-10">
          Sign Up
        </h1>

        <div className="flex flex-col items-center mt-6 lg:mt-12">
          <div className="mb-4 w-full max-w-[400px] lg:max-w-full">
            <label htmlFor="email" className="text-gray-600 text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Input Email"
              className="w-full px-4 py-2 border rounded focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[400px] lg:max-w-full lg:flex-row lg:gap-5 py-4">
            <div>
              <label htmlFor="firstName" className="text-gray-600 text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Input First Name"
                className="w-full px-4 py-2 border rounded focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-gray-600 text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Input Last Name"
                className="w-full px-4 py-2 border rounded focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4 w-full max-w-[400px] lg:max-w-full">
            <label htmlFor="password" className="text-gray-600 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Input Password"
              className="w-full px-4 py-2 border rounded focus:outline-none  "
              required
            />
          </div>
            <Link to="/VerifyMail">
                <button className=" lg:py-4 py-2 border border-gray-200 text-white text-lg bg-[#7474FF] rounded-lg mb-2 flex items-center justify-center gap-2 xl:w-[480px] md:w-[410px] w-[300px]">Create account</button>
             </Link>

          <div className="flex items-center justify-center pb-3 lg:pt-3">
              <div className="border w-32 md:w-44 xl:w-52"></div>
              <span className="mx-2 font-medium text-xl lg:text-xl text-primaryColor">OR</span>
              <div className="border w-32 md:w-44 xl:w-52"></div>
            </div>

          <button className="w-full xl:w-[480px] px-4 py-3 flex items-center justify-center gap-3 border border-gray-200 rounded-md text-center mb-8 text-blue-400">
            <FcGoogle /> Continue with Google
          </button>
          <button className="w-full xl:w-[480px] px-4 py-3 border flex items-center justify-center gap-3 border-gray-200 rounded-md text-center mb-8 text-blue-800">
            <FaFacebook /> Continue with Facebook
          </button>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-zinc-400">Existing User?</span>
            <Link to="/SignIn" className="text-indigo-600 hover:underline hover:text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6 pb-6 lg:hidden">
          <p className="text-zinc-400 text-xs">&copy; logo</p>
          <p className="text-zinc-400 text-xs">Privacy & Terms</p>
          <p className="text-zinc-400 text-xs">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;





// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function SignUp() {
//   return (
//     <div className="mb-72 bg-[#FCFCFC] lg:flex  justify-center gap-20">
//       <div className="max-w-[400px]  mx-auto mt-10 lg:mx-0">
//         <p className="font-dancing text-zinc-700 font-extrabold mb-10">
//           my Circle
//         </p>
//         <div className="flex gap-3">
//           <div>
//             <img src="./Assets/checkbox.svg" alt="" className="mt-1" />
//           </div>
//           <div>
//             <h1>Get Started</h1>
//             <p className="text-zinc-400 text-[11px] mt-2 mb-2 font-light">
//               Create an account via your email, facebook or gmail account
//             </p>
//           </div>
//         </div>
//         <div className=" flex gap-3">
//           <div>
//             <img src="./Assets/checkbox.svg" alt="" className=" h-7" />
//           </div>
//           <div>
//             <h1>Setup Community</h1>
//             <p className="text-zinc-400 text-[12px] mt-2 mb-2 font-light">
//               Setup your community and own it with your brand, setup your domain
//               name if you wish, edit your landing page etc"
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-3">
//           <div>
//             <img src="./Assets/checkbox.svg" alt="" className="mt-1" />
//           </div>
//           <div>
//             <h1>Automate Workflow</h1>
//             <p className="text-zinc-400 text-[11px] mt-2 mb-2 font-light">
//               Provide integration platforms for both small and large business
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 mt-10 lg:mt-[550px]">
//           <p className="text-zinc-400  mt-2 text-[12px] ">&copy; logo</p>
//           <p className="text-zinc-400  mt-2 text-[12px] ">privacy & terms</p>
//           <p className="text-zinc-400  mt-2 text-[12px] ">Contact Us</p>
//         </div>
//       </div>

//       <div className=" bg-white mt-12 rounded-lg shadow-xl lg:w-[550px] mb-4">
//         <h1 className="text-center text-3xl text-indigo-600 lg:text-zinc-800 font-semibold pt-10 lg:pt-10">
//           Sign Up
//         </h1>

//         <div className="flex flex-col items-center mt-12 ">
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-600 text-sm font-semibold  mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Input Email"
//               className="w-full  pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//               required
//             />
//           </div>

//           <div className="flex justify-center gap-5">
//             <div className="mb-4">
//               <label
//                 htmlFor="firstName"
//                 className="block text-gray-600 text-sm font-semibold  mb-2"
//               >
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Input First Name"
//                 className="w-full  pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="lastName"
//                 className="block text-gray-600 text-sm font-semibold mb-2"
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Input Last Name"
//                 className="w-full pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-600 text-sm font-semibold mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Input Password"
//               className="w-[400px]  pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//               required
//             />
            
//           </div>
//           <Link to="/VerifyMail">
//             <button className="px-32 py-4 border border-gray-200 text-white text-lg bg-[#7474FF] rounded-lg mb-2 flex items-center gap-2 w-[400px]">
//               Create account
//             </button>
//           </Link>

//           <div className="border-b border-gray-200 w-[400px] text-center mb-6 ">
//             OR
//           </div>

//           <button className="px-24 py-4 border border-gray-200 rounded-md flex items-center gap-2 w-[400px] mb-8 text-blue-400">
//             <FcGoogle /> Continue with Google
//           </button>
//           <button className="px-24 py-4 border border-gray-200 rounded-md flex items-center gap-2 w-[400px] mb-8 text-blue-800">
//             <FaFacebook /> Continue with Facebook
//           </button>

//           <div className="flex items-center gap-4 mb-12">
//             <span className="text-zinc-400  mt-2 m1-2 ">Existing User?</span>
//             <Link
//               to="/SignIn"
//               className="text-indigo-600 hover:underline hover:text-blue-500 "
//             >
//               Sign in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;



// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function SignUp() {
//   return (
//     <div className="mb-16 md:mb-32 lg:mb-72 lg:flex justify-center gap-10">
//       <div className="max-w-[400px] mx-auto mt-10 lg:mx-0">
//         <p className="font-dancing text-zinc-700 font-extrabold text-3xl md:text-4xl lg:text-5xl mb-10">
//           my Circle
//         </p>
//         <div className="flex gap-3 items-center">
//           <div>
//             <img src="./Assets/checkbox.svg" alt="" className="h-6" />
//           </div>
//           <div>
//             <h1 className="text-xl md:text-2xl">Get Started</h1>
//             <p className="text-zinc-400 text-[11px] md:text-[12px] mt-2 mb-2 font-light">
//               Create an account via your email, Facebook, or Gmail account
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-3 items-center">
//           <div>
//             <img src="./Assets/checkbox.svg" alt="" className="h-6" />
//           </div>
//           <div>
//             <h1 className="text-xl md:text-2xl">Setup Community</h1>
//             <p className="text-zinc-400 text-[12px] md:text-[14px] mt-2 mb-2 font-light">
//               Set up your community and own it with your brand.
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-3 items-center">
//           <div>
//             <img src="./Assets/checkbox.svg" alt="" className="h-6" />
//           </div>
//           <div>
//             <h1 className="text-xl md:text-2xl">Automate Workflow</h1>
//             <p className="text-zinc-400 text-[11px] md:text-[12px] mt-2 mb-2 font-light">
//               Provide integration platforms for both small and large businesses
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 mt-6 lg:mt-16">
//           <p className="text-zinc-400 mt-2 text-[12px]">&copy; logo</p>
//           <p className="text-zinc-400 mt-2 text-[12px]">privacy & terms</p>
//           <p className="text-zinc-400 mt-2 text-[12px]">Contact Us</p>
//         </div>
//       </div>

//       <div className="bg-white mt-10 lg:mt-0 rounded-lg shadow-xl md:w-[400px] lg:w-[550px] p-8">
//         <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-indigo-600 font-semibold pt-8">
//           Sign Up
//         </h1>

//         <div className="mt-8">
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Input Email"
//               className="w-full pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//               required
//             />
//           </div>

//           <div className="flex flex-col gap-4 md:flex-row md:gap-4">
//             <div className="mb-4 md:w-1/2">
//               <label htmlFor="firstName" className="block text-gray-600 text-sm font-semibold mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Input First Name"
//                 className="w-full pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//                 required
//               />
//             </div>

//             <div className="mb-4 md:w-1/2">
//               <label htmlFor="lastName" className="block text-gray-600 text-sm font-semibold mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Input Last Name"
//                 className="w-full pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Input Password"
//               className="w-full pt-3 pb-3 pl-6 border rounded focus:outline-none focus:ring font-extralight focus:border-blue-300"
//               required
//             />
//           </div>

//           <Link to="/VerifyMail">
//             <button className="w-full py-4 text-white text-lg bg-[#7474FF] rounded-lg mb-2 flex items-center justify-center">
//               Create account
//             </button>
//           </Link>

//           <div className="border-b border-gray-200 text-center mb-6">
//             OR
//           </div>

//           <button className="w-full py-4 border border-gray-200 rounded-md flex items-center justify-center mb-4 text-blue-400">
//             <FcGoogle /> Continue with Google
//           </button>
//           <button className="w-full py-4 border border-gray-200 rounded-md flex items-center justify-center mb-8 text-blue-800">
//             <FaFacebook /> Continue with Facebook
//           </button>

//           <div className="flex items-center gap-4 mb-8 justify-center">
//             <span className="text-zinc-400 mt-2 md:mt-1 text-[12px]">
//               Existing User?
//             </span>
//             <Link to="/SignIn" className="text-indigo-600 hover:underline hover:text-blue-500 text-[12px]">
//               Sign in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

