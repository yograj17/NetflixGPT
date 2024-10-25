import React from "react";
import Header from "../Header";
import { BG_IMG_URL } from "../../utils/constant";
import { CgGames } from "react-icons/cg";
import MovieList from "./MovieList";
import Option from "./Options";
import Question from "./Question";
import Footer from "./Footer";

const VisitPage = () => {
  return (
    <div className="scroll-smooth">
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMG_URL})` }}
      >
        <div className="h-full bg-black bg-opacity-75">
          <Header />
          <div className="text-white w-10/12 m-auto mt-36 flex flex-col gap-4">
            <div className="text-3xl font-bold flex justify-center items-center flex-col ">
              Unlimited movies,
              <span className="flex justify-center">TV shows and more</span>
            </div>
            <div className="text-lg font-medium flex justify-center">
              Starts at ₹149. Cancel at any time.
            </div>
            <div className="flex justify-center bg-red-600 h-12 w-60 gap-2 m-auto items-center text-lg mt-6  font-semibold rounded-3xl cursor-pointer">
              Games <CgGames className="h-7 w-9" />
            </div>
          </div>
        </div>
      </div>
      <MovieList />
      <Option />
      <Question />
      <Footer/>
    </div>
  );
};

export default VisitPage;
