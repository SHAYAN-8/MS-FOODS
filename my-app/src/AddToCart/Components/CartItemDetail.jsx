import React from "react";
import { BiMinus, BiPlus, BiTrashAlt } from "react-icons/bi";
import { useItemArray } from "../../Context/Context";

const CartItemDetail = ({ obj }) => {
  const { id, name, desc, price, img, amount } = obj;
  const { removeFromCart, amountHandler } = useItemArray();
  const total = amount * price;
  return (
    <div className="mt-4 w-full">
      <div className="flex flex-col sm:flex-row border-b border-gray-200 py-2">
        <div className="flex-shrink-0">
          <img
            src={img}
            alt="Product image"
            className="w-32 h-32 object-cover rounded"
          />
        </div>
        <div className="mt-0 w-full sm:ml-6">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="mt-2 text-gray-600 line-clamp-1">{desc}</p>
          <div className="mt-4 flex items-center">
            <span className="mr-2 text-gray-600 font-semibold">Quantity:</span>
            <div className="flex items-center">
              {amount > 1 ? (
                <button
                  onClick={() => amountHandler(false, id, amount)}
                  className="bg-yellow-400  hover:bg-yellow-500 active:bg-black active:text-yellow-400 cursor-pointer rounded-l-lg p-1 text-xl font-bold"
                >
                  <BiMinus />
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(id)}
                  className="bg-yellow-400  hover:bg-yellow-500 active:bg-black active:text-yellow-400 cursor-pointer rounded-l-lg p-1 text-xl font-bold"
                >
                  <BiTrashAlt />
                </button>
              )}
              <span className="mx-4 text-xl font-semibold text-gray-600">
                {amount}
              </span>
              <button
                onClick={() => amountHandler(true, id, amount)}
                className="bg-yellow-400 hover:bg-yellow-500 active:bg-black active:text-yellow-400 cursor-pointer rounded-r-lg p-1 text-xl"
              >
                <BiPlus />
              </button>
            </div>
            <span className="ml-auto text-lg font-semibold">Rs. {total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemDetail;
