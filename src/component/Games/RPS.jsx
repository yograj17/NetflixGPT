import React, { useEffect, useState } from "react";
import { RPSelement } from "../../utils/constant";

const RPS = () => {
  const [randomNumber, setRandomNumber] = useState(1);
  const [Mynum, setMynum] = useState(1);
  const [Ocount, setOcount] = useState(0);
  const [Ycount, setYcount] = useState(0);
  const [result, setResult] = useState("");

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 3) + 1);
  };

  let RandomNumHandler = (num) => {
    generateRandomNumber();
    setMynum(num);
  };

  useEffect(() => {
    const getResult = () => {
      if (randomNumber === Mynum) {
        return "Draw";
      } else if (
        (randomNumber === 1 && Mynum === 2) ||
        (randomNumber === 2 && Mynum === 3) ||
        (randomNumber === 3 && Mynum === 1)
      ) {
        setYcount((prevCount) => prevCount + 1);
        return "You Win";
      } else {
        setOcount((prevCount) => prevCount + 1);
        return "Opponent Win";
      }
    };

    setResult(getResult());
  }, [randomNumber, Mynum]);

  return (
    <div className="h-4/5 bg-black text-white flex items-center">
      <div className="  w-full flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg font-semibold m-auto flex justify-center items-center">
            {`Opponent - ( ${Ocount} )`}
          </div>
          <img
            src={
              randomNumber === 1
                ? RPSelement.rock
                : randomNumber === 2
                ? RPSelement.paper
                : RPSelement.sessior
            }
            className="rounded-full h-20 w-20 mt-2 border"
          />
        </div>
        <div className="border-y w-full text-lg font-semibold flex justify-center items-center">
          {result}
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={
              Mynum === 1
                ? RPSelement.rock
                : Mynum === 2
                ? RPSelement.paper
                : RPSelement.sessior
            }
            className="rounded-full h-20 w-20 border"
          />
          <div className="text-lg font-semibold flex justify-center items-center mt-2">
            {`You - ( ${Ycount} )`}
          </div>
        </div>
        <div className=" flex gap-5 ">
          <img
            src={RPSelement.rock}
            className="rounded-full h-20 w-20"
            onClick={() => RandomNumHandler(1)}
          />
          <img
            src={RPSelement.paper}
            className="rounded-full h-20 w-20"
            onClick={() => RandomNumHandler(2)}
          />
          <img
            src={RPSelement.sessior}
            className="rounded-full h-20 w-20"
            onClick={() => RandomNumHandler(3)}
          />
        </div>
        <div className=" text-lg font-semibold">Choose Option</div>
        <div
          className=" text-lg font-semibold border w-28 flex justify-center items-center rounded-full"
          onClick={() => {
            setYcount(0), setOcount(0);
          }}
        >
          Again
        </div>
      </div>
    </div>
  );
};

export default RPS;
