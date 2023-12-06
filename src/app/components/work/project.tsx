import React from "react";

function Project({
  name,
  children,
  image,
  gitHub,
  page,
}: {
  name: string;
  children: string;
  image: string;
  gitHub?: string;
  page?: string;
}) {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 to-slate-950 flex flex-col items-center gap-2 rounded-xl shadow-xl shadow-[rgba(0,0,0,0.4)] px-4 py-8">
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="text-md text-gray-400 max-w-lg mx-auto leading-8">
          {children}
        </p>
        <div className="flex gap-7">
          {gitHub ? (
            <button className="bg-black px-4 py-1 rounded-full">
              <a href={gitHub}>GitHub</a>
            </button>
          ) : (
            ""
          )}
          {page ? (
            <button className="bg-gray-800 px-4 py-1 rounded-full">
              <a href={page}>Web</a>
            </button>
          ) : (
            ""
          )}
        </div>
        <img src={image} className="block w-full h-auto rounded-2xl" />
      </div>
    </>
  );
}

export default Project;
