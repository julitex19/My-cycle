import { GoTriangleRight } from "react-icons/go";
import Box from "../Box/Box";
import Circle from "../MyCircle/Circle";
import FrequentlyAQ from "../FrequentlyAQ/FrequentltyAQ";

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
        className="lg:flex lg:items-center lg:justify-center bg-cover h-auto lg:h-[calc(100vh-96px)] lg:ml-[100px] xl:mr-[100px"
        style={featureDots}
      >
        <div className="w-full lg:w-1/2 p-4 lg:p-0 md:mt-10">
          <h1 className="xl:leading-normal mb-4 xl:tracking-wide font-poppins text-2xl xl:text-5xl text-center font-semibold md:px-40 lg:px-0 xl:w-[75%] lg:text-left">
            Create higher membership retention with
            <span className="text-indigo-500"> MyCircle</span>
          </h1>

          <p className="leading-6 tracking-wider xl:w-2/3 text-zinc-400 text-[15px] md:px-20 lg:px-0  lg:text-left font-Sans text-center">
          My Circle is a powerful mordern community platform that provides flexible solutions in building a quality product
          </p>

          <div className="flex items-center justify-center gap-3 xl:gap-10 lg:justify-start">
            <button className="bg-blue-600 text-white py-4 px-6 text-xs lg:px-12 rounded-lg hover:bg-blue-800 mt-4">
              Start free trial
            </button>

            <button className="bg-white text-blue-600 py-3 px-3 text-xs lg:px-6 rounded-lg hover:bg-blue-600 hover:text-white mt-4 border border-blue-400 flex items-center">
              <GoTriangleRight className="text-2xl" /> See how it works
            </button>
          </div>
        </div>

        <div className="">
          <img src="./Assets/lappy.svg" alt="" />
        </div>
      </div>
      <Box />
      <Circle />
      <FrequentlyAQ />
    </>
  );
}

export default Features;


