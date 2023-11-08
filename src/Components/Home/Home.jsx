import { GoTriangleRight } from "react-icons/go";
import Managing from "../Managing/Managing";
import Mentorship from "../Mentorship/Mentorship";
import Monetize from "../Monetize/Monetize";
import Interest from "../Interest/Interest";
import HeroImg from "../../assets/Assets/images.svg"
function Home() {
  const homeDots = {
    backgroundImage: `url('/Assets/Shapes.svg')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div
        className="flex flex-col-reverse lg:justify-around items-center mb-20 lg:mb-10 mt-16 lg:mr-24 lg:ml-24 lg:flex-row"
        style={homeDots}>
        <div>
          <div className="md:leading-relaxed md:tracking-wide text-zinc-800 md:text-[40px] font-semibold ">
            <h1 className="md:max-w-1/2 lg:max-w-[38rem] lg:overflow-hidden w-full text-center lg:text-left">
              The Powerful Modern Community that allows you Grow, Engage &
              Monetize your product effectively
            </h1>
          </div>
          <div className="flex lg:space-x-8 space-x-4 mt-10 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white py-2 lg:px-8 px-5 rounded-lg hover:bg-blue-800 flex items-center">
              start free trial
            </button>
            <button className="bg-white text-blue-600 py-2 lg:px-8 px-3 text-xs rounded-lg hover:bg-blue-600  hover:text-white flex items-center border border-blue-400">
              <GoTriangleRight className=" text-xl lg:text-3xl" />See How it works
            </button>
          </div>
        </div>

        <div className="relative">
          {/* image import */}
          <img src={HeroImg} alt="" /> 
          <img
            src="./Assets/Lines.svg"
            alt=""
            className="absolute top-0  -z-10 md:left-10"
          />
        </div>
      </div>
      <Managing />
      <Mentorship />
      <Monetize />
      <Interest />
    </>
  );
}

export default Home;
