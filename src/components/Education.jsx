import React from "react"; // Add your education background image
import mitImg from "../assets/portfolio/mit.jpeg"; // Add MIT college image
import vatsalyaImg from "../assets/portfolio/vatsalya.jpg"; // Add Vatsalya college image 
import parikramaImg from "../assets/portfolio/parikrama.jpg"; // Add Parikrama school image

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "MIT Academy Of Engineering",
      duration: "2021 - 2025",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management",
      grade: "CGPA: 9.4/10",
      image: mitImg
    },
    {
      id: 2,
      degree: "Higher Secondary School ",
      institution: "The Vatsalya College",
      duration: "2019-2021",
      description: "Relevant coursework: PCM ",
      grade: "Percentage: 90%",
      image: vatsalyaImg
    },
    {
      id: 3,
      degree: "Secondary School Certificate",
      institution: "Parikrama Public School",
      duration: "2019",
      grade: "Percentage: 95%",
      image: parikramaImg
    },
  ];

  return (
    <div 
      name="Education" 
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen relative"
    >
     
      
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          <p className="py-6">My academic journey</p>
        </div>

        <div className="grid gap-8 px-12 sm:px-0">
          {educationData.map(({ id, degree, institution, duration, description, grade, image }) => (
            <div 
              key={id} 
              className="shadow-md shadow-gray-600 rounded-lg p-6 backdrop-blur-sm bg-black bg-opacity-50 flex"
            >
              <div className="w-1/4 mr-6">
                <img 
                  src={image} 
                  alt={institution}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="w-3/4">
                <h3 className="text-2xl font-bold text-white mb-2">{degree}</h3>
                <h4 className="text-xl text-gray-300 mb-2">{institution}</h4>
                <p className="text-blue-500 mb-2">{duration}</p>
                <p className="text-gray-400 mb-2">{description}</p>
                <p className="text-green-500">{grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "DataEngineering Intern",
      company: "Colgate Global Buisness",
      duration: "Aug 2024 - Jan 2025",
      description: [
        "Served as intern at Colgate Global Business Service as Data Engineer",
        "Managed SQL/NoSQL databases and optimized performance",
        "Utilized AWS for deployment and Docker for containerization"
      ],
      technologies: ["Python", "Snowflake", "Terraform", "GCP"]
    },
    {
        id: 1,
        role: "Software Development Intern",
        company: "Decrytp0",
        duration: "Jun 2024 - Aug 2024",
        description: [
          "Developed and maintained web applications using React.js and Node.js",
          "Collaborated with team members to implement new features",
          "Improved application performance by 30%"
        ],
        technologies: ["React", "Node.js", "MongoDB", "AWS"]
      },
    // Add more experience entries as needed
  ];

  return (
    <div name="Experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">My professional journey</p>
        </div>

        <div className="grid gap-8 px-12 sm:px-0">
          {experienceData.map(({ id, role, company, duration, description, technologies }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{role}</h3>
              <h4 className="text-xl text-gray-300 mb-2">{company}</h4>
              <p className="text-blue-500 mb-4">{duration}</p>
              <ul className="list-disc list-inside mb-4">
                {description.map((item, index) => (
                  <li key={index} className="text-gray-400 mb-1">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Education, Experience };
