"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { REVEAL_UP, REVEAL_FADE } from "@/constants/theme";

const ExtrasSection = () => {
  return (
    <motion.div {...REVEAL_UP} className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-2 text-brand">A Brief Intermission for Scale</h2>
      <hr className="border-border mt-4 mb-6 mx-auto max-w-xs" />
      <p className="text-sm italic mb-6 max-w-xl mx-auto">
        <span className="text-brand">
          You&apos;ve now read about microservices, DSA, and at least one cost optimization.
          Before you email me about a potential opportunity, Carl Sagan would like a word.
        </span>
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/pbd.png"
          alt="Pale Blue Dot"
          width={500}
          height={500}
          className="mx-auto mb-4 border border-brand/50 accent-glow rounded-lg"
        />
      </motion.div>
      <motion.div
        {...REVEAL_FADE}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-lg text-muted-foreground max-w-2xl mx-auto"
      >
        Consider again that dot. That&apos;s here. That&apos;s home. That&apos;s us. Every person who ever lived,
        loved, and struggled did so on this tiny speck. It holds the entirety of human experience
        our joys and sorrows, our conflicts and triumphs. This pale blue dot, suspended in a sunbeam,
        is a poignant reminder of our shared humanity and the fragility of our existence in the
        vastness of space. It calls upon us to transcend divisions, cherish our common heritage, and
        strive for a future where humanity works together to protect our fragile home in the cosmos.
      </motion.div>
      <div className="italic text-right pt-4 text-muted-foreground text-sm max-w-2xl mx-auto">
        Carl Sagan
      </div>
    </motion.div>
  );
};

export default ExtrasSection;
