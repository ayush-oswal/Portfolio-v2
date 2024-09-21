import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Github, Globe, VideoIcon } from "lucide-react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

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
    <Card className="shadow-md">
      <CardHeader className="p-0">
        <div className="p-2">
          <Image
            src={image}
            alt={title}
            height={500}
            width={500}
            className="rounded-t-lg h-[170px] object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-semibold tracking-tight mt-1 text-base">{title}</p>
        <p className="prose mt-2 max-w-full line-clamp-3 text-pretty font-medium font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1 cursor-pointer"
            >
              <p className="text-[10px] font-semibold text-gray-900">{skill}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4">
          {live && (
            <LinkPreview url={live}>
              <div className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-2 py-1 cursor-pointer">
                <Globe className="h-4 w-4 text-white" />
                <p className="text-[10px] text-white">Website</p>
              </div>
            </LinkPreview>
          )}
          <LinkPreview url={github}>
            <div className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-2 py-1 cursor-pointer">
              <Github className="h-4 w-4 text-white" />
              <p className="text-[10px] text-white">Source</p>
            </div>
          </LinkPreview>
          {video && (
            <LinkPreview url={video}>
              <div className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-2 py-1 cursor-pointer">
                <VideoIcon className="h-4 w-4 text-white" />
                <p className="text-[10px] text-white">Video</p>
              </div>
            </LinkPreview>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
