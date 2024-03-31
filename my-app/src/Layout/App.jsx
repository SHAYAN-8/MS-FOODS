import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemProvider } from "../Context/Context";

import Layout from "./Layout";
import MainSection from "../MainSection/MainSection";
import AddToCart from "../AddToCart/AddToCart";
import ProductPage from "../ProductPage/ProductPage";
import AboutPage from "../AboutUs/AboutPage";
import ContactPage from "../ContactUs/ContactPage";
import PrivacyPoicy from "../ContactUs/PrivacyPoicy";
import { itemArray } from "../Context/ItemArray";
import toast, { Toaster } from "react-hot-toast";
import CheckOutPage from "../CheckOut/CheckOutPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const App = () => {
  const [itemDetails, setItemDetails] = useState(itemArray);
  const [productItem, setProductItem] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const dynamicPage = (obj) => {
    setProductItem(obj);
  };

  const addToCart = (obj) => {
    setItemDetails((prev) =>
      prev.map((item) =>
        item.id === obj.id ? { ...item, carted: true } : item
      )
    );
    setCartItems((prev) => [...prev, obj]);
    toast.success(`${obj.name} Added to Cart`, {
      style: {
        borderRadius: "30px",
      },
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id != id));
    setItemDetails((prev) =>
      prev.map((item) => (item.id === id ? { ...item, carted: false } : item))
    );
  };
  const amountHandler = (type, id, amount) => {
    setCartItems((prev) =>
      prev.map((prevItem) =>
        prevItem.id === id
          ? { ...prevItem, amount: type ? amount + 1 : amount - 1 }
          : prevItem
      )
    );
  };
  return (
    <ItemProvider
      value={{
        itemDetails,
        cartItems,
        productItem,
        dynamicPage,
        addToCart,
        removeFromCart,
        amountHandler,
      }}
    >
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainSection />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Privacy-Policy" element={<PrivacyPoicy />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Product" element={<ProductPage />} />
            <Route path="/Cart" element={<AddToCart />} />
            <Route path="/Checkout" element={<CheckOutPage />} />
          </Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ItemProvider>
  );
};

export default App;
