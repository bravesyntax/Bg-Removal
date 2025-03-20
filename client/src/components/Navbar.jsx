import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <>
      <div className="flex items-center justify-between w-[100%] max-w-[90%] mx-auto py-5">
        <img
          src={assets.mainLogo}
          alt="Logo"
          className=" w-[130px] sm:w-[225px] "
        />
        {isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            className="cursor-pointer px-4 py-2 rounded-full flex items-center bg-black text-white text-[10px] sm:px-6 sm:py-3 sm:text-sm gap-2 hover:opacity-70 transition-all duration-300"
            onClick={() => openSignIn({})}>
            Get started <ArrowRight className="w-4 h-4" />{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
