import React from "react";
import { assets } from "../assets/assets";
import { Upload } from "lucide-react";

const Header = () => {
  return (
    <div className="h-auto min-h-[80vh] max-w-[90%] mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-center  py-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6">
          Remove the <span className="text-yellow-400">background</span> from
          images for free.
        </h2>

        <p className="w-full md:w-[70%] mb-8 text-sm md:text-base">
          Remove backgrounds from images instantly and for free. Upload, edit,
          and download with ease!
        </p>
        <button className="cursor-pointer rounded-full flex items-center justify-center bg-black text-white px-4 md:px-6 py-2 md:py-3 gap-2 hover:opacity-70 transition-all duration-300 mx-auto text-[12px] md:mx-0">
          <Upload className="w-4" />
          Upload your image
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={assets.header_img}
          alt="Header image"
          className="h-[300px] md:h-[500px] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
