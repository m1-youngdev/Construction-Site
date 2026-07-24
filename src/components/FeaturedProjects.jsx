import { useState } from "react";
import { projects } from "../data/projects";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const currentIndex = projects.findIndex(
    (project) => project.id === currentProject.id,
  );

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentProject(projects[nextIndex]);
  };

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    setCurrentProject(projects[prevIndex]);
  };

  return (
    <>
      <div className="projectCard p-8 flex flex-col justify-center items-center">
        <h2 className="font-space text-2xl font-bold mb-4 text-[#000]">Projects</h2>
        <div className="hidden lg:flex gap-4">
          {projects.map((project) => (
            <button key={project.id} onClick={() => setCurrentProject(project)}>
              {project.category}
            </button>
          ))}
        </div>

        <div className="relative rounded-lg bg-[#365CB8] bg-opacity-70 p-2">
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={prevProject}
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#365CB8]/40 text-white flex items-center justify-center backdrop-blur-sm hover:bg-[#284a9c] transition lg:hidden"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextProject}
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#365CB8]/40 text-white flex items-center justify-center backdrop-blur-sm hover:bg-[#284a9c] transition lg:hidden"
            >
              <FaArrowRight />
            </button>
          </div>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="rounded-lg"
          />

          <h2 className="mt-5 font-space text-lg font-semibold text-white">
            {currentProject.title}
          </h2>

          <p className="mt-2 mb-3 font-inter text-md text-white">
            {currentProject.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default FeaturedProjects;
