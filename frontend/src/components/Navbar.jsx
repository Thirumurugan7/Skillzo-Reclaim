import React from "react";
import logo from "../assets/sunil_logo.png";
import l1 from "../assets/thiru.png";
import l2 from "../assets/vishal.png";

export const Navbar = () => {
  return (
    <div>
      <div className="flex text-white pt-10 ">
        <div className="logo ml-20 flex justify-center items-center">
          <img
            src={l2}
            alt="logo"
            className="bg-transparent w-[100px] h-[100px] object-cover pb-[70px] z-100000 "
          />
        </div>
        <div className="flex flex-1 justify-end mr-10 ">
          <div className="flex  justify-evenly gap-4 mr-10 text-lg ">
            <a href="" className="hover:text-yellow">
              Home
            </a>
            <a href="" className="hover:text-yellow">
              About
            </a>
            <a href="" className="hover:text-yellow">
              Apply for Jobs
            </a>
            <a href="" className="hover:text-yellow">
              Claim your reward
            </a>
            <a href="" className="hover:text-yellow">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
