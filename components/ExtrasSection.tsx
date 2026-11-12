"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { REVEAL_UP, REVEAL_FADE } from "@/constants/theme";

const ExtrasSection = () => {
  return (
    <motion.div {...REVEAL_UP} className="flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-b border-white/15 pb-6">
        <span className="tech-label text-brand">06 // INTERMISSION</span>
        <h2 className="section-h2 text-4xl sm:text-5xl md:text-6xl uppercase text-[#F2F1EE]">
          A Brief Intermission for Scale
        </h2>
        <p className="text-base font-medium italic text-brand max-w-2xl">
          You&apos;ve now read about microservices, DSA, and at least one cost optimization.
          Before you email me about a potential opportunity, Carl Sagan would like a word.
        </p>
      </div>

      {/* Blueprint Frame */}
      <div className="border border-white/15 bg-[#15151B]/55 p-6 sm:p-8 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/15 bg-[#101014] max-w-lg mx-auto w-full"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/15">
            <span className="tech-label text-[#85858D]">VOYAGER_1</span>
            <span className="tech-label text-brand">6.4B_KM // PALE_BLUE_DOT</span>
          </div>
          <div className="p-2">
            <Image
              src="/pbd.png"
              alt="Pale Blue Dot"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          {...REVEAL_FADE}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="border-t-2 border-t-brand pt-5 md:pt-0 md:border-t-0 md:border-l-2 md:border-l-brand md:pl-6 max-w-2xl mx-auto text-center md:text-left"
        >
          <p className="text-lg font-medium text-[#F2F1EE]/85 leading-relaxed">
            Consider again that dot. That&apos;s here. That&apos;s home. That&apos;s us. Every person who ever lived,
            loved, and struggled did so on this tiny speck. It holds the entirety of human experience
            our joys and sorrows, our conflicts and triumphs. This pale blue dot, suspended in a sunbeam,
            is a poignant reminder of our shared humanity and the fragility of our existence in the
            vastness of space. It calls upon us to transcend divisions, cherish our common heritage, and
            strive for a future where humanity works together to protect our fragile home in the cosmos.
          </p>
          <div className="tech-label text-[#85858D] pt-4 text-center md:text-right">
            CARL SAGAN
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExtrasSection;
