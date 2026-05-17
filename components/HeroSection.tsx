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
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-2 py-4 text-center text-4xl tracking-tight md:text-7xl"
          >
            <div className="flex flex-row items-center justify-between p-2">
              <div className="flex flex-col items-start">
                <div className="text-5xl xl:text-6xl/none font-bold tracking-tighter text-left text-foreground">
                  नमस्ते, I&apos;m Ayush Oswal
                </div>
                <div className="mt-4 text-lg text-muted-foreground max-w-md text-left">
                  <Cover>
                    Backend Developer &amp; AI Enthusiast{" "}
                    <span className="text-brand">— yes, another one.</span>
                  </Cover>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/me.jpg"
                    alt="Ayush Oswal Backend Developer in Pune"
                    width={250}
                    height={250}
                    className="aspect-square rounded-2xl border-2 border-brand accent-glow object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.h1>
        </LampContainer>
      </div>
      <div className="md:hidden">
        <div className="flex flex-col items-center p-2">
          <h1 className="text-3xl font-bold tracking-tighter text-center mb-4 text-foreground">
            नमस्ते, I&apos;m Ayush Oswal
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/me.jpg"
              alt="Ayush Oswal Backend Developer in Pune"
              width={200}
              height={200}
              className="aspect-square rounded-2xl mb-4 border-2 border-brand accent-glow object-cover"
            />
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-xl text-center">
            Pune-based backend developer who builds microservices that{" "}
            <span className="text-brand">(mostly) don&apos;t fall over</span>, voice agents that{" "}
            <span className="text-brand">(usually) understand what you said</span>, and automation
            workflows that save humans from doing things humans hate doing.{" "}
            <span className="text-brand">You&apos;re welcome.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
