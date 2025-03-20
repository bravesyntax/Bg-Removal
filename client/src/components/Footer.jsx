import React from "react";
import { assets } from "../assets/assets";
import { Facebook, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-white py-4">
      <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl mx-auto px-4 gap-4 md:gap-6">
        {/* Left Section */}
        <div className="flex flex-wrap items-center justify-center sm:justify-items-start gap-4">
          <img src={assets.mainLogo} alt="Logo" width={140} />
          <div className="sm:border-l pl-3 text-xs sm:text-sm border-gray-200">
            All rights reserved. Copyright BG.REMOVAL
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className=" items-center gap-4 hidden sm:flex">
          <Facebook className="hover:opacity-50 transition-all duration-300 cursor-pointer w-5" />
          <Twitter className="hover:opacity-50 transition-all duration-300 cursor-pointer w-5" />
          <Github className="hover:opacity-50 transition-all duration-300 cursor-pointer w-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
