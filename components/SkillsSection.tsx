"use client";

import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { REVEAL_UP } from "@/constants/theme";

const skills = [
  "Javascript", "Typescript", "Java", "React", "Redux", "Next.js",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Docker",
  "Data Structures", "Algorithms", "WebSockets", "WebRtc", "Git", "GitHub",
  "C++", "Python", "Fast API", "Golang", "GraphQL", "MySQL",
  "Neo4j", "Pinecone", "LLMs", "System Design", "Redis", "Kafka", "n8n",
  "ElasticSearch", "Kubernetes", "Nginx", "AWS", "Voice Agents", "CI/CD",
  "EC2 deployments", "Vitest", "Retrieval Augmented Generation (RAG)", "MCP",
  "gRPC", "DynamoDB", "Devops", "Debugging", "Monitoring and logging",
  "FHIR", "HL7", "Healthcare Tech", "SIP Trunking", "BullMQ", "Microservices",
];

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <motion.div {...REVEAL_UP} className="text-center">
        <p className="pt-8 pb-1 font-bold text-5xl tracking-tight">
          Things I&apos;ve Convinced Interviewers I Know
        </p>
        <p className="text-sm italic pb-4">
          <span className="text-brand">
            {skills.length} skills. Yes, I counted. No, I&apos;m not sorry.
          </span>
        </p>
      </motion.div>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
          >
            <HoverBorderGradient>{skill}</HoverBorderGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
