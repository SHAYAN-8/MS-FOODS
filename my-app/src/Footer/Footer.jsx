import React from "react";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 mt-4">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-3 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-3 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <MdFastfood className="text-3xl text-yellow-400" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              MS FOODS
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/About"} className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/Privacy-Policy"}
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to={"/Contact"} className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <span>MS FOODS™</span>. All Rights Reserved. Created by{" "}
          <a
            className="text-gray-300 mx-1 tracking-wide hover:text-white hover:underline underline-offset-2 "
            href="https://www.linkedin.com/in/ms-programmers/"
            target="_blank"
          >
            M&S PROGRAMMERS
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
