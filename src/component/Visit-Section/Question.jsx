import React from "react";
import { questionData } from "../../utils/questionData";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Question = () => {
  return (
    <div className="bg-black border-white text-white py-1">
      <div className=" text-xl font-semibold mx-5">
        Frequently Asked Questions
      </div>
      <div className="mx-5 my-4 flex flex-col gap-4">
        {questionData.map((key, index) => (
          <div
            className="h-14 flex items-center px-4 text-lg bg-white bg-opacity-15 hover:bg-opacity-20 cursor-pointer"
            key={index}
          >
            {key.heading}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
