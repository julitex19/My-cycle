import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import Foottop from "../Foottop/Foottop";

function Footer() {
  const footerStyle = {
    position: "relative",
    backgroundImage: `url('/Assets/map.svg')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };

  return (
    <footer
      className="min-h-[400px] pl-5 md:pl-10 lg:pl-20 pr-5 md:pr-10 lg:pr-20 bg-5760fd"
      style={footerStyle}
    >
         <div>
        <Foottop />
      </div>

      <div className="flex flex-col md:flex-row justify-around ">
        <div className="mt-20 md:mt-20 sm:mt-24">
          <h2 className="text-white font-bold mb-2 md:mb-4 text-base md:text-xl">
            Product
          </h2>
          <ul className="space-y-2 text-white text-xs md:text-sm">
            <li>Monetization</li>
            <li>Integrations</li>
            <li>Statistics</li>
          </ul>
        </div>

        <div className="mt-4 md:mt-20">
          <h2 className="text-white font-bold mb-2 md:mb-4 text-base md:text-xl">
            Mycircle
          </h2>
          <ul className="space-y-2 text-white text-xs md:text-sm">
            <li>Pricing</li>
            <li>Affiliate Membership</li>
            <li>Platform</li>
          </ul>
        </div>

        <div className="mt-4 md:mt-20">
          <h2 className="text-white font-bold mb-2 md:mb-4 text-base md:text-xl">
            Resources
          </h2>
          <ul className="space-y-2 text-white text-xs md:text-sm">
            <li>How it works</li>
            <li>Courses</li>
            <li>Terms of service</li>
          </ul>
        </div>

        <div className="mt-4 md:mt-20">
          <h2 className="text-white font-bold mb-2 md:mb-4 text-base md:text-xl">
            Contact Us
          </h2>
          <ul className="space-y-2 text-white text-xs md:text-sm">
            <li> +1 - 345 679 908</li>
            <li>Info@logo.com</li>
          </ul>
          <div className="flex items-center space-x-4 mt-3">
            <div className="text-white text-lg md:text-2xl">
              <Link to="https://twitter.com/">
                <BsTwitter />
              </Link>{" "}
            </div>
            <div className="text-white text-lg md:text-2xl">
              <Link to="https://www.facebook.com/">
                <BsFacebook />
              </Link>{" "}
            </div>
            <div className="text-white text-lg md:text-2xl">
              <Link to="https://www.instagram.com/">
                <PiInstagramLogoFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{ color: "white" }}
        className="flex justify-center items-center mt-4 md:mt-8 text-xs md:text-sm font-xs pb-6"
      >
        &copy; mycycle 2023
      </p>
     
    </footer>
  );
}

export default Footer;
