import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <BiArrowBack
        className="cursor-pointer text-3xl m-6"
        onClick={() => navigate("/Cart")}
      />

      <div className="flex items-center justify-center p-4 sm:p-12 pt-0  ">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <h1 className="text-3xl flex items-center gap-2 font-bold mb-8">
            ENTER DETAILS
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-gray-500"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Full Name"
                className="w-full rounded-md border capitalize border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="number"
                    className="mb-3 block text-base font-medium text-gray-500"
                  >
                    Number
                  </label>
                  <input
                    type="number"
                    placeholder="0XXX-XXXXXXX"
                    id="number"
                    className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="alternate-number"
                    className="mb-3 block text-base font-medium text-gray-500"
                  >
                    Alternate Number
                  </label>
                  <input
                    type="number"
                    placeholder="0XXX-XXXXXXX"
                    name="alternate-number"
                    id="alternate-number"
                    className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-gray-500"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-gray-500 sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      placeholder="Enter Area"
                      className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter City"
                      className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="post-code"
                      placeholder="Post Code"
                      className="w-full rounded-md border border-gray-200 bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="w-full rounded-md bg-yellow-400 hover:bg-yellow-500 active:bg-black active:text-yellow-400 py-3 px-4 text-center font-semibold text-lg  outline-none">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
