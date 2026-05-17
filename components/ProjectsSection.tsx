"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Project from "./project";
import { Fullstack, Frontend, Backend, ProjectSchema } from "@/constants/ProjectInfo";
import { REVEAL_UP } from "@/constants/theme";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"All" | "Fullstack" | "Frontend" | "Backend">("All");

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
  const projectsToShow = showAll ? currentProjects : currentProjects.slice(0, 4);

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.div {...REVEAL_UP} className="flex flex-col gap-2 items-center">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</p>
          <motion.p
            className="md:text-[16px] max-w-[700px] text-[14px] text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            A curated selection of things I built, shipped, and then immediately thought of ten
            ways to improve.{" "}
            <span className="text-brand">
              Displayed here so you can judge them instead of me.
            </span>
          </motion.p>
        </motion.div>

        <div className="w-full">
          <div className="hidden sm:flex justify-center gap-6 mt-6 mb-6">
            {["All", "Fullstack", "Frontend", "Backend"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setSelectedTab(tab as "All" | "Fullstack" | "Frontend" | "Backend");
                  setShowAll(false);
                }}
                className={`text-lg font-semibold py-2 px-6 rounded-md transition-all duration-200 ${
                  selectedTab === tab
                    ? "bg-brand text-[#0A0A0A] font-bold shadow-accent-sm"
                    : "text-muted-foreground hover:text-brand hover:bg-elevated"
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
                setSelectedTab(e.target.value as "All" | "Fullstack" | "Frontend" | "Backend");
                setShowAll(false);
              }}
              className="w-full p-2 text-lg font-semibold rounded-md bg-surface border border-border text-foreground"
            >
              {["All", "Fullstack", "Frontend", "Backend"].map((tab) => (
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
            <motion.div
              key={`${selectedTab}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Project
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
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200"
            >
              {showAll ? (
                <span className="text-brand">Okay That&apos;s Enough</span>
              ) : (
                <span className="text-brand">Fine, Show Me More</span>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
