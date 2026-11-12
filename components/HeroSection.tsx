"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HERO_GALLERY = [
  {
    src: "/me.jpg",
    alt: "Ayush Oswal in Pune, India",
    code: "IMG_01",
    tag: "PUNE_IN",
    leftMeta: "18.52°N",
    rightMeta: "73.85°E",
    imgClass: "object-cover object-center",
    priority: true,
  },
  {
    src: "/-7deg.jpg",
    alt: "Ayush Oswal trekking in snow at -7 degrees Celsius",
    code: "IMG_02",
    tag: "-18°C",
    leftMeta: "SUB-ZERO",
    rightMeta: "CHILL",
    imgClass: "object-cover object-center",
    priority: false,
  },
  {
    src: "/surf.jpg",
    alt: "Ayush Oswal surfing",
    code: "IMG_03",
    tag: "SURF",
    leftMeta: "ADRENALINE",
    rightMeta: "JUNKIE",
    imgClass: "object-cover object-[center_35%]",
    priority: false,
  },
  {
    src: "/13780ft.jpg",
    alt: "Ayush Oswal at 13,780 ft summit",
    code: "IMG_04",
    tag: "13,780 FT",
    leftMeta: "ALTITUDE",
    rightMeta: "SUMMIT",
    imgClass: "object-cover object-[50%_53%] scale-[1.75]",
    priority: false,
  },
];

const HeroSection = () => {
  return (
    <div className="relative flex flex-col gap-10">
      {/* Top Blueprint Telemetry Strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left gap-3 pb-4 border-b border-white/15"
      >
        <span className="tech-label text-[#85858D]">
          00 // OVERVIEW   BACKEND &amp; AI SYSTEMS
        </span>
        <div className="inline-flex items-center gap-2 border border-brand/40 bg-brand/10 px-3 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full bg-brand opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 bg-brand" />
          </span>
          <span className="tech-label text-brand">
            Available for opportunities
          </span>
        </div>
      </motion.div>

      {/* Main Grid: Massive Display Headline + 2x2 Photo Grid */}
      <div className="flex flex-col-reverse items-center text-center md:text-left md:grid md:grid-cols-[1fr_auto] md:items-center gap-10 lg:gap-12">
        {/* Left: Massive Archivo 900 H1 & Copy */}
        <div className="flex flex-col items-center md:items-start gap-6 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="tech-label text-[#85858D] mb-4">
              नमस्ते // SYSTEM ARCHITECT &amp; PRODUCT ENGINEER
            </p>
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[-0.075em] leading-[0.9] uppercase text-[#F2F1EE]">
              Ayush
              <br />
              <span className="text-brand">Oswal</span>
            </h1>
          </motion.div>

          {/* Lead Paragraph (Inter 500, text-lg) */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg font-medium text-[#85858D] max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Product Engineer building resilient microservices, voice agents that{" "}
            <span className="text-[#F2F1EE] font-semibold">
              (usually) understand what you said
            </span>
            , and automation workflows that save humans from themselves.
          </motion.p>

          {/* Brutalist CTA Controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-start gap-3 flex-wrap pt-1"
          >
            <a
              href="https://drive.google.com/file/d/16gxzkP1sf3WzGYvfOi3vo9J-pI4CLd5K/view"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-label inline-flex items-center gap-2 bg-brand text-[#101014] border border-brand px-5 py-3 hover:bg-brand/90 transition-colors duration-200"
            >
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:ayushoswal2003@gmail.com"
              className="tech-label inline-flex items-center border border-white/15 hover:border-brand text-[#F2F1EE] hover:text-brand bg-[#15151B]/60 px-5 py-3 transition-colors duration-200"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Right / Top: 2x2 Blueprint Photo Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[340px] sm:max-w-[380px] md:w-[300px] lg:w-[340px] xl:w-[380px] grid grid-cols-2 gap-2.5 shrink-0"
        >
          {HERO_GALLERY.map((item) => (
            <div
              key={item.code}
              className="border border-white/15 hover:border-brand bg-[#15151B] transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/15">
                <span className="tech-label text-[#85858D] text-[10px]">
                  {item.code}
                </span>
                <span className="tech-label text-brand text-[10px]">
                  {item.tag}
                </span>
              </div>
              <div className="p-1.5">
                <div className="relative w-full aspect-square overflow-hidden bg-[#101014]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={240}
                    height={240}
                    className={`w-full h-full grayscale-[10%] contrast-105 ${item.imgClass}`}
                    priority={item.priority}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 border-t border-white/15">
                <span className="tech-label text-[#85858D] text-[10px]">
                  {item.leftMeta}
                </span>
                <span className="tech-label text-[#85858D] text-[10px]">
                  {item.rightMeta}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
