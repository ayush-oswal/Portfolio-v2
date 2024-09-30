"use client";

import { useState } from "react";
import Project from "./project";
import { Fullstack, Frontend, Backend, ProjectSchema } from "@/constants/ProjectInfo"; // Assuming the ProjectInfo is exported from projectInfo.ts

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"Fullstack" | "Frontend" | "Backend">("Fullstack"); // Default tab is Fullstack

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  const projectsByCategory: { [key: string]: ProjectSchema[] } = {
    Fullstack,
    Frontend,
    Backend,
  };

  const currentProjects = projectsByCategory[selectedTab];
  const projectsToShow = showAll ? currentProjects : currentProjects.slice(0, 4);

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</p>
          <p className="md:text-[16px] max-w-[700px] text-[14px] text-gray-500 dark:text-gray-400 text-center">
            Here are a few of my projects showcasing my skills accross a variety of functionalities and tech-stacks.
          </p>
        </div>

        <div className="w-full"> 
          <div className="hidden sm:flex justify-center gap-6 mt-6 mb-6">
            {["Fullstack", "Frontend", "Backend"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setSelectedTab(tab as "Fullstack" | "Frontend" | "Backend");
                  setShowAll(false); // Reset view more when switching tabs
                }}
                className={`text-lg font-semibold py-2 px-6 rounded-md transition-colors duration-300 ${
                  selectedTab === tab
                    ? "bg-blue-700 text-white"
                    : "text-gray-600 hover:bg-blue-600 hover:text-white dark:text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Select for smaller screens */}
          <div className="sm:hidden w-full mt-4">
            <select
              value={selectedTab}
              onChange={(e) => {
                setSelectedTab(e.target.value as "Fullstack" | "Frontend" | "Backend");
                setShowAll(false); // Reset view more when switching tabs
              }}
              className="w-full p-2 text-lg font-semibold rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
            >
              {["Fullstack", "Frontend", "Backend"].map((tab) => (
                <option key={tab} value={tab}>
                  {tab}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsToShow.map((project, index) => (
            <Project
              key={index}
              title={project.Title}
              description={project.Description}
              image={project.Cover}
              github={project.Github}
              live={project.Live}
              video={project.Video}
              skills={project.Stack}
            />
          ))}
        </div>

        {/* View More Button */}
        {currentProjects.length > 4 && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="text-sm text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
