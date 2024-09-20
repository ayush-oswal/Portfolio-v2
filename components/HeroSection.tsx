"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Cover } from "./ui/cover";

const HeroSection = () => {
  return (
    <div>
    <div className="hidden md:block">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-2 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          <div className="flex flex-row items-center justify-between p-2">
            <div className="flex flex-col items-start">
              <div className="text-5xl xl:text-6xl/none font-bold tracking-tighter text-left">
                नमस्ते🙏, I am Ayush Oswal
              </div>
              <div className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-md text-left">
                <Cover>
                   Full Stack Developer & AI enthusiast.
                </Cover>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/me.jpg"
                alt="Ayush Oswal"
                width={250}
                height={250}
                className="rounded-full border-2 border-cyan-400"
              />
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </div>
    <div className="md:hidden">
      <div className="flex flex-col items-center p-2">
        <h1 className="text-3xl font-bold tracking-tighter text-center mb-4">
          नमस्ते🙏, I am Ayush Oswal
        </h1>
        <Image
          src="/me.jpeg"
          alt="Ayush Oswal"
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md text-center">
          Full Stack Developer passionate about building cool web applications and solving DSA problems.
        </p>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
