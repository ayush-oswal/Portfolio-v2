"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface NavSection {
  id: string;
  num: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: "overview", num: "00", label: "OVERVIEW" },
  { id: "about", num: "01", label: "ABOUT" },
  { id: "skills", num: "02", label: "CAPABILITIES" },
  { id: "experience", num: "03", label: "EXPERIENCE" },
  { id: "projects", num: "04", label: "PROJECTS" },
  { id: "blogs", num: "05", label: "WRITING" },
  { id: "extras", num: "06", label: "INTERMISSION" },
];

const SOCIAL_LINKS = [
  {
    label: "RESUME",
    href: "https://drive.google.com/file/d/16gxzkP1sf3WzGYvfOi3vo9J-pI4CLd5K/view",
  },
  { label: "GITHUB", href: "https://github.com/ayush-oswal" },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/ayush-oswal-16a984258/",
  },
  { label: "TWITTER", href: "https://x.com/Oswal_ayushh" },
  { label: "LEETCODE", href: "https://leetcode.com/u/oswalayush2207/" },
  { label: "EMAIL", href: "mailto:ayushoswal2003@gmail.com" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>("overview");
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const mobileTabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const elements = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.7],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeTab = mobileTabRefs.current[activeId];
    const container = mobileNavRef.current;
    if (activeTab && container) {
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const activeSection =
    NAV_SECTIONS.find((s) => s.id === activeId) ?? NAV_SECTIONS[0];

  return (
    <>
      {/* ── Mobile / Tablet Sticky Top Bar + Horizontal Section Navbar ── */}
      <div className="lg:hidden sticky top-0 z-30 bg-[#101014]/95 backdrop-blur-sm border-b border-white/15">
        <div className="px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="tech-label text-[#F2F1EE] shrink-0">AO</span>
            <span className="text-white/20 shrink-0">/</span>
            <div className="h-4 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSection.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="tech-label text-brand inline-block truncate"
                >
                  {`${activeSection.num} // ${activeSection.label}`}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/16gxzkP1sf3WzGYvfOi3vo9J-pI4CLd5K/view"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-label text-[#F2F1EE] hover:text-brand border border-white/15 hover:border-brand px-2.5 py-1 inline-flex items-center gap-1 transition-colors duration-200 shrink-0"
          >
            RESUME <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Horizontal Scrollable Section Navbar */}
        <nav
          ref={mobileNavRef}
          aria-label="Mobile section navigation"
          className="flex items-center overflow-x-auto no-scrollbar border-t border-white/15 divide-x divide-white/15"
        >
          {NAV_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                ref={(el) => {
                  mobileTabRefs.current[section.id] = el;
                }}
                href={`#${section.id}`}
                className={`tech-label shrink-0 whitespace-nowrap px-3.5 py-2.5 transition-colors duration-200 ${
                  isActive
                    ? "bg-brand text-[#101014]"
                    : "text-[#85858D] hover:text-[#F2F1EE] hover:bg-[#15151B]"
                }`}
              >
                {`${section.num} ${section.label}`}
              </a>
            );
          })}
        </nav>
      </div>

      {/* ── Desktop Blueprint Sidebar ── */}
      <aside className="hidden lg:flex flex-col justify-between sticky top-0 h-screen py-10 pr-8 border-r border-white/15 select-none">
        {/* Top Identifier & Active Scroll Readout */}
        <div className="flex flex-col gap-6">
          <div className="border border-white/15 p-4 bg-[#15151B]/70">
            <div className="flex items-center justify-between mb-3">
              <span className="tech-label text-[#85858D]">SYS // ID</span>
              <span className="inline-flex items-center gap-1.5 tech-label text-brand">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 bg-brand" />
                </span>
                ONLINE
              </span>
            </div>
            <p className="font-display font-extrabold text-lg tracking-tight text-[#F2F1EE] leading-none">
              AYUSH OSWAL
            </p>
            <p className="tech-label text-[#85858D] mt-2">
              PUNE, IN · 18.52°N
            </p>
          </div>

          {/* Scroll-triggered Active Section Telemetry */}
          <div className="border-t border-b border-white/15 py-3 px-1">
            <span className="tech-label text-[#85858D] block mb-1.5">
              ACTIVE SECTOR
            </span>
            <div className="h-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="tech-label text-brand flex items-center gap-2"
                >
                  <span>[{activeSection.num}]</span>
                  <span>{activeSection.label}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Index */}
          <nav aria-label="Section navigation" className="flex flex-col">
            {NAV_SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`group relative flex items-center justify-between py-2.5 pl-3 pr-2 border-b border-white/10 transition-colors duration-200 ${
                    isActive
                      ? "text-brand"
                      : "text-[#85858D] hover:text-[#F2F1EE]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-active-bar"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-brand"
                    />
                  )}
                  <span className="tech-label flex items-center gap-2.5">
                    <span
                      className={
                        isActive ? "text-brand" : "text-[#85858D]/70"
                      }
                    >
                      {section.num}
                    </span>
                    <motion.span
                      key={`${section.id}-${isActive ? "active" : "idle"}`}
                      initial={isActive ? { opacity: 0.6, y: 6 } : false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      {section.label}
                    </motion.span>
                  </span>
                  <span
                    className={`tech-label transition-colors duration-200 ${
                      isActive
                        ? "text-brand"
                        : "text-transparent group-hover:text-[#85858D]"
                    }`}
                  >
                    →
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Direct Links */}
        <div className="flex flex-col gap-3">
          <span className="tech-label text-[#85858D]">ENDPOINTS</span>
          <div className="grid grid-cols-2 border-t border-l border-white/15">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="tech-label text-[#85858D] hover:text-brand hover:bg-[#15151B] border-r border-b border-white/15 px-2.5 py-2 flex items-center justify-between transition-colors duration-200"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-3 w-3 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
