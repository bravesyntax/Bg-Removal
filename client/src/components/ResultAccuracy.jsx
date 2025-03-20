import React, { useState } from "react";
import { assets } from "../assets/assets";

const ResultAccuracy = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const sliderHandlerChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight mb-6 md:mb-10 text-gray-900">
        Remove Background With <br className="hidden md:block" /> High Quality
        and Accuracy
      </h1>

      {/* Image Comparison Container */}
      <div className="relative w-full max-w-3xl mx-auto h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-2xl border bg-gray-100">
        {/* Image with Background */}
        <img
          src={assets.image_w_bg}
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transition: "clip-path 0.3s ease-in-out",
          }}
          alt="With Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Image without Background */}
        <img
          src={assets.image_wo_bg}
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            transition: "clip-path 0.3s ease-in-out",
          }}
          alt="Without Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Divider Line & Circular Drag Button */}
        <div
          className="absolute top-0 bottom-0 w-[3px] md:w-[4px] bg-white shadow-md transition-all"
          style={{
            left: `${sliderPosition}%`,
            transform: "translateX(-50%)",
          }}></div>

        <div
          className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-blue-500 border-4 border-white rounded-full shadow-lg cursor-pointer"
          style={{ left: `${sliderPosition}%` }}></div>

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={sliderHandlerChange}
          className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 appearance-none bg-transparent cursor-pointer z-20"
          style={{
            WebkitAppearance: "none",
            appearance: "none",
            height: "4px",
            background: "transparent",
            outline: "none",
          }}
        />
      </div>

      {/* Instruction */}
      <p className="text-center mt-4 md:mt-6 text-sm md:text-lg text-gray-600">
        Drag the slider to compare the images
      </p>
    </div>
  );
};

export default ResultAccuracy;
