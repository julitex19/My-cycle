import { GoTriangleRight } from "react-icons/go";
import Managing from "../Managing/Managing";
import Mentorship from "../Mentorship/Mentorship";
import Monetize from "../Monetize/Monetize";
function Home() {
  const homeDots = {
    backgroundImage: `url('/Assets/Shapes.svg')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div
        className="flex lg:justify-around items-center mb-60 lg:mb-10 mt-16 lg:mr-24 lg:ml-24 flex-col-reverse lg:flex-row"
        style={homeDots}
      >
        <div>
          <div className="leading-relaxed tracking-wide text-zinc-800 text-5xl font-semibold ">
            <h1 className="lg:max-w-[33rem] lg:overflow-hidden w-full text-center lg:text-left">
              The Powerful Modern Community that allows you Grow, Engage &
              Monetize your product effectively
            </h1>
          </div>
          <div className="flex space-x-8 mt-8 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white py-4 px-12 rounded-xl hover:bg-blue-800 flex items-center">
              start free trial
            </button>
            <button className="bg-white text-blue-600 py-3 px-6 rounded-xl hover:bg-blue-600  hover:text-white flex items-center border border-blue-400">
              <GoTriangleRight className="text-3xl" /> See how it works
            </button>
          </div>
        </div>

        <div className="relative">
          <img src="./Assets/Images.svg" alt="" />
          <img
            src="./Assets/Lines.svg"
            alt=""
            className="absolute top-0 left-20 -z-10"
          />
        </div>
      </div>
      <Managing />
      <Mentorship />
      <Monetize />
    </>
  );
}

export default Home;
