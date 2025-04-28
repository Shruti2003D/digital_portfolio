import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg pt-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-4">
          Hi, my name is<span className="font-bold">{" Shruti Milind Dhumal"}</span> and I am currently a{" "}
          <span className="font-bold">{" BTech  Student"}</span>
          {" "} studying in{" "}<span className="font-bold">{"MIT Academy of engineering"}</span> pursuing <span className="font-bold">{" Bachelors in Technology in Computer Science."}</span> 
        </p>
        <br />
        <p className="text-xl">I'm currently interning at <span className="font-bold">{"Candescent"}</span> where I'm gaining hands-on experience in the field. Prior to this, I completed a successful internship<span className="font-bold">{"Colgate"}</span>as a Data Engineer for 6 months. </p>

        <br />

        <p className="text-xl">
        In my free time, I enjoy playing carrom and traveling,I am always seeking new experiences and love to keep myself engaged and learning new things.
        </p>
      </div>
    </div>
  );
};

export default About;
