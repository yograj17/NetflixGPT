import React from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="h-24  flex  justify-between px-8 items-center  bg-gradient-to-b from-black/100 via-black/70 to-black/0">
      <img src={LOGO_URL} className="h-14 w-28 cursor-pointer" />
      <button className="bg-red-600 text-white h-8 w-24  rounded-md text-sm font-semibold cursor-pointer">
        Sign Out
      </button>
    </div>
  );
};

export default Header;
