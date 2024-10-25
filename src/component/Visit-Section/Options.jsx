import React from "react";
import { optionData } from "../../utils/optionData";

const Options = () => {
  return (
    <div className="bg-black text-white py-1">
      <div className=" text-xl font-semibold mx-5">More reasons to join</div>
      <div className="mx-5 my-4 flex flex-col items-center gap-3">
        {optionData.map((key, index) => (
          <div
            className="h-56 w-80 rounded-3xl p-6 relative bg-gradient-to-br from-blue-500/40 via-pink-500/30 to-purple-500/20"
            key={index}
          >
            <div className="text-xl font-bold">{key.heading}</div>
            <div className="mt-3">{key.info}</div>
            <div className="h-16 w-16 absolute bottom-4 right-7">
              {key.logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
