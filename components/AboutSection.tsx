"use client";

import { motion } from "framer-motion";
import { REVEAL_UP } from "@/constants/theme";

const AboutSection = () => {
  return (
    <motion.div {...REVEAL_UP} className="flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-b border-white/15 pb-6">
        <span className="tech-label text-brand">01 // ABOUT</span>
        <h2 className="section-h2 text-4xl sm:text-5xl md:text-6xl uppercase text-[#F2F1EE]">
          About
        </h2>
        <p className="text-base font-medium italic text-[#85858D]">
          <span className="text-brand">
            (in which I describe myself in third-person like a LinkedIn thought leader)
          </span>
        </p>
      </div>

      {/* Blueprint Copy Container */}
      <div className="border border-white/15 bg-[#15151B]/50">
        <div className="p-6 sm:p-8 border-t-2 border-t-brand md:border-t-0 md:border-l-2 md:border-l-brand text-center md:text-left">
          <motion.p
            className="text-lg font-medium text-[#F2F1EE]/85 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            As a <span className="font-semibold text-brand">Backend Developer</span>, I have somehow
            convinced multiple employers that I know what I&apos;m doing with scalable systems. Along
            the way I&apos;ve shipped production-ready{" "}
            <span className="font-semibold text-brand">multilingual voice agents</span>,{" "}
            <span className="font-semibold text-brand">multi-agent flows</span>, and{" "}
            <span className="font-semibold text-brand">ingestion pipelines</span>, and integrated with{" "}
            <span className="font-semibold text-brand">multiple cloud providers</span>   mostly so no
            single cloud outage can take all the credit for ruining my weekend. I pick up new tech
            stacks at an alarming rate, and I&apos;m{" "}
            <span className="font-semibold text-brand">completely language agnostic</span> now, thanks
            to AI.{" "}
            <span className="italic text-[#85858D]">
              (yes, that&apos;s a flex. no, I&apos;m not explaining further.)
            </span>
            <br />
            <br />
            I also used to enjoy grinding{" "}
            <span className="font-semibold text-brand">DSA</span> problems   back when inverting
            binary trees felt like a personality trait rather than a hazing ritual.
            <br />
            <br />
            Outside of staring at terminals: I&apos;m a{" "}
            <span className="font-semibold text-brand">cycling enthusiast</span> who has survived{" "}
            <span className="font-semibold text-brand">100+ km rides</span> during a brief, dangerous
            episode of peak motivation. I will still absolutely destroy you at{" "}
            <span className="font-semibold text-brand">badminton 🏸</span>, and{" "}
            <span className="font-semibold text-brand">Chess ♟️</span> is also on the table, though
            results there are more... variable. When my legs and Elo both need a break, I have a keen
            interest in <span className="font-semibold text-brand">biology</span> and binge{" "}
            <span className="font-semibold text-brand">nature documentaries</span>   mostly to watch
            apex predators work marginally harder than I do to catch lunch.
            <br />
            <br />
            Having thrived in fast-paced environments wearing multiple hats from{" "}
            <span className="font-semibold text-brand">developing</span> and debugging production
            issues to contributing to business decisions I think I&apos;d be one heck of an addition to your team.
            <br />
            <br />
            <span className="text-brand">
              Thanks for scrolling this far. Truly remarkable commitment.
            </span>
          </motion.p>
        </div>

        {/* Stats Telemetry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 border-t border-white/15 divide-x divide-white/15"
        >
          {[
            { value: "2.5+", label: "YEARS OF EXPERIENCE" },
            { value: "∞", label: "STACK TRACES DEBUGGED" },
          ].map(({ value, label }) => (
            <div key={label} className="p-4 sm:p-5 flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand leading-none">
                {value}
              </span>
              <span className="tech-label text-[#85858D]">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
