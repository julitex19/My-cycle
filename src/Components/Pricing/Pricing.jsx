import { useState } from "react";
import Monthly from "./Monthly";
import Annual from "./Annual";

function Pricing() {
  const [activetab, setActiveTab] = useState("Monthly");
  const Dots = {
    backgroundImage: `url('/Assets/Shapes.svg')`,
    backgroundSize: "contain",
    // backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <div className="mb-60" style={Dots}>
        <div>
          <h1 className="text-center text-3xl md:text-5xl text-zinc-800 font-bold pt-6 lg:pt-8 pb-6 px-3">
            Find your community Plan?
          </h1>

          <p className="leading-6 tracking-wider font-medium text-center text-zinc-300 text-[16px] pb-8">
            Control and manage your Community with{" "}
            <span className="italic font-dancing">Mycircle</span> plan
          </p>
        </div>
        <div className="flex justify-center ">
          <button
            className={`${ activetab === "Monthly" ? "bg-blue-600 text-white" : "bg-white" } lg:py-5 py-3 lg:px-14 px-10 text-indigo-600 text-lg rounded-l-full transition-all duration-1000`}
            onClick={() => setActiveTab("Monthly")}
          >
            Monthly
          </button>
          <button
            className= {`${ activetab === "Annual" ? "bg-blue-600 text-white" : "bg-white"  } bg-blue-600 lg:py-5 py-3 lg:px-14 px-10 text-indigo-600 text-lg rounded-r-full transition-all duration-1000`}
            onClick={() => setActiveTab("Annual")}
          >
            Annual
          </button>
        </div>
        <div className="lg:p-24">
          {activetab === "Monthly" && <Monthly />}
          {activetab === "Annual" && <Annual />}
        </div>
      </div>
    </>
  );
}

export default Pricing


{/* <button className={`${ activetab === "Monthly" ? "bg-blue-600" : "bg-gray-400" } py-5 px-14 text-white text-lg rounded-l-full`} onClick={() => setActiveTab("Monthly")}>Monthly</button> */}