import React from "react";

export const Banner = () => {
  return (
    <img src="banner.jpg" className="w-full max-h-screen min-h-40 h-auto" />
  );
};

export const BannerLoading = () => {
  return (
    <div
      role="status"
      className="flex items-center justify-center h-96 w-100 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    ></div>
  );
};
