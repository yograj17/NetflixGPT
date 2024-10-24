import React from "react";
import Header from "../Header";
import { BG_IMG_URL } from "../../utils/constant";

const VisitPage = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMG_URL})` }}
      >
        <div className="h-full bg-black bg-opacity-70">
          <Header />
          <div className="text-white w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 m-auto mt-24 lg:mt-44 flex flex-col gap-4 sm:gap-6">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-col font-bold justify-center text-center">
              Unlimited movies, TV
              <span className="flex justify-center">shows and more</span>
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex justify-center">
              Starts at ₹149. Cancel at any time.
            </div>
            <div className="flex justify-center bg-red-700 h-12 sm:h-14 lg:h-16 w-40 sm:w-48 lg:w-52 m-auto items-center text-base sm:text-lg lg:text-xl font-semibold rounded-3xl cursor-pointer">
              Thanks For Visiting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitPage;
