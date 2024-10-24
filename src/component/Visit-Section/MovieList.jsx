import React from "react";
import { moviesData } from "../../utils/moviesData";

const MovieList = () => {
  return (
    <div className="bg-black text-white py-7">
      <div className="mx-5 sm:mx-10 lg:mx-40 text-xl sm:text-2xl lg:text-3xl font-semibold">
        Trending Now
      </div>
      <div className="relative mx-5 sm:mx-10 lg:mx-44 mt-7">
        <div
          className="whitespace-nowrap overflow-x-scroll scrollbar-hide"
          style={{
            scrollbarWidth: "none",
          }}
        >
          {moviesData.map((key, index) => (
            <span
              className="inline-block mr-5 sm:mr-10 lg:mr-20 relative"
              key={index}
            >
              <img
                className="h-40 sm:h-60 lg:h-72 rounded-2xl hover:scale-95 transition duration-300 cursor-pointer"
                src={key.url}
                alt={`Movie ${index + 1}`}
              />
              <h1 className="absolute top-1 left-1 text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-100">
                {index + 1}
              </h1>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
