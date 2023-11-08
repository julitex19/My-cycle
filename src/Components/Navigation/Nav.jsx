

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu state
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to close the dropdown menu
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const user = false;

  return (
    <nav className="shadow-sm flex justify-between bg-white items-center p-4 sticky top-0 z-50 px-8">
      <p className="text-gray-500 hover:text-blue-500 text-md font-dancing font-extrabold">
        my cycle
      </p>

      <ul className="lg:flex space-x-12 items-center hover:text-blue-500 hidden md:flex">
        <li>
          <Link to="/" className="text-black hover:underline hover:text-blue-500">
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
              onClick={closeDropdown}
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
      {dropdownOpen && (
        <ul className="md:hidden absolute top-14 w-1/2 right-4 bg-white p-4 space-y-4 rounded-lg  shadow-lg">
          <li>
            <Link to="/" className="text-black hover:underline hover:text-blue-500"
            onClick={closeDropdown}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Features"
              className="text-black hover:underline hover:text-blue-500"
              onClick={closeDropdown}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/Pricing"
              className="text-black hover:underline hover:text-blue-500"
              onClick={closeDropdown}
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              to="/Login"
              className="text-black hover:underline hover:text-blue-500"
              onClick={closeDropdown}
            >
              Login
            </Link>
          </li>
          <li>

            <Link to="/Login">
              <button className="bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-800"
              onClick={closeDropdown}>
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
