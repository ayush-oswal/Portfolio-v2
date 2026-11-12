"use client";

import { motion } from "framer-motion";
import { REVEAL_UP } from "@/constants/theme";

const skillGroups = [
  {
    label: "Languages",
    subnote: "(I'm language agnostic btw!)",
    skills: ["Javascript", "Typescript", "Python", "C++"],
  },
  {
    label: "Frameworks",
    skills: ["Node.js", "Express.js", "Fast API"],
  },
  {
    label: "Databases & ORMs",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "DynamoDB",
      "Neo4j",
      "Pinecone",
      "ElasticSearch",
      "Prisma",
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Nginx",
      "CI/CD",
      "Kafka",
      "n8n",
    ],
  },
  {
    label: "Message Brokers",
    skills: ["BullMQ", "AWS SQS", "RabbitMQ"],
  },
  {
    label: "AI & Voice",
    skills: [
      "Agentic AI",
      "Multi-lingual Voice Agents",
      "Retrieval Augmented Generation (RAG)",
      "MCP",
      "SIP Trunking",
    ],
  },
  {
    label: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "WebSockets",
      "WebRtc",
      "GraphQL",
      "gRPC",
      "Data Structures",
      "Algorithms",
      "System Design",
      "Microservices",
      "Vitest",
      "Debugging",
      "Monitoring and logging",
    ],
  },
  {
    label: "Healthcare",
    skills: ["FHIR", "HL7", "Healthcare Tech"],
  },
];

const totalSkills = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Section Header */}
      <motion.div
        {...REVEAL_UP}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-b border-white/15 pb-6"
      >
        <span className="tech-label text-brand">
          02 // CAPABILITIES &amp; STACK
        </span>
        <h2 className="section-h2 text-4xl sm:text-5xl md:text-6xl uppercase text-[#F2F1EE]">
          Things I&apos;ve Convinced Interviewers I Know
        </h2>
        <p className="text-base font-medium italic text-brand">
          {totalSkills} skills   now organized so you can find the ones that impress you.
        </p>
      </motion.div>

      {/* Blueprint Matrix */}
      <div className="border-t border-l border-white/15 bg-[#15151B]/40">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.35,
              delay: gi * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-r border-b border-white/15 p-5 sm:p-6 flex flex-col items-center md:items-stretch gap-4"
          >
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 w-full">
              <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                <span className="tech-label text-[#85858D]">
                  [{String(gi + 1).padStart(2, "0")}]
                </span>
                <span className="tech-label text-brand">{group.label}</span>
                {group.subnote && (
                  <span className="tech-label text-[#85858D] text-[10px] lowercase tracking-normal italic">
                    {group.subnote}
                  </span>
                )}
              </div>
              <span className="tech-label text-[#85858D]">
                {String(group.skills.length).padStart(2, "0")} ITEMS
              </span>
            </div>

            {/* Technical Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="tech-label bg-[#101014] border border-white/15 text-[#F2F1EE]/80 px-3 py-1.5 hover:border-brand hover:text-brand transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
