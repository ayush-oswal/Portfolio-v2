"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative pt-4 pb-2">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-brand/5 blur-[110px]" />
        <div className="absolute top-0 right-0 h-[260px] w-[260px] rounded-full bg-brand/4 blur-[90px]" />
      </div>

      {/* flex-col-reverse so photo appears above text on mobile */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-center">

        {/* ── Left / Bottom: text ── */}
        <div className="flex flex-col gap-5">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 w-fit bg-brand/10 border border-brand/25 rounded-full px-3 py-1"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            <span className="text-[11px] font-medium text-brand tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base text-muted-foreground font-medium mb-1.5">
              नमस्ते, I&apos;m
            </p>
            <h1 className="text-5xl xl:text-6xl font-bold tracking-tighter leading-[1.04]">
              Ayush{" "}
              <span className="text-gradient">Oswal</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] text-muted-foreground max-w-sm leading-relaxed"
          >
            Product Engineer building resilient microservices, voice agents
            that{" "}
            <span className="text-foreground/80">
              (usually) understand what you said
            </span>
            , and automation workflows that save humans from themselves.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-3 flex-wrap"
          >
            <a
              href="https://drive.google.com/file/d/16gxzkP1sf3WzGYvfOi3vo9J-pI4CLd5K/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-brand text-[#0A0A0A] font-semibold px-5 py-2 rounded-lg text-sm hover:bg-brand/85 transition-colors duration-200"
            >
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:ayushoswal2003@gmail.com"
              className="inline-flex items-center border border-border hover:border-brand/40 text-foreground/70 hover:text-foreground font-medium px-5 py-2 rounded-lg text-sm transition-all duration-200"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex gap-8 pt-1 border-t border-border/50"
          >
            {[
              { value: "2+", label: "Years exp" },
              { value: "13+", label: "Projects" },
              { value: "52", label: "Technologies" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col pt-4">
                <span className="text-2xl font-bold text-brand leading-none">{value}</span>
                <span className="text-xs text-muted-foreground mt-1">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right / Top: photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-brand/15 blur-2xl scale-110" />
            <Image
              src="/me.jpg"
              alt="Ayush Oswal Backend Developer in Pune"
              width={260}
              height={260}
              className="relative w-[160px] md:w-[240px] aspect-square rounded-2xl border border-brand/25 object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;
