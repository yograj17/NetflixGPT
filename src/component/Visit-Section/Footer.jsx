import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-1">
      <div className="mx-5">
        <div className="bg-red-600 h-14 flex items-center justify-center rounded-full font-semibold text-xl mt-2">
          Wait For Chess Game
        </div>
        <div className="mt-12">
          Questions? Call
          <span className="cursor-pointer underline ml-2">
            000-800-919-1694
          </span>
        </div>
        <div className="mt-6">
          <ul className="underline flex flex-col gap-2">
            <li>FAQ</li>
            <li>Help</li>
            <li>Centre</li>
            <li>Account</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
        <div className="text-3xl mt-4 font-semibold">Netflix India.......!</div>
      </div>
    </div>
  );
};

export default Footer;
