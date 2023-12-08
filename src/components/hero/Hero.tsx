"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Gradient from "../gradient";

// React

function Hero({ children }: { children: JSX.Element }) {
  const { scrollYProgress } = useScroll();

  const useHideOnScroll = (
    firstValue: Array<any>,
    secondValue: Array<number | string | boolean>
  ): any => {
    // Suponiendo que scrollYProgress está definido en algún lugar de tu código.
    // Asegúrate de que esté importado y disponible para su uso.
    return useTransform(scrollYProgress, firstValue, secondValue);
  };

  return (
    <section className="flex items-start justify-center flex-col w-4/5 h-full relative gap-8">
      <motion.div
        className="absolute top-[-350px] left-[-350px] w-[500px] h-[500px] bg-gradient-to-tl from-red-700 to-blue-700 rotate-180 rounded-full blur-2xl opacity-75"
        animate={{ x: [0, 100, 0], y: [0, 70, 0], scale: [1, 1.5, 1] }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 4,
        }}
      ></motion.div>
      <motion.h1
        className="text-8xl max-w-[10ch] py-5 px-0 font-semibold text-gray-300 tracking-tight sm:text-5xl"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        FRONTEND DEVELOPER
      </motion.h1>
      <div className="sm:items-start lg:gap-4 lg:flex-col lg:items-start flex items-end justify-between w-full">
        <motion.p className="sm:text-2xl sm:leading-relaxed text-4xl text-gray-200 leading-relaxed max-w-xl font-medium tracking-tighter">
          I&apos;m a developer with over 2{" "}
          <motion.a href="#" className="underline">
            years experience
          </motion.a>
          , based on Córdoba Argentina.
        </motion.p>
        <motion.h1
          className="lg:text-start lg:max-w-none lg:text-3xl text-7xl font-bold max-w-[10ch] text-end text-gray-300 tracking-tight z-30"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          VICTORIO CACCIOPPOLI
        </motion.h1>
      </div>
    </section>
  );
}
export default Hero;
