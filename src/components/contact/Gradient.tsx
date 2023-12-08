'use client'
import React from "react";
import {motion} from 'framer-motion'
function Gradient() {
  return (
    <motion.div 
    className="w-60 h-60 rounded-full blur-2xl absolute -top-12 bg-gradient-to-tr from-indigo-400 to-purple-900 right-0 md:w-36 md:h-36 md:left-0"
    animate={{scale: [1, 1.5, 1], rotate: [0, 360, 0]}}
    transition={{duration: 20, repeat: Infinity}}
    >

    </motion.div>
    
  );
}

export default Gradient;
