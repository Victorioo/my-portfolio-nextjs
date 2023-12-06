"use client";
import React from "react";
import { motion } from "framer-motion";
import { GoNorthStar as Stars } from "react-icons/go";

function Marquee() {
  return (
    <div className="flex justify-center align-center relative w-screen max-w-full h-[50px]">
      <motion.span
        className={`absolute whitespace-nowrap will-change-transform mx-24 text-sm flex items-center gap-4`}
        animate={{ x: [0, -450] }}
        transition={{
          duration: 45,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
          <Stars></Stars>
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
        <Stars></Stars>
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
        <Stars></Stars>
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
        <Stars></Stars>
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
        <Stars></Stars>
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
        <Stars></Stars>
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
        <Stars></Stars>
        /WEB DEVELOPER/CREATIVE ENGINEER/FRONTEND DEVELOPER/SETUP LOVER{" "}
        <Stars></Stars>
      </motion.span>
    </div>
  );
}

export default Marquee;
