import { Github, Globe, VideoIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  index?: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
  github: string;
  live?: string;
  video?: string;
}

const Project = ({
  index = 0,
  title,
  description,
  image,
  skills,
  github,
  live,
  video,
}: ProjectProps) => {
  return (
    <div className="group flex flex-col bg-[#15151B] border border-white/15 hover:border-brand transition-colors duration-300 h-full">
      {/* Top Blueprint Header Strip */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/15 bg-[#101014]">
        <span className="tech-label text-[#85858D]">
          PRJ_{String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-label inline-flex items-center gap-1 text-brand hover:text-[#F2F1EE] transition-colors duration-200"
            >
              <Globe className="h-3 w-3" /> Live
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-label inline-flex items-center gap-1 text-[#85858D] hover:text-brand transition-colors duration-200"
          >
            <Github className="h-3 w-3" /> Src
          </a>
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-label inline-flex items-center gap-1 text-[#85858D] hover:text-brand transition-colors duration-200"
            >
              <VideoIcon className="h-3 w-3" /> Demo
            </a>
          )}
        </div>
      </div>

      {/* Image / Placeholder */}
      <div className="relative overflow-hidden border-b border-white/15 bg-[#101014]">
        {image ? (
          <Image
            src={image}
            alt={title}
            height={500}
            width={500}
            className="w-full h-[190px] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-[190px] flex items-center justify-center tech-label text-[#85858D]/50">
            NO_PREVIEW // HEADLESS_API
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-center md:items-stretch text-center md:text-left gap-3 p-5 flex-1">
        <div className="flex items-center md:items-start justify-center md:justify-between gap-2 w-full">
          <h3 className="font-display font-extrabold text-xl tracking-tight text-[#F2F1EE] group-hover:text-brand transition-colors duration-200">
            {title}
          </h3>
          <a
            href={live || github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="hidden md:inline-flex shrink-0 text-[#85858D] group-hover:text-brand transition-colors duration-200"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="text-base font-medium text-[#85858D] leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Stack Badges */}
        <div className="flex items-center justify-center md:justify-start gap-1.5 flex-wrap mt-auto pt-3 border-t border-white/10 w-full">
          {skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="tech-label bg-[#101014] border border-white/15 text-[#F2F1EE]/75 px-2 py-1"
            >
              {skill}
            </span>
          ))}
          {skills.length > 5 && (
            <span className="tech-label text-brand px-1">
              +{skills.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
