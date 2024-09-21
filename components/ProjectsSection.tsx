"use client"

import { useState } from "react";
import Project from "./project";
import ProjectInfo from "@/constants/ProjectInfo"; // Assuming the ProjectInfo is exported from projectInfo.ts

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(!showAll); // Toggle the state to show/hide more projects
  };

  // Only display the first 4 projects if showAll is false, else display all
  const projectsToShow = showAll ? ProjectInfo : ProjectInfo.slice(0, 4);

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Projects
          </p>
          <p className="md:text-[16px] max-w-[700px] text-[14px] text-gray-500 dark:text-gray-400 text-center">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleViewMore}
          className="text-sm text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
