"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
export default function About({ children }: { children: JSX.Element }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full relative py-[15%]">
        <motion.div
          className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl"
          ref={ref}
          style={{
            top: isInView ? -350 : 0,
            left: isInView ? "50%" : "0",
            transition: "top 2s ease, left 2s ease",
          }}
        ></motion.div>
        <h1 className="font-bold text-4xl">About me</h1>
        {children}
      </div>
    </>
  );
}