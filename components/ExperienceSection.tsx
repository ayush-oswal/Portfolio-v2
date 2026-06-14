"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import { Github, Globe } from "lucide-react";
import { REVEAL_UP } from "@/constants/theme";

const ExperienceSection = () => {
  return (
    <div className="mt-20">
      <motion.div {...REVEAL_UP} className="text-center mb-16">
        <p className="text-5xl font-bold tracking-tight">Experience</p>
        <p className="text-sm italic mt-2">
          <span className="text-brand">
            (or: places that paid me to do things I&apos;d probably do anyway)
          </span>
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-brand/55 via-brand/15 to-transparent" />

        <div className="flex flex-col gap-16">

          {/* ── Azodha Product Engineer ── */}
          <motion.div
            className="relative pl-12 flex flex-col gap-5"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute left-[13px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_10px_rgba(200,255,0,0.55)]" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="bg-white/90 rounded-md p-1.5 border border-border shrink-0">
                  <Image
                    src="https://azodha.com/logo1.svg"
                    alt="Azodha Logo"
                    width={80}
                    height={20}
                    className="h-5 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug">
                    Product Engineer (Backend)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Azodha · Sep 2025 – Present · Pune, India (Hybrid)
                  </p>
                </div>
              </div>
              <LinkPreview url="https://azodha.com">
                <div className="flex items-center gap-1.5 bg-elevated hover:bg-surface border border-border hover:border-brand/40 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200 shrink-0">
                  <Globe className="h-3.5 w-3.5 text-foreground/60" />
                  <p className="text-xs text-foreground/60">Website</p>
                </div>
              </LinkPreview>
            </div>
            <p className="text-xs italic text-brand -mt-2">
              (They kept me. Interpret that how you will.)
            </p>

            <motion.ul
              className="list-none pl-0 space-y-2 text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
            >
              {[
                <>Cautiously migrated a critical microservice from <strong className="underline underline-offset-2">PostgreSQL LISTEN/NOTIFY</strong> to a <strong className="underline underline-offset-2">queue-based</strong> architecture, ensuring <strong className="underline underline-offset-2">durability</strong> and <strong className="underline underline-offset-2">zero downtime</strong> during the cutover  {" "}<span className="text-brand">because nothing says &apos;career growth&apos; like voluntarily touching a critical production service.</span></>,
                <>Leveraged <strong className="underline underline-offset-2">BullMQ</strong> to implement scheduled and delayed background jobs, reducing the operational overhead of maintaining traditional <strong className="underline underline-offset-2">cron infrastructure</strong>.</>,
                <>Architected resilient <strong className="underline underline-offset-2">n8n workflows</strong> to orchestrate custom client logic.</>,
                <>Led the rollout of <strong className="underline underline-offset-2">multilingual</strong> capability for the voice agent by evaluating and integrating multiple ASR/real-time providers (<strong className="underline underline-offset-2">Deepgram</strong>, <strong className="underline underline-offset-2">Gladia</strong>, <strong className="underline underline-offset-2">OpenAI Realtime</strong>), reducing vendor lock-in and cutting new language onboarding time by <strong className="underline underline-offset-2">~60%</strong>, with support for <strong className="underline underline-offset-2">real-time call transfers</strong> in case of clinical escalations. <span className="text-brand">Turns out making machines understand humans in multiple languages is harder than it sounds. Surprising nobody.</span></>,
                <>Integrated <strong className="underline underline-offset-2">Customer.io</strong> for a client to power event-driven notifications, standardizing templates and tracking to improve notification delivery reliability and reduce time-to-ship new notification flows by <strong className="underline underline-offset-2">~50%</strong>.</>,
                <>Implemented a resilient <strong className="underline underline-offset-2">retry mechanism</strong> to handle silent queue disconnections, maintaining <strong className="underline underline-offset-2">100% availability</strong> across production workloads.</>,
                <>Contributed to <strong className="underline underline-offset-2">architectural decisions</strong> alongside senior engineers for onboarding new clients, translating custom business requirements into scalable, reusable service patterns.</>,
                <>Designed <strong className="underline underline-offset-2">randomized scheduling logic</strong> for batched notification delivery, distributing execution across time windows to eliminate concurrency spikes and prevent resource exhaustion under load.</>,
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="li-accent text-sm"
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── Azodha Intern ── */}
          <motion.div
            className="relative pl-12 flex flex-col gap-5"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute left-[13px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand/65 shadow-[0_0_8px_rgba(200,255,0,0.35)]" />

            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="bg-white/90 rounded-md p-1.5 border border-border shrink-0">
                  <Image
                    src="https://azodha.com/logo1.svg"
                    alt="Azodha Logo"
                    width={80}
                    height={20}
                    className="h-5 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug">
                    SDE Intern (Backend)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Azodha · Dec 2024 – Aug 2025 · Pune, India (Hybrid)
                  </p>
                </div>
              </div>
              <LinkPreview url="https://azodha.com">
                <div className="flex items-center gap-1.5 bg-elevated hover:bg-surface border border-border hover:border-brand/40 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200 shrink-0">
                  <Globe className="h-3.5 w-3.5 text-foreground/60" />
                  <p className="text-xs text-foreground/60">Website</p>
                </div>
              </LinkPreview>
            </div>
            <p className="text-xs italic text-brand -mt-2">
              (Where the imposter syndrome began, and later, suspiciously, faded.)
            </p>

            <motion.ul
              className="list-none pl-0 space-y-2 text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
            >
              {[
                <>Assisted with the integration of <strong className="underline underline-offset-2">OpenEMR and ECW</strong> systems into our platform for smooth data sharing.</>,
                <>Developed custom logic for <strong className="underline underline-offset-2">Welkin EMR</strong>, allowing automatic creation of <strong className="underline underline-offset-2">100ms links</strong> for patient sessions.</>,
                <>Contributed to building <strong className="underline underline-offset-2">Voice Agents</strong> with LiveKit, Deepgram, and OpenAI&apos;s realtime model for automating reminders and verifying users.</>,
                <>Helped design and deploy <strong className="underline underline-offset-2">RBAC middleware</strong> to protect patient information, maintaining <strong className="underline underline-offset-2">HIPAA</strong> standards and blocking unauthorized entry in EMR setups. <span className="text-brand">Protecting patient data: both ethically important and the kind of thing you want working correctly before anyone notices.</span></>,
                <>Set up a <strong className="underline underline-offset-2">token caching system for Lambda using DynamoDB</strong> to optimize expenses.</>,
                <>Worked together on integrating <strong className="underline underline-offset-2">Zoho Desk and CRM</strong> with our system.</>,
                <>Created <strong className="underline underline-offset-2">automated processes</strong> for handling Zoho ticket generation and scheduling recurring appointments.</>,
                <>Engaged in <strong className="underline underline-offset-2">production support</strong> and troubleshooting with <strong className="underline underline-offset-2">DataDog</strong> and <strong className="underline underline-offset-2">Signoz</strong> logs, aiding in fixing key problems.</>,
                <>Improved database efficiency by examining Prisma queries via <strong className="underline underline-offset-2">explain analyze</strong>, boosting response times by <strong className="underline underline-offset-2">20%</strong> through better indexing.</>,
                <><strong className="underline underline-offset-2">Refactored</strong> legacy code to meet <strong className="underline underline-offset-2">industry best practices</strong> and teamed up with experienced engineers on designing features and architecture.</>,
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="li-accent text-sm"
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── YourBot ── */}
          <motion.div
            className="relative pl-12 flex flex-col gap-5"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute left-[13px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand/40 shadow-[0_0_6px_rgba(200,255,0,0.2)]" />

            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="rounded-md p-1.5 border border-border bg-blue-500/10 shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="8" fill="#3B82F6" />
                    <path
                      d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 28C17.7909 28 16 26.2091 16 24C16 21.7909 17.7909 20 20 20C22.2091 20 24 21.7909 24 24C24 26.2091 22.2091 28 20 28Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug">
                    Founder   YourBot
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Self-founded · AWS Lambda · SAM · FastAPI · Pinecone · PostgreSQL
                  </p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <LinkPreview url="https://yourbot.ayushoswal.com">
                  <div className="flex items-center gap-1.5 bg-elevated hover:bg-surface border border-border hover:border-brand/40 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200">
                    <Globe className="h-3.5 w-3.5 text-foreground/60" />
                    <p className="text-xs text-foreground/60">Live</p>
                  </div>
                </LinkPreview>
                <LinkPreview url="https://github.com/ayush-oswal/Yourbot">
                  <div className="flex items-center gap-1.5 bg-elevated hover:bg-surface border border-border hover:border-brand/40 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200">
                    <Github className="h-3.5 w-3.5 text-foreground/60" />
                    <p className="text-xs text-foreground/60">Github</p>
                  </div>
                </LinkPreview>
              </div>
            </div>
            <p className="text-xs italic text-brand -mt-2">
              (Self-appointed, naturally. The equity situation is very favorable.)
            </p>

            <motion.ul
              className="list-none pl-0 space-y-2 text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
            >
              {[
                <>Designed a <strong className="underline underline-offset-2">serverless microservices</strong> setup with <strong className="underline underline-offset-2">3 AWS Lambda services</strong> via <strong className="underline underline-offset-2">SAM templates</strong> and <strong className="underline underline-offset-2">ECR</strong>, cutting infrastructure costs by <strong className="underline underline-offset-2">600%</strong>  {" "}<span className="text-brand">because &quot;we&apos;re running out of money&quot; is a surprisingly effective architectural constraint.</span></>,
                <>Created <strong className="underline underline-offset-2">custom shell scripts</strong> to adapt <strong className="underline underline-offset-2">Prisma binaries</strong> for Lambda compatibility and implemented AWS Lambda web adapter for <strong className="underline underline-offset-2">streaming responses</strong>.</>,
                <>Built an advanced <strong className="underline underline-offset-2">RAG pipeline</strong> using <strong className="underline underline-offset-2">JinaAI embeddings</strong> and <strong className="underline underline-offset-2">Pinecone vector database</strong> for semantic searches, handling PDF/text with a <strong className="underline underline-offset-2">0.20 similarity threshold</strong>.</>,
                <>Added a <strong className="underline underline-offset-2">multi-LLM fallback system</strong> with <strong className="underline underline-offset-2">DeepSeek</strong> as main and <strong className="underline underline-offset-2">Gemini 2.0</strong> as secondary to maintain service during rate limits.</>,
                <>Developed a full <strong className="underline underline-offset-2">token economy system</strong> providing <strong className="underline underline-offset-2">25,000 default tokens</strong> per user, tracking usage, and sending alerts through <strong className="underline underline-offset-2">SMTP email</strong>.</>,
                <>Implemented an <strong className="underline underline-offset-2">API key-based</strong> chatbot integration with an analytics dashboard for monitoring interactions and easy website embedding.</>,
                <>Incorporated <strong className="underline underline-offset-2">SQS queues</strong> featuring <strong className="underline underline-offset-2">retry mechanisms</strong> and <strong className="underline underline-offset-2">DLQs</strong> for reliable, fault-tolerant operations.</>,
                <>Introduced a <strong className="underline underline-offset-2">contextualized chunking</strong> approach with <strong className="underline underline-offset-2">50</strong> chunk overlap to preserve chunk relationships and enhance retrieval speed by <strong className="underline underline-offset-2">25%</strong>.</>,
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="li-accent text-sm"
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
