import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <div className="w-full mx-auto max-w-[90%] sm:max-w-[65%] my-12 p-4 sm:p-5 border rounded-xl">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Original Image */}
        <div>
          <p className="mb-3 text-sm md:text-base">Original image</p>
          <img
            src={assets.image_w_bg}
            alt="Original image"
            className="rounded-xl w-full border h-auto"
            loading="lazy"
          />
        </div>

        {/* Background Removed Image */}
        <div>
          <p className="mb-3 text-sm md:text-base">Background removed</p>
          <div className="relative rounded-xl bg-gray-100 border">
            <img
              src={assets.image_wo_bg}
              alt="Image without background"
              className="rounded-xl  h-auto object-contain"
              loading="lazy"
            />
            {/* Uncomment for loading spinner */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-amber-400 rounded-full h-12 w-12 border-t-transparent animate-spin border-4"></div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-end mt-5 gap-3 sm:gap-5">
        <button className="border px-4 md:px-6 py-2 rounded-3xl border-amber-400 text-sm md:text-base w-full sm:w-auto cursor-pointer hover:bg-amber-50 transition-all duration-300">
          Try another image
        </button>
        <button className="border px-4 md:px-6 py-2 rounded-3xl bg-amber-400 border-amber-400 text-sm md:text-base w-full sm:w-auto cursor-pointer hover:bg-amber-300 transition-all duration-300">
          Download image
        </button>
      </div>
    </div>
  );
};

export default Result;
