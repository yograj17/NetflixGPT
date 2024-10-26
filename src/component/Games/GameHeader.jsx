import React, { useState } from "react";
import RPS from "./RPS";
import TicTacToe from "./TicTacToe";

const GameHeader = () => {
  let [rps, setrps] = useState(false);
  let [ttt, settt] = useState(false);

  return (
    <div className=" h-screen bg-black">
      <div className="h-1/5 flex bg-black justify-center items-center gap-8 border-b-2 border-gray-400">
        <img
          src="https://i.pinimg.com/736x/79/34/c6/7934c6cf66ceade7c2986687946067b2.jpg"
          className="h-20 w-2h-20 rounded-full"
          onClick={() => {
            settt(false), setrps(true);
          }}
        />
        <img
          src="https://m.media-amazon.com/images/I/411RqsooQ3L.png"
          className="h-20 w-2h-20 rounded-full "
          onClick={() => {
            setrps(false), settt(true);
          }}
        />
      </div>
      {rps ? <RPS /> : ttt ? <TicTacToe /> : false}
    </div>
  );
};

export default GameHeader;
