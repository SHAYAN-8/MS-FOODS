import React, { useRef, useState } from "react";

const Total = ({ cartItems }) => {
  const delivery = 200;
  const code = "First Order";
  const discountPercent = 20;

  const discountPercentage = (100 - discountPercent) * 0.01;
  const inputRef = useRef(null);
  const [discount, setDiscount] = useState(1);
  const handleDiscount = () => {
    const value = inputRef.current.value;
    if (value == code) {
      setDiscount(discountPercentage);
    }
  };
  return (
    <div className="flex flex-col gap-10 sm:flex-row justify-between items-center mt-14">
      <div className="flex w-full sm:w-fit">
        <input
          type="text"
          id="hero-field"
          placeholder={`Enter ${code}`}
          name="hero-field"
          ref={inputRef}
          className="w-full bg-opacity-50 rounded-tl-lg rounded-bl-lg border border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <button
          onClick={handleDiscount}
          className="inline-flex bg-yellow-400 hover:bg-yellow-500 active:bg-black active:text-yellow-400  border-0 py-2 px-4 focus:outline-none font-semibold  rounded-tr-lg rounded-br-lg text-lg"
        >
          Apply
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full sm:gap-2 sm:w-fit">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 mr-4">Delivery:</span>
          <span className="text-lg font-semibold">Rs. {delivery}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 mr-4">Grand Total:</span>
          <span className="text-lg font-semibold">
            Rs.{" "}
            {cartItems.reduce(
              (acc, cur) => acc + cur.amount * cur.price,
              delivery
            ) * discount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Total;
