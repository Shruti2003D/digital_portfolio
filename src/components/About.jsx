import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <div>
  <p className="text-xl mt-4">
    Hi, my name is <span className="font-bold">{"Shruti Dhumal"}</span> and I am currently a <span className="font-bold">{"BTech Student"}</span>
    {" "}studying in <span className="font-bold">{"Mit Academy Of Engineering"}</span> pursuing <span className="font-bold">{"Bachelors in Technology in Computer Science and Engineering."}</span>
  </p>
  <p className="text-xl mt-4">
    I'm currently interning as a <span className="font-bold">{"Software Development Engineer"}</span> at <span className="font-bold">{"Candescent"}</span>, where I'm leading the development of digital banking solutions. Prior to this, I completed a successful internship at <span className="font-bold">{"Colgate"}</span> as a <span className="font-bold">{"Data Engineering Intern"}</span> for 6 months.
  </p>
  <p className="text-xl mt-4">
    My long-term goal is to become a <span className="font-bold">{"Technical Lead"}</span> in a renowned tech company and contribute to the development of innovative solutions that can benefit society.
  </p>
</div>
</div>
</div>
</div>

  );
};

export default About;