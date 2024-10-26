import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const SignInPage = () => {
  let [Pass, setPass] = useState(false);
  let [Confiass, setConfiass] = useState(false);
  let [SignUP, setSignUP] = useState(false);

  let passviewHandler = () => {
    setPass((pre) => !pre);
  };
  let confipassviewHandler = () => {
    setConfiass((pre) => !pre);
  };

  return (
    <div className="bg-black text-white ">
      <div className=" h-24  flex px-5 items-center ">
        <NavLink className="">
          <img src={LOGO_URL} className="h-14 w-32" />
        </NavLink>
      </div>
      <div className=" flex flex-col px-8 gap-4 border-b border-b-slate-600">
        <div className="text-3xl font-bold mt-4 ">
          {SignUP ? "Sign Up" : "Sign In"}
        </div>
        <div className=" mt-6 h-14">
          <input
            type="email"
            placeholder="E-Mail"
            className="text-white bg-blue-600 bg-opacity-20 h-full w-full  px-4 rounded-lg border border-white  text-lg"
          />
        </div>
        <div className=" h-14 relative">
          <input
            type={Pass ? "text" : "password"}
            placeholder="Password"
            className="text-white bg-blue-600 bg-opacity-20 h-full w-full px-4 rounded-lg border border-white text-lg"
          />
          {Pass ? (
            <FaRegEyeSlash
              className="absolute bottom-4 right-4 h-5 w-5"
              onClick={passviewHandler}
            />
          ) : (
            <FaRegEye
              className="absolute bottom-4 right-4 h-5 w-5"
              onClick={passviewHandler}
            />
          )}
        </div>
        {SignUP ? (
          <div className=" h-14 relative">
            <input
              type={Confiass ? "text" : "password"}
              placeholder="Confirm Password"
              className="text-white bg-blue-600 bg-opacity-20 h-full w-full px-4 rounded-lg border border-white text-lg"
            />
            {Confiass ? (
              <FaRegEyeSlash
                className="absolute bottom-4 right-4 h-5 w-5"
                onClick={confipassviewHandler}
              />
            ) : (
              <FaRegEye
                className="absolute bottom-4 right-4 h-5 w-5"
                onClick={confipassviewHandler}
              />
            )}
          </div>
        ) : (
          false
        )}

        <button className="bg-red-700 h-12 rounded-xl mt-4 font-semibold">
          {SignUP ? "Sign Up" : "Sign In"}
        </button>
        <div>Forgot password?</div>
        <div>
          {SignUP ? "Already Sign Up" : "New to Netflix?"}
          <span
            className="text-blue-700 ml-2 font-semibold"
            onClick={() => setSignUP((pre) => !pre)}
          >
            {SignUP ? "Sign In now" : "Sign Up now"}
          </span>
          .
        </div>
        <div className="h-32 mt-6 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-700">Learn more</span>.
        </div>
      </div>
      <div className="px-8">
        <div className="mt-12">Questions? Call 000-800-919-1694</div>

        <div className="flex justify-between mt-6 ">
          <div className="flex flex-col gap-4">
            <span className="w-24 underline">FAQ</span>
            <span className="underline">Help Centre</span>
            <span className="underline">Terms of Use</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="underline">Privacy</span>
            <span className="underline">Cookie Preferences</span>
            <span className="underline">Corporate Information</span>
          </div>
        </div>
        <div className="mt-10  h-14 text-2xl font-bold">Netflix-GPT......!</div>
      </div>
    </div>
  );
};

export default SignInPage;
