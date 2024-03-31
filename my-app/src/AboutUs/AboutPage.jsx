import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="overflow-hidden pt-6 pb-12  lg:pb-[50px] bg-white dark:bg-dark">
        <BiArrowBack
          className="cursor-pointer text-3xl m-4 mx-8"
          onClick={() => navigate(-1)}
        />
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://img.freepik.com/premium-photo/chef-cooking-kitchen-with-pots-pans_197463-2199.jpg?w=740"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://img.freepik.com/premium-photo/delicious-meal-gourmet-restaurant-dish-fresh-food-lunch-dinner_919857-2454.jpg?w=740"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://img.freepik.com/premium-photo/different-colorful-meals-dark-wooden-table-restaurant_135427-8101.jpg?w=360"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-8 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  MS FOODS
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Make you happy by giving services.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  Welcome to MS Food! We love making yummy and healthy meals for
                  you. Our chefs use the best ingredients to create tasty
                  options for everyone. Whether you're a pro in the kitchen or
                  just want a quick meal, MS Food has something special for you.
                  We care about quality and deliciousness, making each bite a
                  happy experience. Join us in enjoying good food that's made
                  with love!
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  At MS Food, we believe in simplicity and goodness. Our
                  dedication to quality extends beyond ingredients to the joy
                  each bite brings. From our kitchen to your table, we're here
                  to make every meal a delightful experience.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
