"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { REVEAL_UP } from "@/constants/theme";
import { LinkPreview } from "./ui/link-preview";

interface BlogArticle {
  title: string;
  description: string;
  url: string;
  platform: string;
  date?: string;
  readTime?: string;
  tags: string[];
}

const BLOGS: BlogArticle[] = [
  {
    title: "A Deep Dive into Indexes in PostgreSQL",
    description:
      "A comprehensive exploration of indexing internals in PostgreSQL    comparing B-Trees, Hash indexes, GiST, GIN, and BRIN. Breaks down how the query planner chooses an index, the trade-offs between read acceleration and write amplification, and practical indexing patterns for high-throughput production databases.",
    url: "https://medium.com/@ayushoswal2003/a-deep-dive-into-indexes-in-postgresql-4226a0eb292b",
    platform: "MEDIUM",
    readTime: "DEEP DIVE",
    tags: ["PostgreSQL", "Database Internals", "B-Tree", "Indexing", "Performance Tuning"],
  },
];

const BlogsSection = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Section Header */}
      <motion.div
        {...REVEAL_UP}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-3 border-b border-white/15 pb-6"
      >
        <span className="tech-label text-brand">05 // TECHNICAL WRITING</span>
        <h2 className="section-h2 text-4xl sm:text-5xl md:text-6xl uppercase text-[#F2F1EE]">
          Blogs
        </h2>
        <p className="text-lg font-medium text-[#85858D] max-w-2xl leading-relaxed">
          Deep dives into backend internals, database mechanics, and architectural trade-offs.{" "}
          <span className="text-brand">
            (or: documenting things so future me doesn&apos;t break production again.)
          </span>
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="flex flex-col gap-5">
        {BLOGS.map((blog, idx) => (
          <motion.div
            key={blog.url}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/15 hover:border-brand bg-[#15151B] transition-colors duration-200"
            >
              {/* Card Header Strip */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/15 bg-[#101014]">
                <div className="flex items-center gap-2">
                  <span className="tech-label text-[#85858D]">
                    DOC_{String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="tech-label text-brand">{blog.platform}</span>
                </div>
                {blog.readTime && (
                  <span className="tech-label text-[#85858D]">{blog.readTime}</span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 border border-white/15 bg-[#101014] text-brand shrink-0 mt-0.5">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#F2F1EE] group-hover:text-brand transition-colors duration-200">
                      {blog.title}
                    </h3>
                  </div>
                  <div className="tech-label inline-flex items-center gap-1 text-[#85858D] group-hover:text-brand transition-colors duration-200 shrink-0 pt-1">
                    <span>READ</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                <p className="text-base font-medium text-[#85858D] leading-relaxed">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-white/10">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-label bg-[#101014] border border-white/15 text-[#F2F1EE]/75 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;

