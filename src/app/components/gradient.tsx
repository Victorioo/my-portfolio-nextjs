"use client";
import { motion } from "framer-motion";

function Gradient({ variant, classes }: { variant: string; classes?: string }) {
  if (variant === "linear") {
    return (
      <motion.div
        className={`fixed rounded-full blur-3xl z-10 ${classes} h-52`}
        animate={{
          opacity: [0, 0.3, 0],
          backgroundColor: ["#681a8aff", "rgba(240,0,72,0.15)", "#fc657eff"],
          rotate: [-30, -40, -25],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      ></motion.div>
    );
  }
  if (variant === "radial")
    return (
      <motion.div
        className={`fixed rounded-full blur-2xl ${classes}`}
      ></motion.div>
    );
}

export default Gradient;
