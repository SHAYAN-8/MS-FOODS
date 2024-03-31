import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItemArray } from "../../Context/Context";

const Card = ({ id, name, desc, price, img, amount, carted }) => {
  const { dynamicPage, addToCart, cartItems } = useItemArray();
  const obj = { id, name, desc, price, img, amount, carted };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md flex">
      <Link
        onClick={() => {
          dynamicPage(obj);
        }}
        to={"Product"}
        className="w-80 sm:w-96"
      >
        <img
          className="h-40 w-full object-contain sm:h-full "
          src={img}
          alt="Product Image"
        />
      </Link>
      <div className="p-2 sm:py-6 sm:px-6">
        <div className="text-lg text-gray-600 font-semibold">{name}</div>
        <p className="mt-2 text-gray-500 line-clamp-1 sm:line-clamp-2">
          {desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center mt-2">
          <span className="text-gray-700 mb-2 sm:my-0 font-bold mr-2">
            Rs.{price}
          </span>

          <button
            onClick={() => addToCart(obj)}
            className="px-4 py-1 w-full sm:w-fit sm:py-2 font-semibold bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:shadow-outline-indigo active:bg-gray-800 active:text-yellow-300"
            type="button"
            disabled={carted}
          >
            {carted ? "Carted" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
