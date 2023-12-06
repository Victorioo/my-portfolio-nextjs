"use client";
import { motion } from "framer-motion";

import React from "react";

function Menu() {
  return (
    <motion.div
      className="fixed bg-slate-800 top-0 left-0 bottom-0 right-0 z-40 flex items-center justify-center rounded-full w-[140vw] h-[200vh]"
      // animate={{
      //   width: menu ? "140vw" : "0px",
      //   height: menu ? "200vh" : "0px",
      // }}
      transition={{ duration: 0.8 }}
    >
    </motion.div>
  );
}

export function MenuLinks() {
  return (
    <>
      <div className="flex items-center justify-center fixed h-screen w-screen top-0 left-0">
        <ul className="flex flex-col gap-14">
          <li>
            <a href="#" className="text-4xl font-bold uppercase text-gray-400">
              Home{" "}
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl font-bold uppercase text-gray-400">
              About{" "}
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl font-bold uppercase text-gray-400">
              Work{" "}
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl font-bold uppercase text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
