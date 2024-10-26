import React, { useState } from "react";
import { questionData } from "../../utils/questionData";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Question = () => {
  let [Arrow, setArrow] = useState(new Array(6).fill(false));

  let clickHandler = (index) => {
    setArrow((prevArrow) => {
      // const newArrow = [...prevArrow];
      // newArrow[index] = !newArrow[index];
      // return newArrow;
      let newArrow = prevArrow.map((key, i) => (i == index ? !key : false));
      return newArrow;
    });
  };

  return (
    <div className="bg-black border-white text-white py-4">
      <div className=" text-xl font-semibold mx-5">
        Frequently Asked Questions
      </div>
      <div className="mx-5 my-4 flex flex-col gap-4">
        {questionData.map((key, index) => (
          <div className="" key={index}>
            <div
              className="h-14 flex items-center px-4 text-lg justify-between bg-white bg-opacity-15 hover:bg-opacity-20 cursor-pointer"
              onClick={() => clickHandler(index)}
            >
              <div>{key.heading}</div>
              <div className="">
                {Arrow[index] == true ? (
                  <RxCross2 className="h-6 w-6 cursor-pointer" />
                ) : (
                  <FaChevronDown className="h-6 w-6 cursor-pointer" />
                )}
              </div>
            </div>
            {Arrow[index] == true ? (
              <div className="bg-white bg-opacity-40 text-black p-4">
                {key.info}
              </div>
            ) : (
              false
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
