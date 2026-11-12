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
        <div className="p-6 sm:p-8 border-t-2 border-t-brand md:border-t-0 md:border-l-2 md:border-l-brand text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 text-[#F2F1EE]/85 text-base sm:text-lg font-medium leading-relaxed"
          >
            <p>
              As a <span className="font-semibold text-brand">Backend Developer</span>, I&apos;ve somehow convinced multiple employers that I know what I&apos;m doing with scalable systems:
            </p>

            <ul className="list-none pl-0 space-y-3 text-base">
              <li className="li-accent">
                Shipped production-ready <span className="font-semibold text-brand">multilingual voice agents</span>, <span className="font-semibold text-brand">multi-agent workflows</span>, and <span className="font-semibold text-brand">ingestion pipelines</span> across multiple cloud providers. Completely <span className="font-semibold text-brand">language agnostic</span> thanks to AI <span className="italic text-[#85858D]">(yes, that&apos;s a flex; no, I&apos;m not explaining further)</span>.
              </li>
              <li className="li-accent">
                Participated in late-night debugging sessions when all hell breaks loose on prod — of course with a coffee and sheer stubbornness.
              </li>
              <li className="li-accent">
                Used to enjoy grinding <span className="font-semibold text-brand">DSA</span> problems — back when inverting binary trees felt like a personality trait rather than a hazing ritual.
              </li>
              <li className="li-accent">
                Outside of staring at terminals: a <span className="font-semibold text-brand">cycling enthusiast</span> (survived 100+ km rides during a brief burst of peak motivation), will destroy you at <span className="font-semibold text-brand">badminton 🏸</span>, open to variable-outcome <span className="font-semibold text-brand">Chess ♟️</span>, and binge-watches <span className="font-semibold text-brand">nature documentaries</span> and biology deep-dives.
              </li>
            </ul>

            <p className="text-sm font-medium italic text-brand pt-2">
              Thanks for scrolling this far. Truly remarkable commitment.
            </p>
          </motion.div>
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
