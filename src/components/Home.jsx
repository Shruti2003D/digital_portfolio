import React from "react";
import Profilephoto from "../assets/profilephoto.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-evenly h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-3xl sm:text-7xl font-bold text-white">
            Hi, I'm Shruti Dhumal
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
              currently a{" "}
              <span className="font-bold">{"B.Tech CSE Student"}</span>
               {" "} studying in{" "}<span className="font-bold">{"MIT Academy of Engineering"}</span>, Alandi  Maharashtra. 
          </p>

          <div>
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="h-fit">
          <img
            src={Profilephoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-60 max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
