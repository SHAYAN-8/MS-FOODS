import { MdFastfood } from "react-icons/md";
import React from "react";
import ViewCartBtn from "./Components/ViewCartBtn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-gray-800 w-full top-0 sm:px-4 px-3 sm:py-3 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to={"/"}
            className="text-white flex items-start gap-1 font-semibold text-2xl"
          >
            <MdFastfood className="text-3xl text-yellow-400" />
            MS FOODS
          </Link>
          <ViewCartBtn />
        </div>
      </nav>
    </>
  );
};

export default Header;
