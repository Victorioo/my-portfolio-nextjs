import { data } from "./ProjectsData";
import React from "react";
import Project from "./project";
import Chip from "./Chip";
import Image from "next/image";
const IterateStack = (stack?: string[]) => {
  if (!stack) return;

  return stack.map((tech, key) => {
    return <Chip text={tech} key={key} />;
  });
};

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
      </div>
      <article className="sm:grid-cols-1 lg:grid-cols-2 grid grid-cols-3 mx-auto items-stretch max-w-[80%] gap-4 my-8">
        {data.map((data, key) => {
          const { name, gitHub, page, image, description, stack } = data;
          return (
            <Project
              key={key}
              name={name}
              gitHub={gitHub}
              page={page}
              image={image}
            >
              <div className="flex flex-col items-center justify-between h-full gap-4">
                <h1 className="font-semibold text-xl">{name}</h1>
                <p className="text-gray-400">{description}</p>
                <div className="flex items-center gap-2">
                  {stack.map((tech, key) => {
                    return <Chip text={tech} key={key}></Chip>;
                  })}
                </div>
                <Image
                  src={image}
                  className="h-80 w-96 object-cover rounded-3xl"
                  width={100}
                  height={100}
                  alt={`Photo of the project: ${name}`}
                  unoptimized={true}
                />
              </div>
            </Project>
          );
        })}
      </article>
    </>
  );
};

export default Work;
