"use client";

import { motion } from "framer-motion";
import { REVEAL_UP } from "@/constants/theme";

const AboutSection = () => {
  return (
    <motion.div {...REVEAL_UP}>
      <p className="pb-2 font-bold text-5xl text-center">About</p>
      <p className="text-sm text-center mb-6 italic">
        <span className="text-brand">
          (in which I describe myself in third-person like a LinkedIn thought leader)
        </span>
      </p>
      <div className="border-l-2 border-brand/40 pl-5">
        <motion.p
          className="text-[15px] text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          As a <span className="font-semibold text-brand">Backend Developer</span>, I have somehow
          convinced multiple employers that I know what I&apos;m doing with scalable systems. I pick up
          new tech stacks at an alarming rate — whether that&apos;s a superpower or a coping mechanism
          is still being evaluated. I&apos;m also{" "}
          <span className="font-semibold text-brand">completely language agnostic</span> now, thanks
          to AI. <span className="italic text-muted-foreground">(yes, that&apos;s a flex. no, I&apos;m not explaining further.)</span>
          <br /><br />
          I also enjoy solving <span className="font-semibold text-brand">DSA</span> problems, which
          is either intellectual curiosity or a character flaw depending on who you ask.
          <br /><br />
          Outside of staring at terminals: I will absolutely destroy you at{" "}
          <span className="font-semibold text-brand">badminton 🏸</span>.{" "}
          <span className="font-semibold text-brand">Chess ♟️</span> is also on the table,
          though results there are more... variable.
          <br /><br />
          Currently in the &quot;learning <span className="font-semibold text-brand">AI</span>&quot; phase
          that every developer is contractually obligated to go through, and patiently waiting to
          build a <span className="font-semibold text-brand">SaaS</span> product that will definitely
          disrupt the space and certainly not be abandoned after two weekends.
          <br /><br />
          <span className="text-brand">Thanks for scrolling this far. Truly remarkable commitment.</span>
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-8 flex-wrap pt-6 mt-6 border-t border-border"
        >
          {[
            { value: "17mo", label: "Professional exp"      },
            { value: "13+",  label: "Projects shipped"      },
            { value: "52",   label: "Technologies"          },
            { value: "∞",    label: "Stack traces debugged" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl font-bold text-brand leading-none">{value}</span>
              <span className="text-xs text-muted-foreground mt-1">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
