import React from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
// import { LuGithub } from "react-icons/lu";
function Project({
  name,
  children,
  image,
  gitHub,
  page,
}: {
  name: string;
  children: JSX.Element;
  image: string;
  gitHub?: string;
  page?: string;
}) {
  return (
    <>
      <div
        className={` bg-gradient-to-tr from-slate-700 to-slate-900 flex flex-col items-stretch justify-center gap-4 rounded-xl shadow-xl shadow-[rgba(0,0,0,0.4)] p-4`}
      >
        {children}
        <div className="flex gap-7 items-center justify-center font-semibold">
          {gitHub ? (
            <a
              className="bg-black px-4 py-2 rounded-md text-white flex items-center gap-2 hover:rounded-lg transition-all"
              href={gitHub}
              target="_blank"
            >
              GitHub <LuGithub />
            </a>
          ) : (
            ""
          )}
          {page ? (
            <a
              className="bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2"
              href={page}
              target="_blank"
            >
              See Code <LuExternalLink />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Project;
