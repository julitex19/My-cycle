import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [DropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu state
  const toggleDropdown = () => {
    setDropdownOpen(!DropdownOpen);
  };

  const user = false;

  return (
    <nav className="bg-white shadow-sm p-6 flex justify-between px-100 bg-blue-500 items-center bg-white p-4 sticky top-0 z-50 px-8">
      <p className="text-gray-500 hover:text-blue-500 text-md font-dancing font-extrabold">
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
          {user ? (
            "Logout"
          ) : (
            <Link
              to="/Login"
              className="text-black hover:underline hover:text-blue-500"
            >
              Login
            </Link>
          )}
        </li>

        <li>
          <Link to="/Login">
            <button className="bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-800">
              Get Started
            </button>
          </Link>
        </li>
      </ul>

      {/* Menu icon for small screens */}
      <div className="md:hidden" onClick={toggleDropdown}>
        <AiOutlineMenu className="w-6 h-6 text-xl cursor-pointer" />
      </div>

      {/* Dropdown menu for small screens */}
      {DropdownOpen && (
        <ul className="md:hidden absolute top-16 right-4 bg-white  p-4 space-y-4 rounded-lg w-full shadow-lg fixed left-96">
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
            <Link to="/Login">
              <button className="bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-800">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
