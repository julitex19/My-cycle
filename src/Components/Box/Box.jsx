// import React from "react";
// import { AiFillMessage } from "react-icons/ai";
// // import { RiPieChart2Fill } from "react-icons/ri"
// // import { BsFillBrushFill } from "react-icons/bs"
// // import { CgFileDocument, CgCalendarDates } from "react-icons/cg"
// // import { IoWallet }from "react-icons/io"
// // import { FaSyncAlt }from "react-icons/fa"
// // import { ImUsers, ImMobile }from "react-icons/im"

// // const availableFeatures = [
// //   {
// //     id: 1,
// //     icon: <RiPieChart2Fill />,
// //     text:"Report Analytics"
// //   },

// //   {
// //     id: 2,
// //     icon: <BsFillBrushFill/>,
// //     text:"Branding"
// //   },

// //   {
// //     id: 3,
// //     icon: <CgFileDocument />,
// //     text:"Content Management"
// //   },


// //   {
// //     id: 4,
// //     icon: <IoWallet />,
// //     text:"Third Party Integrations"
// //   }, 


// //   {
// //     id: 5,
// //     icon: <FaSyncAlt />,
// //     text:"Custom Domain Mapping"
// //   },

// //   {
// //     id: 6,
// //     icon: <ImUsers />,
// //     text:"Membership Plan"
// //   },
// //   {
// //     id: 7,
// //     icon: <CgCalendarDates />,
// //     text:"Event Management"
// //   },

// //   {
// //     id: 8,
// //     icon: <AiFillMessage/>,
// //     text:"Communication"
// //   },

// //   {
// //     id: 9,
// //     icon: <MdGroups/>,
// //     text:"Groups/Channels"
// //   },
// //   {
// //     id: 10,
// //     icon: <ImMobile/>,
// //     text:"Mobile Platform"
// //   },
 
// // ]

// function Box() {
//   return (
//     <>
//       <div className="w-full mb-20 bg-[#FCFCFC] md:pt-10 pb-12 lg:pl-0 tracking-wider">
//         <h2 className="text-zinc-700 text-center py-6 lg:py-10 lg:text-xl font-extrabold">
//           Available Features
//         </h2>

//         <div className="flex gap-4 pr-3 pl-3 pb-12 flex-wrap items-center justify-center lg:gap-14">

//           <div className="min-h-[100px] w-[137px] bg-white  shadow-md  hover:border hover:border-indigo-600  rounded-lg flex items-center flex-col gap-4 justify-center lg:min-h-[150px] lg:w-[177px] xl:min-h-[170px] xl:w-[210px]">
//             <AiFillMessage className="text-indigo-600 lg:text-2xl" />
//             <p className="text-indigo-600">Communication</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Box;

import { AiFillMessage } from "react-icons/ai";
import { RiPieChart2Fill } from "react-icons/ri";
import { BsFillBrushFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { CgCalendarDates } from "react-icons/cg";
import { PiWalletFill } from "react-icons/pi";
import { FaSyncAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";


const availableFeatures = [
  {
    id: 1,
    icon: <RiPieChart2Fill />,
    text: "Report Analytics",
  },
  {
    id: 2,
    icon: <BsFillBrushFill />,
    text: "Branding",
  },
  {
    id: 3,
    icon: <CgFileDocument />,
    text: "Content Management",
  },
  {
    id: 4,
    icon: < PiWalletFill/>,
    text: "Third Party Integrations",
  },
  {
    id: 5,
    icon: <FaSyncAlt />,
    text: "Custom Domain Mapping",
  },
  {
    id: 6,
    icon: <ImUsers />,
    text: "Membership Plan",
  },
  {
    id: 7,
    icon: <CgCalendarDates />,
    text: "Event Management",
  },
  {
    id: 8,
    icon: <AiFillMessage />,
    text: "Communication",
  },
  {
    id: 9,
    icon: <HiUserGroup />,
    text: "Groups/Channels",
  },
  {
    id: 10,
    icon: <ImMobile />,
    text: "Mobile Platform",
  },
];

function Box() {
  return (
    <>
      <div className="w-full mb-20 bg-[#FCFCFC] md:pt-10 pb-12 lg:pl-0 tracking-wider">
        <h2 className="text-zinc-700 text-center py-6 lg:py-10 lg:text-xl font-extrabold">
          Available Features
        </h2>

        <div className="flex gap-4 pr-3 pl-3 pb-12 flex-wrap items-center justify-center lg:gap-14">
          {availableFeatures.map((feature) => (
            <div
              key={feature.id}

              className="min-h-[100px] w-[137px] bg-white shadow-md hover:border hover:border-indigo-600 rounded-lg flex items-center flex-col gap-4 justify-center lg:min-h-[150px] lg:w-[177px] xl:min-h-[170px] xl:w-[210px]">
              <div className="text-indigo-600 text-3xl">{feature.icon}</div>
              <p className="text-indigo-600 text-center">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Box;
