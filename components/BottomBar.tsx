"use client";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import { title } from "process";
import { IconBrandLeetcode } from "@tabler/icons-react";


const data = [
  {
    title: "Resume",
    icon: <FileText />,
    href: "https://drive.google.com/file/d/16gxzkP1sf3WzGYvfOi3vo9J-pI4CLd5K/view"
  },
  {
    title: "Github",
    icon: <Github />,
    href: "https://github.com/ayush-oswal"
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    href: "https://x.com/Oswal_ayushh"
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/ayush-oswal-16a984258/"
  },
  {
    title: "Leetcode",
    icon: <IconBrandLeetcode />,
    href: "https://leetcode.com/u/oswalayush2207/"
  },
  {
    title: "Mail",
    icon: <Mail />,
    href: "mailto:ayushoswal2003@gmail.com"
  }
]

const BottomBar = () => {
  return (
    <FloatingDock mobileClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30 border hover:border-0" desktopClassName="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-30 border hover:border-0" items={data} />
  );
};

export default BottomBar;
