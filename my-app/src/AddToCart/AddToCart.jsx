import React from "react";
import { HiEmojiHappy } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CartItemDetail from "./Components/CartItemDetail";
import { useItemArray } from "../Context/Context";
import Total from "./Components/Total";

const AddToCart = () => {
  let navigate = useNavigate();
  const { cartItems } = useItemArray();
  if (cartItems.length == 0) {
    return (
      <div className="flex flex-col sm:flex-row items h-screen p-4">
        <h1 className="text-3xl inline">Your cart is empty</h1>
        <Link
          className="inline-flex items-center justify-center bg-yellow-400 mt-4 sm:mt-0 sm:ml-4 hover:bg-yellow-500 active:bg-black active:text-yellow-400 font-semibold text-xl w-40 h-10 rounded"
          to={"/"}
        >
          <HiEmojiHappy className="inline text-3xl mr-2" /> Order Now
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl flex items-center gap-2 font-bold my-4">
            <BiArrowBack
              className="cursor-pointer text-3xl"
              onClick={() => {
                navigate("/");
              }}
            />
            YOUR CART
          </h1>
          <Link
            to={"/Checkout"}
            className="bg-yellow-400 text-center hover:bg-yellow-500 active:bg-black active:text-yellow-400 font-semibold py-2 px-4 rounded"
          >
            Checkout
          </Link>
        </div>

        {cartItems.map((item) => (
          <CartItemDetail key={item.id} obj={item} />
        ))}

        <Total cartItems={cartItems} />
      </div>
    </>
  );
};

export default AddToCart;
