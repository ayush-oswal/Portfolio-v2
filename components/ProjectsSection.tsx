"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Project from "./project";
import {
  Fullstack,
  Frontend,
  Backend,
  ProjectSchema,
} from "@/constants/ProjectInfo";
import { REVEAL_UP } from "@/constants/theme";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTab, setSelectedTab] = useState<
    "All" | "Fullstack" | "Frontend" | "Backend"
  >("All");

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  const allProjects = [...Fullstack, ...Frontend, ...Backend];

  const projectsByCategory: { [key: string]: ProjectSchema[] } = {
    All: allProjects,
    Fullstack,
    Frontend,
    Backend,
  };

  const currentProjects = projectsByCategory[selectedTab];
  const projectsToShow = showAll
    ? currentProjects
    : currentProjects.slice(0, 4);

  return (
    <div className="flex flex-col gap-8">
      {/* Section Header */}
      <motion.div
        {...REVEAL_UP}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-b border-white/15 pb-6"
      >
        <span className="tech-label text-brand">04 // SELECTED WORK</span>
        <h2 className="section-h2 text-4xl sm:text-5xl md:text-6xl uppercase text-[#F2F1EE]">
          Projects
        </h2>
        <p className="text-lg font-medium text-[#85858D] max-w-2xl leading-relaxed">
          A curated selection of things I built, shipped, and then immediately thought of ten
          ways to improve.{" "}
          <span className="text-brand">
            Displayed here so you can judge them instead of me.
          </span>
        </p>
      </motion.div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="hidden sm:inline-flex border border-white/15 divide-x divide-white/15 bg-[#15151B]">
          {(["All", "Fullstack", "Frontend", "Backend"] as const).map((tab) => {
            const count = projectsByCategory[tab].length;
            const isSelected = selectedTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setSelectedTab(tab);
                  setShowAll(false);
                }}
                className={`tech-label px-5 py-2.5 transition-colors duration-200 ${
                  isSelected
                    ? "bg-brand text-[#101014]"
                    : "text-[#85858D] hover:text-[#F2F1EE] hover:bg-[#1C1C24]"
                }`}
              >
                {tab} [{String(count).padStart(2, "0")}]
              </button>
            );
          })}
        </div>

        {/* Select for smaller screens */}
        <div className="sm:hidden w-full">
          <select
            value={selectedTab}
            onChange={(e) => {
              setSelectedTab(
                e.target.value as "All" | "Fullstack" | "Frontend" | "Backend"
              );
              setShowAll(false);
            }}
            className="tech-label w-full px-3 py-2.5 bg-[#15151B] border border-white/15 text-[#F2F1EE] focus:outline-none focus:border-brand"
          >
            {(["All", "Fullstack", "Frontend", "Backend"] as const).map(
              (tab) => (
                <option key={tab} value={tab} className="bg-[#15151B]">
                  {tab} [{String(projectsByCategory[tab].length).padStart(2, "0")}]
                </option>
              )
            )}
          </select>
        </div>

        <span className="tech-label text-[#85858D]">
          SHOWING {String(projectsToShow.length).padStart(2, "0")} OF{" "}
          {String(currentProjects.length).padStart(2, "0")}
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsToShow.map((project, index) => (
          <motion.div
            key={`${selectedTab}-${project.Title}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Project
              index={index}
              title={project.Title}
              description={project.Description}
              image={project.Cover}
              github={project.Github}
              live={project.Live}
              video={project.Video}
              skills={project.Stack}
            />
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      {currentProjects.length > 4 && (
        <div className="flex justify-center pt-2">
          <button
            onClick={handleViewMore}
            className="tech-label border border-white/15 hover:border-brand bg-[#15151B] text-brand px-6 py-3 transition-colors duration-200"
          >
            {showAll ? "Okay That's Enough ↑" : "Fine, Show Me More ↓"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
