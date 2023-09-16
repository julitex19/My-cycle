import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import Foottop from "../Foottop/Foottop";

function Footer() {
  const footerStyle = {
    backgroundImage: `url('/Assets/map.svg')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };
  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className="flex justify-around">
        <div className="mt-20">
          <h2 className="text-white font-bold mb-4">Product</h2>
          <ul className="space-y-6 text-white text-sm">
            <li>Monetization</li>
            <li>Integrations</li>
            <li>Statistics</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-white font-bold mb-4">Mycircle</h2>
          <ul className="space-y-2 text-white text-sm">
            <li>Pricing</li>
            <li>Affiliate Membership</li>
            <li>Platform</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-white font-bold mb-4">Resources</h2>
          <ul className="space-y-2 text-white text-sm">
            <li>How it works</li>
            <li>Courses</li>
            <li>Terms of service</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-white font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-white text-sm">
            <li> +1 - 345 679 908</li>
            <li>Info@logo.com</li>
          </ul>
          <div className="flex items-center space-x-4 mt-3">
            <div className=" text-white text-2xl">
              <Link to="https://twitter.com/">
                <BsTwitter />
              </Link>{" "}
            </div>
            <div className=" text-white text-2xl">
              <Link to="https://www.facebook.com/">
                <BsFacebook />
              </Link>{" "}
            </div>
            <div className=" text-white text-2xl">
              <Link to="https://www.instagram.com/">
                <PiInstagramLogoFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{ color: "white" }}
        className="flex justify-center items-center mt-8 text-xs font-xs"
      >
        &copy; mycycle 2023
      </p>
      <div>
        <Foottop />
      </div>
    </footer>
  );
}

export default Footer;
