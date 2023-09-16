import styles from "./Home.module.css";
import { GoTriangleRight } from "react-icons/go"
function Home() {
  const homeLines = {
    backgroundImage: `url('/Assets/Shapes.svg')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className="flex justify-around items-center mb-96 mt-16 mr-24 ml-24" style={homeLines}>
      <div>
        <div className="leading-relaxed tracking-wide text-zinc-800 font-poppins text-5xl font-semibold">
          {/* <h1 style={{ maxWidth: '12.5em', overflow: 'hidden' }}>
            The Powerful Modern Community that allows you Grow, Engage & Monetize your product effectively
          </h1> */}    
             <h1 >
            The Powerful <br />Modern Community <br />that allows you Grow,<br /> Engage & Monetize your <br /> product effectively
          </h1>
        </div>
        <div className="flex space-x-8 mt-8">
           <button className="bg-blue-600 text-white py-4 px-12 rounded-xl hover:bg-blue-800 flex items-center">
            start free trial
          </button>
           <button className="bg-white text-blue-600 py-3 px-6 rounded-xl hover:bg-blue-600  hover:text-white flex items-center border border-blue-400">
            <GoTriangleRight  className="text-3xl"/> See how it works
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="./Assets/Images.svg" alt=""/>
        <img src="./Assets/Lines.svg" alt="" className="absolute top-0 left-20 -z-10"/>
      </div>
    </div>
  );
}

export default Home;
