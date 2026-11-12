"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import { Github, Globe } from "lucide-react";
import { REVEAL_UP } from "@/constants/theme";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Section Header */}
      <motion.div
        {...REVEAL_UP}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-b border-white/15 pb-6"
      >
        <span className="tech-label text-brand">03 // EXPERIENCE LOG</span>
        <h2 className="section-h2 text-4xl sm:text-5xl md:text-6xl uppercase text-[#F2F1EE]">
          Experience
        </h2>
        <p className="text-base font-medium italic text-brand">
          (or: places that paid me to do things I&apos;d probably do anyway)
        </p>
      </motion.div>

      {/* Blueprint Timeline */}
      <div className="relative md:pl-8 md:border-l md:border-white/15 flex flex-col gap-10">
        {/* ── Azodha Product Engineer ── */}
        <motion.div
          className="relative border border-white/15 bg-[#15151B]/55 p-6 sm:p-8 hover:border-white/30 transition-colors duration-300 flex flex-col gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Square blueprint timeline node */}
          <div className="hidden md:block absolute -left-[39px] top-7 h-3 w-3 bg-brand border border-[#101014]" />

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between text-center md:text-left gap-4 pb-5 border-b border-white/15">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-[#F2F1EE] p-2 border border-white/15 shrink-0">
                <Image
                  src="https://azodha.com/logo1.svg"
                  alt="Azodha Logo"
                  width={80}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight leading-none text-[#F2F1EE]">
                  Product Engineer (Backend)
                </h3>
                <p className="tech-label text-[#85858D]">
                  AZODHA · SEP 2025 – PRESENT · PUNE, INDIA (HYBRID)
                </p>
              </div>
            </div>
            <LinkPreview url="https://azodha.com">
              <div className="tech-label flex items-center gap-1.5 bg-[#101014] border border-white/15 hover:border-brand text-[#F2F1EE]/80 hover:text-brand px-3 py-2 cursor-pointer transition-colors duration-200 shrink-0">
                <Globe className="h-3.5 w-3.5" />
                <span>Website</span>
              </div>
            </LinkPreview>
          </div>

          <p className="text-sm font-medium italic text-brand text-center md:text-left">
            (They kept me. Interpret that how you will.)
          </p>

          <div className="flex flex-col gap-6">
            {/* 01 // Backend Engineering & System Design */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 pt-1">
                <span className="tech-label text-brand text-[10px]">
                  01 // BACKEND ENGINEERING &amp; SYSTEM DESIGN
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <ul className="list-none pl-0 space-y-2.5 text-[#F2F1EE]/80 font-medium text-base leading-relaxed">
                <li className="li-accent">
                  Migrated a critical production microservice from{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    PostgreSQL LISTEN/NOTIFY
                  </strong>{" "}
                  to a{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    queue-based
                  </strong>{" "}
                  architecture, ensuring durable event processing and zero-downtime cutover while improving reliability and scalability{" "}
                  <span className="text-brand">
                    (because nothing says &apos;character building&apos; like voluntarily refactoring a live production messaging backbone).
                  </span>
                </li>
                <li className="li-accent">
                  Implemented scheduled and delayed job processing using{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    BullMQ
                  </strong>
                  , replacing traditional cron-based scheduling for appointment reminders, notifications, and time-sensitive workflows.
                </li>
                <li className="li-accent">
                  Designed{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    randomized scheduling logic
                  </strong>{" "}
                  for batched notification delivery, distributing job execution across configurable time windows to prevent concurrency spikes and resource exhaustion under load{" "}
                  <span className="text-brand">
                    (because thundering herd problems are only fun when they happen to someone else).
                  </span>
                </li>
                <li className="li-accent">
                  Implemented resilient{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    queue recovery and retry mechanisms
                  </strong>{" "}
                  to detect and recover from silent queue disconnections, helping maintain 100% availability across production workloads.
                </li>
                <li className="li-accent">
                  Architected resilient{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    n8n workflows
                  </strong>{" "}
                  to orchestrate custom client-specific business logic and automate complex operational processes.
                </li>
                <li className="li-accent">
                  Contributed to{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    architectural decisions
                  </strong>{" "}
                  for new client integrations alongside senior engineers, translating business requirements into scalable, reusable service patterns.
                </li>
              </ul>
            </div>

            {/* 02 // Voice Agents & Conversational AI */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 pt-2">
                <span className="tech-label text-brand text-[10px]">
                  02 // VOICE AGENTS &amp; CONVERSATIONAL AI
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <ul className="list-none pl-0 space-y-2.5 text-[#F2F1EE]/80 font-medium text-base leading-relaxed">
                <li className="li-accent">
                  Led the development of{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    AI-powered voice agent capabilities
                  </strong>
                  , building automated call scheduling and recurring patient follow-ups. Integrated{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    Zoho ticket creation
                  </strong>{" "}
                  to capture call-identified tasks, and implemented warm transfers to human clinicians with auto-generated{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    contextual summaries
                  </strong>{" "}
                  <span className="text-brand">
                    (so clinicians actually know why an AI is dumping a phone call into their lap).
                  </span>
                </li>
                <li className="li-accent">
                  Led the rollout of{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    multilingual capabilities
                  </strong>{" "}
                  for the voice agent by evaluating and integrating multiple speech and real-time providers (
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    Deepgram
                  </strong>
                  ,{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    Gladia
                  </strong>
                  ,{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    OpenAI Realtime
                  </strong>
                  ), cutting additional language onboarding time by{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    ~60%
                  </strong>{" "}
                  and reducing vendor lock-in with support for real-time call transfers during clinical escalations.
                </li>
              </ul>
            </div>

            {/* 03 // Clinical AI & Healthcare Automation */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 pt-2">
                <span className="tech-label text-brand text-[10px]">
                  03 // CLINICAL AI &amp; HEALTHCARE AUTOMATION
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <ul className="list-none pl-0 space-y-2.5 text-[#F2F1EE]/80 font-medium text-base leading-relaxed">
                <li className="li-accent">
                  Developed an automated{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    clinical summarization pipeline
                  </strong>{" "}
                  to extract patient-specific clinical insights  diagnoses, interventions, lab results, and orders  from doctors&apos; daily discussion meetings for faster, more reliable clinical reviews.
                </li>
                <li className="li-accent">
                  Engineered an event-driven audio ingestion and transcription pipeline using{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    Azure Event Grid
                  </strong>{" "}
                  and a custom{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    AWS Lambda
                  </strong>{" "}
                  webhook handler, integrating{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    Deepgram Nova-3 Medical
                  </strong>{" "}
                  for medical-domain transcription and a segmentation-based extraction approach to isolate clinical notes by patient.
                </li>
                <li className="li-accent">
                  Designed and developed a{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    multi-agent lab report extraction workflow
                  </strong>
                  , assigning specialized roles across agents for report validation, observation extraction, and evaluation, with model effort tuned across stages to balance extraction quality, latency, and cost.
                </li>
                <li className="li-accent">
                  Developed an{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    evaluation pipeline
                  </strong>{" "}
                  for AI-driven extraction workflows, introducing dedicated validation and assessment stages to continuously measure data quality and improve the reliability of structured clinical data.
                </li>
              </ul>
            </div>

            {/* 04 // Integrations, Workflow Automation & Security */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 pt-2">
                <span className="tech-label text-brand text-[10px]">
                  04 // INTEGRATIONS, AUTOMATION &amp; SECURITY
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <ul className="list-none pl-0 space-y-2.5 text-[#F2F1EE]/80 font-medium text-base leading-relaxed">
                <li className="li-accent">
                  Integrated{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    Zoho Desk
                  </strong>{" "}
                  into clinical workflows, implementing intelligent ticket routing by department and custom ticket fields to capture relevant patient details for seamless context and faster resolution.
                </li>
                <li className="li-accent">
                  Owned{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    API security hardening
                  </strong>{" "}
                  and vulnerability remediation as part of{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    VAPT activities
                  </strong>
                  , reviewing application endpoints, patching vulnerabilities, and coordinating with cybersecurity teams{" "}
                  <span className="text-brand">
                    (proving to penetration testers that our APIs aren&apos;t just leaving the front door unlocked).
                  </span>
                </li>
                <li className="li-accent">
                  Integrated{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    Customer.io
                  </strong>{" "}
                  for event-driven notifications, standardizing templates and tracking to improve delivery reliability and cut time-to-ship new notification flows by{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    ~50%
                  </strong>
                  .
                </li>
                <li className="li-accent">
                  Configured{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    application-wide alert notification systems
                  </strong>{" "}
                  to notify concerned stakeholders and support staff of critical operational events and failures in real time{" "}
                  <span className="text-brand">
                    (because failing silently in production is only peaceful until someone checks the dashboard).
                  </span>
                </li>
                <li className="li-accent">
                  Developed an intelligent{" "}
                  <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                    vendor-ranking and appointment assignment algorithm
                  </strong>{" "}
                  weighted by geographic proximity and availability windows, automating vendor selection{" "}
                  <span className="text-brand">
                    (sparing humans from having to play geographic matchmaker at 9 AM).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Azodha Intern ── */}
        <motion.div
          className="relative border border-white/15 bg-[#15151B]/55 p-6 sm:p-8 hover:border-white/30 transition-colors duration-300 flex flex-col gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hidden md:block absolute -left-[39px] top-7 h-3 w-3 bg-brand/70 border border-[#101014]" />

          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between text-center md:text-left gap-4 pb-5 border-b border-white/15">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-[#F2F1EE] p-2 border border-white/15 shrink-0">
                <Image
                  src="https://azodha.com/logo1.svg"
                  alt="Azodha Logo"
                  width={80}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight leading-none text-[#F2F1EE]">
                  SDE Intern (Backend)
                </h3>
                <p className="tech-label text-[#85858D]">
                  AZODHA · DEC 2024 – AUG 2025 · PUNE, INDIA (HYBRID)
                </p>
              </div>
            </div>
            <LinkPreview url="https://azodha.com">
              <div className="tech-label flex items-center gap-1.5 bg-[#101014] border border-white/15 hover:border-brand text-[#F2F1EE]/80 hover:text-brand px-3 py-2 cursor-pointer transition-colors duration-200 shrink-0">
                <Globe className="h-3.5 w-3.5" />
                <span>Website</span>
              </div>
            </LinkPreview>
          </div>

          <p className="text-sm font-medium italic text-brand text-center md:text-left">
            (Where the imposter syndrome began, and later, suspiciously, faded.)
          </p>

          <motion.ul
            className="list-none pl-0 space-y-3 text-[#F2F1EE]/80 font-medium text-base leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {},
            }}
          >
            {[
              <>
                Assisted with the integration of{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  OpenEMR and ECW
                </strong>{" "}
                systems into our platform for smooth data sharing.
              </>,
              <>
                Developed custom logic for{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Welkin EMR
                </strong>
                , allowing automatic creation of{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  100ms links
                </strong>{" "}
                for patient sessions.
              </>,
              <>
                Contributed to building{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Voice Agents
                </strong>{" "}
                with LiveKit, Deepgram, and OpenAI&apos;s realtime model for automating reminders and verifying users.
              </>,
              <>
                Helped design and deploy{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  RBAC middleware
                </strong>{" "}
                to protect patient information, maintaining{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  HIPAA
                </strong>{" "}
                standards and blocking unauthorized entry in EMR setups.{" "}
                <span className="text-brand">
                  Protecting patient data: both ethically important and the kind of thing you want working correctly before anyone notices.
                </span>
              </>,
              <>
                Set up a{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  token caching system for Lambda using DynamoDB
                </strong>{" "}
                to optimize expenses.
              </>,
              <>
                Worked together on integrating{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Zoho Desk and CRM
                </strong>{" "}
                with our system.
              </>,
              <>
                Created{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  automated processes
                </strong>{" "}
                for handling Zoho ticket generation and scheduling recurring appointments.
              </>,
              <>
                Engaged in{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  production support
                </strong>{" "}
                and troubleshooting with{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  DataDog
                </strong>{" "}
                and{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Signoz
                </strong>{" "}
                logs, aiding in fixing key problems.
              </>,
              <>
                Improved database efficiency by examining Prisma queries via{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  explain analyze
                </strong>
                , boosting response times by{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  20%
                </strong>{" "}
                through better indexing.
              </>,
              <>
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Refactored
                </strong>{" "}
                legacy code to meet{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  industry best practices
                </strong>{" "}
                and teamed up with experienced engineers on designing features and architecture.
              </>,
            ].map((item, i) => (
              <motion.li
                key={i}
                className="li-accent"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ── YourBot ── */}
        <motion.div
          className="relative border border-white/15 bg-[#15151B]/55 p-6 sm:p-8 hover:border-white/30 transition-colors duration-300 flex flex-col gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hidden md:block absolute -left-[39px] top-7 h-3 w-3 bg-brand/45 border border-[#101014]" />

          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between text-center md:text-left gap-4 pb-5 border-b border-white/15">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="p-1.5 border border-white/15 bg-brand/10 shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" className="fill-brand" />
                  <path
                    d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28"
                    stroke="#101014"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                  />
                  <path
                    d="M20 28C17.7909 28 16 26.2091 16 24C16 21.7909 17.7909 20 20 20C22.2091 20 24 21.7909 24 24C24 26.2091 22.2091 28 20 28Z"
                    fill="#101014"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight leading-none text-[#F2F1EE]">
                  Founder   YourBot
                </h3>
                <p className="tech-label text-[#85858D]">
                  SELF-FOUNDED · AWS LAMBDA · SAM · FASTAPI · PINECONE · POSTGRESQL
                </p>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              <LinkPreview url="https://yourbot.ayushoswal.com">
                <div className="tech-label flex items-center gap-1.5 bg-[#101014] border border-white/15 hover:border-brand text-[#F2F1EE]/80 hover:text-brand px-3 py-2 cursor-pointer transition-colors duration-200">
                  <Globe className="h-3.5 w-3.5" />
                  <span>Live</span>
                </div>
              </LinkPreview>
              <LinkPreview url="https://github.com/ayush-oswal/Yourbot">
                <div className="tech-label flex items-center gap-1.5 bg-[#101014] border border-white/15 hover:border-brand text-[#F2F1EE]/80 hover:text-brand px-3 py-2 cursor-pointer transition-colors duration-200">
                  <Github className="h-3.5 w-3.5" />
                  <span>Github</span>
                </div>
              </LinkPreview>
            </div>
          </div>

          <p className="text-sm font-medium italic text-brand text-center md:text-left">
            (Self-appointed, naturally. The equity situation is very favorable.)
          </p>

          <motion.ul
            className="list-none pl-0 space-y-3 text-[#F2F1EE]/80 font-medium text-base leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {},
            }}
          >
            {[
              <>
                Designed a{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  serverless microservices
                </strong>{" "}
                setup with{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  3 AWS Lambda services
                </strong>{" "}
                via{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  SAM templates
                </strong>{" "}
                and{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  ECR
                </strong>
                , cutting infrastructure costs by{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  600%
                </strong>{" "}
                <span className="text-brand">
                  because &quot;we&apos;re running out of money&quot; is a surprisingly effective architectural constraint.
                </span>
              </>,
              <>
                Created{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  custom shell scripts
                </strong>{" "}
                to adapt{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Prisma binaries
                </strong>{" "}
                for Lambda compatibility and implemented AWS Lambda web adapter for{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  streaming responses
                </strong>
                .
              </>,
              <>
                Built an advanced{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  RAG pipeline
                </strong>{" "}
                using{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  JinaAI embeddings
                </strong>{" "}
                and{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Pinecone vector database
                </strong>{" "}
                for semantic searches, handling PDF/text with a{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  0.20 similarity threshold
                </strong>
                .
              </>,
              <>
                Added a{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  multi-LLM fallback system
                </strong>{" "}
                with{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  DeepSeek
                </strong>{" "}
                as main and{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  Gemini 2.0
                </strong>{" "}
                as secondary to maintain service during rate limits.
              </>,
              <>
                Developed a full{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  token economy system
                </strong>{" "}
                providing{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  25,000 default tokens
                </strong>{" "}
                per user, tracking usage, and sending alerts through{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  SMTP email
                </strong>
                .
              </>,
              <>
                Implemented an{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  API key-based
                </strong>{" "}
                chatbot integration with an analytics dashboard for monitoring interactions and easy website embedding.
              </>,
              <>
                Incorporated{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  SQS queues
                </strong>{" "}
                featuring{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  retry mechanisms
                </strong>{" "}
                and{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  DLQs
                </strong>{" "}
                for reliable, fault-tolerant operations.
              </>,
              <>
                Introduced a{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  contextualized chunking
                </strong>{" "}
                approach with{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  50
                </strong>{" "}
                chunk overlap to preserve chunk relationships and enhance retrieval speed by{" "}
                <strong className="text-[#F2F1EE] font-semibold underline decoration-brand/60 underline-offset-4">
                  25%
                </strong>
                .
              </>,
            ].map((item, i) => (
              <motion.li
                key={i}
                className="li-accent"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
