import React from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className=" h-24 border border-black flex items-center gap-96 pl-40">
      <img src={LOGO_URL} className=" h-20 w-40" />
      <button className="bg-red-600 text-white h-9 w-28 rounded-lg font-semibold text-base ml-[500px]">
        Sign Out
      </button>
    </div>
  );
};

export default Header;
