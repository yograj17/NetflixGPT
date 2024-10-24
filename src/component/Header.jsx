import React from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="h-24 border border-black flex items-center justify-between px-4 lg:px-20 lg:gap-72 md:gap-96 md:pl-40">
      <img
        src={LOGO_URL}
        className="h-16 w-32 md:h-20 md:w-40 lg:h-24 lg:w-48"
      />
      <button className="bg-red-600 text-white h-9 w-28 rounded-lg font-semibold text-sm md:text-base lg:text-lg">
        Sign Out
      </button>
    </div>
  );
};

export default Header;
