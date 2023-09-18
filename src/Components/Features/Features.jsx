import { GoTriangleRight } from "react-icons/go";
import Box from "../Box/Box";

function Features() {
  const featureDots = {
    position: "relative",
    backgroundImage: `url('./Assets/bgshape.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "950px",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        className="lg:flex lg:items-center lg:justify-center bg-cover h-auto lg:h-[calc(100vh-96px)] mb-24 lg:ml-[100px] lg:mr-[100px]"
        style={featureDots}
      >
        <div className="w-full lg:w-1/2 p-4 lg:p-0">
          <h1 className="leading-normal mb-4 tracking-wide font-poppins text-5xl text-center font-semibold md:w-1/2 lg:w-[90%] lg:text-left">
            Create higher membership retention with
            <span className="text-indigo-500"> MyCircle</span>
          </h1>

          <p className="leading-6 tracking-wider text-zinc-400 text-[15px] md:w-3/4  lg:text-left font-Sans text-center m-4">
            Bring your circle together for a common cause. Looking for a space
            to grow your followers and give them the best of you?
          </p>

          <div className="flex items-center justify-center gap-16 lg:justify-start">
            <button className="bg-blue-600 text-white py-4 px-12 rounded-xl hover:bg-blue-800 mt-4">
              Start free trial
            </button>

            <button className="bg-white text-blue-600 py-3 px-6 rounded-xl hover:bg-blue-600 hover:text-white mt-4 border border-blue-400 flex items-center">
              <GoTriangleRight className="text-3xl" /> See how it works
            </button>
          </div>
        </div>

        <div className="">
          <img src="./Assets/lappy.svg" alt="" />
        </div>
      </div>
      <Box />
    </>
  );
}

export default Features;
