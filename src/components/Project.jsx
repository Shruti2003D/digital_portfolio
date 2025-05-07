
import React, { useState } from "react";
import reactSmooth from "../assets/portfolio/Project3.png";
import Project3 from "../assets/portfolio/project4(mentorbot).png"
import Project2 from "../assets/portfolio/Project2.png"
import Project1 from "../assets/portfolio/Project1.png"

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: Project1,
      gitLink: "https://github.com/Shruti2003D/Capstone-project",
      liveLink: "https://onlinesaleshackathon.netlify.app/",
      title: "Personalized Email Generator",
      description: " Personalized Email Generation and Automation Description: Leverage machine learning and web scraping to generate highly personalized emails for marketing campaigns, extracting relevant data from LinkedIn and creating impactful visual content. Technologies: Machine learning, web scraping, image generation"
    },
    {
      id: 2,
      src: Project2,
      gitLink: "https://github.com/Shruti2003D/age_gendetect",
      liveLink: "https://github.com/TusharJain2000/Backend-using-JavaScript",
      title: "Fusion-Identity",
      description: "Its an innovative AI-ML project designed to accurately predict age and gender through the integration of ensemble learning techniques. Leveraging the power of multiple models working in tandem, this system ensures robust and precise predictions for diverse demographic scenarios"},
    {
      id: 3,
      src: Project3,
      gitLink: "https://github.com/Shruti2003D/decrypt0",
      liveLink: "https://github.com/TusharJain2000/Backend-using-JavaScript",
      title: "MenterBots",
      description: "Menter Bot: A user-friendly learning platform that facilitates course enrollment, study material download, and personalized progress tracking.A modern web application for online learning, featuring course catalogs, user authentication, and study material management."},
 
    {
      id: 4,
      src: reactSmooth,
      gitLink: "https://github.com/TusharJain2000/8085-Microprocessor",
      liveLink: "https://github.com/TusharJain2000/8085-Microprocessor",
      title: "Employee Payroll System ",
      description: "Develop a comprehensive employee management system using Spring MVC, featuring interactive dashboards, payroll and leave management, and robust security features. Technologies: Spring MVC, Java, Database Integration, Security"
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const Modal = ({ project, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full m-4">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Live Demo
            </a>
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">A sampling of my best work, handpicked for your viewing pleasure</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((project) => (
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
                <button 
                  onClick={() => openModal(project)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal
          project={selectedProject}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Portfolio;
