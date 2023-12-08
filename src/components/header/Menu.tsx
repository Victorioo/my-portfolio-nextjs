import React from "react";
import { motion } from "framer-motion";
function Menu({
  menu,
  month,
  // children,
}: {
  menu: boolean;
  month: string;
  // children: JSX.Element;
}) {
  return (
    <motion.div
      className="flex flex-col w-screen h-screen items-center justify-around gap-14 z-40"
      animate={{ display: menu ? "flex" : "none", opacity: menu ? 1 : 0 }}
      transition={{ duration: 0.7 }}
    >
      <ul className="flex flex-col gap-14 text-4xl font-semibold ">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </ul>
      <div className="flex flex-col gap-4 list-none items-center">
        <li className="flex items-center justify-center gap-1">
          <div className="bg-green-300 h-2 w-2 rounded-full"></div>
          <span className="">
            Available to work on <b className="font-bold">{month}</b>
          </span>
        </li>
        <a
          href="mailto:victoriocaccioppoli@gmail.com"
          className="underline underline-offset-4"
        >
          victoriocaccioppoli@gmail.com
        </a>
        {/* {children} */}
      </div>
    </motion.div>
  );
}

export default Menu;
