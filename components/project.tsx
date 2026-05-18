import { Github, Globe, VideoIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  skills: string[];
  github: string;
  live?: string;
  video?: string;
}

const Project = ({
  title,
  description,
  image,
  skills,
  github,
  live,
  video,
}: ProjectProps) => {
  return (
    <div className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-brand/30 transition-all duration-300 h-full">

      {/* Image / placeholder */}
      <div className="relative overflow-hidden bg-elevated">
        {image ? (
          <Image
            src={image}
            alt={title}
            height={500}
            width={500}
            className="w-full h-[175px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-[175px] flex items-center justify-center text-muted-foreground/30 text-sm">
            No preview
          </div>
        )}

        {/* Hover overlay with action links */}
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-brand text-[#0A0A0A] font-semibold px-3 py-1.5 rounded-lg text-xs hover:bg-brand/85 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" /> Live
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-elevated border border-border/80 text-foreground px-3 py-1.5 rounded-lg text-xs hover:border-brand/40 transition-colors"
          >
            <Github className="h-3.5 w-3.5" /> Source
          </a>
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-elevated border border-border/80 text-foreground px-3 py-1.5 rounded-lg text-xs hover:border-brand/40 transition-colors"
            >
              <VideoIcon className="h-3.5 w-3.5" /> Demo
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold tracking-tight text-[15px]">{title}</p>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-muted-foreground hover:text-brand transition-colors duration-200"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Stack badges */}
        <div className="flex items-center gap-1.5 flex-wrap mt-auto pt-1">
          {skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-medium bg-background border border-border/60 text-foreground/55 px-2 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
          {skills.length > 5 && (
            <span className="text-[10px] text-muted-foreground/60">
              +{skills.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
