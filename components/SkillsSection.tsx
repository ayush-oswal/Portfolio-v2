"use client";

import { motion } from "framer-motion";
import { REVEAL_UP } from "@/constants/theme";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Javascript", "Typescript", "Python", "Golang", "Java", "C++"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Fast API", "Redux"],
  },
  {
    label: "Databases",
    skills: [
      "PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB",
      "Neo4j", "Pinecone", "ElasticSearch", "Prisma",
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      "Docker", "Kubernetes", "AWS", "Nginx", "EC2 deployments",
      "CI/CD", "Devops", "Kafka", "n8n", "BullMQ",
    ],
  },
  {
    label: "AI & Voice",
    skills: [
      "LLMs", "Voice Agents", "Retrieval Augmented Generation (RAG)",
      "MCP", "SIP Trunking",
    ],
  },
  {
    label: "Tools & Practices",
    skills: [
      "Git", "GitHub", "WebSockets", "WebRtc", "GraphQL", "gRPC",
      "Data Structures", "Algorithms", "System Design", "Microservices",
      "Vitest", "Debugging", "Monitoring and logging",
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
      <motion.div {...REVEAL_UP} className="text-center">
        <p className="pt-8 pb-1 font-bold text-5xl tracking-tight">
          Things I&apos;ve Convinced Interviewers I Know
        </p>
        <p className="text-sm italic pb-4">
          <span className="text-brand">
            {totalSkills} skills   now organized so you can find the ones
            that impress you.
          </span>
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.4,
              delay: gi * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-2.5"
          >
            {/* Category label + rule */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-brand shrink-0">
                {group.label}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium bg-elevated border border-border text-foreground/70 px-3 py-1.5 rounded-md hover:border-brand/35 hover:text-foreground transition-colors duration-200 cursor-default"
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
