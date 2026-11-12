"use client";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandLeetcode } from "@tabler/icons-react";

const data = [
  {
    title: "Resume",
    icon: <FileText className="h-4 w-4" />,
    href: "https://drive.google.com/file/d/16gxzkP1sf3WzGYvfOi3vo9J-pI4CLd5K/view",
  },
  {
    title: "Github",
    icon: <Github className="h-4 w-4" />,
    href: "https://github.com/ayush-oswal",
  },
  {
    title: "Twitter",
    icon: <Twitter className="h-4 w-4" />,
    href: "https://x.com/Oswal_ayushh",
  },
  {
    title: "Linkedin",
    icon: <Linkedin className="h-4 w-4" />,
    href: "https://www.linkedin.com/in/ayush-oswal-16a984258/",
  },
  {
    title: "Leetcode",
    icon: <IconBrandLeetcode className="h-4 w-4" />,
    href: "https://leetcode.com/u/oswalayush2207/",
  },
  {
    title: "Mail",
    icon: <Mail className="h-4 w-4" />,
    href: "mailto:ayushoswal2003@gmail.com",
  },
];

const BottomBar = () => {
  return (
    <div className="lg:hidden">
      <FloatingDock
        mobileClassName="fixed bottom-6 right-5 z-30"
        desktopClassName="fixed bottom-5 left-1/2 -translate-x-1/2 z-30"
        items={data}
      />
    </div>
  );
};

export default BottomBar;
