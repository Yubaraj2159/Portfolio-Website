import React from "react";
import { FolderKanban } from "lucide-react";
import Tilt from "react-parallax-tilt";

const projects = [
  { title: "StockEase", description: "A stock management system made using PHP.", link: "#" },
  { title: "TripMate", description: "A trip planning system UI made using React and Tailwind.", link: "#" },
  { title: "Jewellery Shop Management System", description: "A system made using .NET.", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold text-indigo-500 flex justify-center items-center gap-2 mb-10">
        <FolderKanban /> Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <Tilt key={idx} tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.2} scale={1.05}>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-indigo-400 hover:underline">View Project</a>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
