import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
function Nav() {
  return (
    <nav className="bg-white shadow-sm p-6 flex justify-between px-100 items-center bg-white p-4 sticky top-0 z-50 px-8">
      <p className="text-gray-500 hover:text-blue-500 text-md font-Spoof">
        my cycle
      </p>
      <ul className="flex space-x-12 items-center hover:text-blue-500 hidden md:flex">
        <li>
          <Link
            to="/"
            className="text-black hover:underline hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Features"
            className="text-black hover:underline hover:text-blue-500"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/Pricing"
            className="text-black hover:underline hover:text-blue-500"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            className="text-black hover:underline hover:text-blue-500"
          >
            Login
          </Link>
        </li>

        <li>
          <button className="bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-800">
            Get Started
          </button>
        </li>
      </ul>

      <div className="md:hidden">
        <AiOutlineMenu className="w-6 h-6 text-xl" />
      </div>
    </nav>
  );
}

export default Nav;
