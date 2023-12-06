"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Project from "./project";
import { BsStars } from "react-icons/bs";
const Work = () => {
  return (
    <>
      <div className="md:w-5/6 w-4/5 mx-auto flex flex-col items-start justify-center gap-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold flex items-center">
          ✨ Projects
        </span>
        <h1 className="font-medium text-4xl">Some works that i did</h1>
        <p className="text-gray-400 mt-3 text-lg max-w-[60ch]">
          Believing in the power of consistent practice and coding — where every
          line written is a step towards learn
        </p>
        {/* <button className="flex gap-3 cursor-pointer text-white font-semibold rounded-full py-2 px-4 bg-black hover:bg-gray-950">
          <a href="https://github.com/Victorioo" target="_blank">
            See GitHub
          </a>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFFFFF"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            ></path>
          </svg>
        </button> */}
      </div>
      <article className="sm:grid-cols-1 lg:grid-cols-2 w-4/5 grid grid-cols-3 grid-rows-3 py-8 gap-4 mx-auto">
        <Project name="Mi ultimo proyecto" gitHub="holaj" page="hola" image="/asd.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus vero similique odit ex vitae. Voluptates quidem ipsam
          quibusdam ab id?
        </Project>
        <Project name="Mi ultimo proyecto" gitHub="holaj" page="hola" image="/asd.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus vero similique odit ex vitae. Voluptates quidem ipsam
          quibusdam ab id?
        </Project>
        <Project name="Mi ultimo proyecto" gitHub="holaj" page="hola" image="/asd.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus vero similique odit ex vitae. Voluptates quidem ipsam
          quibusdam ab id?
        </Project>
      </article>
    </>
  );
};

export default Work;
