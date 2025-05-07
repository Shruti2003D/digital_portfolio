import React from "react";
import Profilephoto from "../assets/profilephoto.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full transform transition-all duration-500 hover:translate-y-[-10px]">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-2 animate-fade-in-down duration-500"> Software Developer at Candescent </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-gray-300 mb-4 animate-fade-in-down duration-500"> Shruti Dhumal </h3>
          <p className="text-gray-400 py-4 max-w-md animate-fade-in duration-2000 animate-slide-in-right "> 
            A Full Stack Developer specializing in Salesforce backend development at Candescent, building robust solutions for US banking systems. 
          </p>
          <div>
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="transform transition-all duration-500 hover:scale-105">
          <img
            src={Profilephoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-72 md:w-96 shadow-lg shadow-cyan-500 hover:shadow-xl hover:shadow-cyan-600 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;