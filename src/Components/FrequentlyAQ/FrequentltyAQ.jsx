import React from "react";
import { Link } from "react-router-dom";

import Testing from "../testing/testing";

function FrequentlyAQ() {
  return (
    <div className="mb-80 mt-40 lg:mt-0 bg-[#FCFCFC]">
      <div>
        <h2 className="text-zinc-700 text-center tracking-wider font-semibold pt-6 pb-3 lg:pt-8 pb-6 lg:text-2xl">
          Frequently Asked Questions
        </h2>
        <ul className="flex justify-center gap-10 tracking-wide">
          <li>
            <Link
              to="/GeneralQuestion"
              className="text-zinc-700 hover:underline hover:text-gray-500 font-light"
            >
              General Questions
            </Link>
          </li>
          <li>
            <Link
              to="/Features2"
              className="text-zinc-700 hover:underline hover:text-gray-500 font-light"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/PricingPlan"
              className="text-zinc-700 hover:underline hover:text-gray-500 font-light"
            >
              Pricing & plan
            </Link>
          </li>
        </ul>
      </div>
      <Testing />
    </div>
  );
}
export default FrequentlyAQ;
