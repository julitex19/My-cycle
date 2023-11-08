import React from "react";
import Position from "./Position";

const featureDots = {
  position: "relative",
  backgroundImage: `url('./Assets/bgshape.svg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "950px",
  backgroundPosition: "center",
};

function Circle() {
  return (
    <div className="mb-16 shadow-sm" style={featureDots}>
      <h1 className = "text-zinc-900 text-center text-2xl pt-4 pb-6 lg:text-2xl">
        Manage and control your community on both web and mobile platform
      </h1>
         <div>
            <img src="./Assets/mockup.svg" alt=""  className="xl:ml-60"/>  
          </div>
          <Position />
    </div>
  );
}

export default Circle;
