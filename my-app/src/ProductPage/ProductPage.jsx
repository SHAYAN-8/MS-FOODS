import React, { useEffect } from "react";
import { BiMinus, BiPlus, BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useItemArray } from "../Context/Context";

const ProductPage = () => {
  const { productItem, addToCart } = useItemArray();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (productItem.name == undefined)
    return (
      <div className=" h-screen p-4">
        <Link
          className="text-blue-500 inline-flex items-center text-2xl"
          to={"/"}
        >
          <BiArrowBack className="inline mr-2" /> Go Home
        </Link>
        <h1 className="text-3xl ">Product not Found </h1>
      </div>
    );

  const navigate = useNavigate();
  const { id, name, desc, price, img, carted } = productItem;
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-8 mx-auto">
          <BiArrowBack
            className="cursor-pointer text-3xl"
            onClick={() => navigate(-1)}
          />
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="Product image"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded-lg"
              src={img}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-600 tracking-wider">
                MS FOODS
              </h2>
              <h1 className="text-gray-900 text-3xl capitalize title-font font-medium mb-1">
                {name}
              </h1>
              <div className="flex mb-4 items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs. {price}
                </span>
              </div>
              <p className="text-gray-900">{desc}</p>
              <p className="text-lg font-medium my-2">Special Instructions</p>
              <textarea
                className="w-full border-2 max-h-44	rounded-md p-2 text-md"
                rows={4}
                placeholder="Enter Instructions about this item..."
                defaultValue={""}
              />
              <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex justify-between">
                {/* <div className="flex justify-between gap-2">
                  <BiMinus className="text-4xl cursor-pointer bg-yellow-400 hover:bg-yellow-500 active:bg-gray-800 active:text-yellow-400 rounded-full p-1" />

                  <span className="title-font font-medium text-2xl text-gray-900">
                    4
                  </span>
                  <BiPlus className="text-4xl cursor-pointer bg-yellow-400 hover:bg-yellow-500 active:bg-gray-800 active:text-yellow-400 rounded-full p-1" />
                </div> */}
                <Link className="w-full" to={carted ? "" : "/Cart"}>
                  <button
                    onClick={() => {
                      addToCart(productItem);
                    }}
                    className="w-full text-center ml-auto text-black bg-yellow-400 hover:bg-yellow-500 active:bg-gray-800 active:text-yellow-400 font-semibold border-0 py-2 px-4 text-lg sm:text-xl
 focus:outline-none rounded"
                    disabled={carted}
                  >
                    {carted ? "Carted" : "Add to Cart"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
