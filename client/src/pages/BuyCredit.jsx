import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="h-auto sm:min-h-[75vh] w-full max-w-[90%] sm:max-w-[70%] mx-auto py-6 px-4">
      <div className="flex flex-col items-center text-center">
        {/* Tagline */}
        <p className="py-2 px-6 border w-max mb-4 rounded-3xl border-amber-400 text-gray-400 text-sm sm:text-base">
          Our plans
        </p>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl  lg:text-4xl text-gray-400 tracking-wider mb-8">
          Choose the plan that’s right for you
        </h1>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[100%]">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-gray-50 rounded-lg p-6 shadow-md text-start hover:scale-105 transition-all duration-500">
              <img
                src={assets.logo_icon}
                alt="LogoIcon"
                className="mb-3 w-10 h-10"
              />
              <p className="font-semibold text-lg">{plan.id}</p>
              <p className="font-light mb-3 text-sm text-gray-600">
                {plan.desc}
              </p>
              <p className="text-2xl sm:text-3xl mb-4">
                {plan.price} <span className="text-xs">/ {plan.credits}</span>
              </p>
              <button className="w-full mt-4 bg-black text-white py-2 sm:py-2 rounded-md hover:opacity-60 cursor-pointer transition-all duration-300">
                {plan.name === "Pro" ? "Purchase" : "Get started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyCredit;
