"use client";
import { easeInOut, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
export default function About({ children }: { children: JSX.Element }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  async function gitHubAPI(token: string | undefined, username: string) {
    const headers = {
      Authorization: `bearer ${token}`,
    };
    const body = {
      query:
        "query {viewer {contributionsCollection {contributionCalendar {totalContributions}}}}",
    };
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    const data = await response.json();
    return data;
  }

  const [contributions, setContributions] = useState(null);

  const pullGitHubAPI = async () =>
    await gitHubAPI(process.env.NEXT_PUBLIC_GITHUB_TOKEN, "Victorioo");

  const getContributions = pullGitHubAPI()
    .then((response) => {
      const contributionsData =
        response.data.viewer.contributionsCollection.contributionCalendar
          .totalContributions;
      setContributions(contributionsData);
    })
    .catch((e) => {
      console.log(e);
    });

  useEffect(() => {
    getContributions;
  }, [getContributions]);

  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full relative py-[15%] gap-8"
        id="about"
      >
        <Image
          src="/vitorio.png"
          alt="Profile picture of Victorio Caccioppoli"
          className="w-60 h-60 object-center rounded-full border-4"
          width={100}
          height={100}
          unoptimized={true}
        />
        {children}
        <motion.div
          className="flex flex-col gap-4 items-center"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-bold text-2xl">{contributions} Contributions</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/Victorioo"
            alt="Chart of contributions"
            className="border-4 border-gray-500 p-5 w-[80%] h-60 rounded-xl md:w-60 md:h-60 md:p-0 object-cover shadow-lg shadow-zinc-950"
          />
          <motion.a
            href="https://github.com/Victorioo"
            className="bg-black rounded-full shadow-lg shadow-zinc-950 flex items-center py-1 px-4 gap-4"
            whileInView={{ opacity: [0, 0.8] }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: "easeInOut",
              repeat: 0,
            }}
            target="_blank"
          >
            GitHub
            <FaGithub className={"w-8 h-8"} />
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}
