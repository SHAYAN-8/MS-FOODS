import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useItemArray } from "../../Context/Context";

const ViewCartBtn = () => {
  let { cartItems } = useItemArray();
  return (
    <>
      <Link
        to={"/Cart"}
        className="flex py-2 sm:px-3 px-2 rounded-full items-center sm:space-x-3 space-x-2 text-black transition-all duration-200 bg-yellow-400 hover:bg-yellow-500 active:bg-transparent active:text-yellow-400"
      >
        <FiShoppingCart className="text-2xl" />
        <div className="font-semibold group-hover:text-gray-300">
          Cart :<span> {cartItems.length} </span>
        </div>
      </Link>
    </>
  );
};

export default ViewCartBtn;
