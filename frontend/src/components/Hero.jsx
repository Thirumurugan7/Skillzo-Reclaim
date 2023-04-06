import React from "react";
import Form from "./Form_c";
import Footer from "./Footer";
import m1 from "../assets/t1.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="pt-2 ">
      <div className="ml-10">
        <h1 className="text-white text-center font-bold  uppercase text-5xl">
          Get Hired by claiming your skills!
        </h1>
      </div>

      <div className="mt-6 flex jus">
        <ul></ul>
      </div>
      <div className="flex justify-evenly items-center ">
        <img
          src={m1}
          alt=""
          className="w-[50%] rounded-xl shadow-lg shadow-white "
        />
        <div>
          <h2 className="text-white text-center font-semibold py-4 text-2xl ">
            How do we hire?
          </h2>
          <ul className="font-light text-stone-400 lining-nums  list-none ">
            <li className="py-3 hover:text-lg ">
              Looking for relevant text stack
            </li>
            <li className="py-3 hover:text-lg ">Checking for contribution </li>
            <li className="py-3 hover:text-lg ">
              Reviewing the activity level
            </li>
            <li className="py-3 hover:text-lg "></li>
            <li></li>
          </ul>
          <div className="flex justify-center items-center h-[200px]">
            {" "}
            <Link to="/apply">
              {" "}
              <button className="border border-blue bg-blue text-white hover:bg-white hover:text-black rounded-full px-7 py-4  ">
                Click to apply for jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br />

      <Footer />
    </div>
  );
};

export default Hero;
