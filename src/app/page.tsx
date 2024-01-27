import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Marquee from "../components/hero/Marquee";
import About from "../components/about/about";
import Work from "../components/work/work";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Gradient from "@/components/contact/Gradient";

import { data } from "@/components/work/ProjectsData";

export default function Home() {
  return (
    <>
      <main className="relative bg-slate-900 z-10">
        <Header lang="en"></Header>
        {/* ------------------ HERO ----------------------- */}
        <section className="flex flex-col items-center justify-center h-screen">
          <Hero>
            <p className="sm:text-2xl sm:leading-relaxed text-4xl text-gray-200 leading-relaxed max-w-xl font-medium tracking-tighter">
              I&apos;m a developer with over 2{" "}
              <a href="#" className="underline">
                years experience
              </a>
              , based on Córdoba, Argentina.
            </p>
          </Hero>
          <Marquee />
        </section>
        {/* ------------------ HERO ----------------------- */}
      </main>
      <main className="flex flex-col bg-slate-900 pt-14 items-start justify-center w-screen">
        <About>
          <div className="flex flex-col my-4 gap-8 w-3/4 items-center justify-center max-w-[70ch] font-medium text-lg text-gray-400">
            <p className="text-md leading-10">
              A passionate{" "}
              <span className="text-slate-200 font-semibold">
                Frontend Developer
              </span>{" "}
              with a knack for crafting engaging an
              <span className="text-slate-200 font-semibold">
                {" "}
                user-friendly digital experiences
              </span>
              . I&apos;ve honed my skills in turning creative ideas into
              functional, visually appealing websites.
            </p>
            <p className="text-md leading-10">
              Excited to continue growing as a frontend developer. I&apos;m
              eager to contribute my skills to innovative projects, collaborate
              with talented professionals and
              <br />{" "}
              <span className="text-slate-200 font-semibold">
                make meaningful contributions
              </span>
              .
            </p>
            <p className="text-md leading-10">
              Every project comes with its unique set of challenges, and I
              thrive on solving them. Whether it&apos;s troubleshooting code,
              optimizing performance, or enhancing user interactions, I approach{" "}
              <span className="text-slate-200 font-semibold">
                problem-solving with creativity and a determination to deliver
              </span>{" "}
              solutions that exceed expectations.
            </p>
          </div>
        </About>
        <Work data={data}>
        </Work>
        <Contact>
          <>
            <div className=" flex flex-col items-center justify-center gap-3 p-8 rounded-2xl">
              <h1 className="text-5xl md:text-4xl text-transparent bg-clip-text font-black bg-gradient-to-tr from-purple-300 to-indigo-500">
                <span className="text-white">#</span>LetsWorkTogether
              </h1>
              <h2 className="text-2xl font-bold text-gray-200 md:text-xl">
                & build something extraordinary.
              </h2>
              <p className="text-gray-400 text-xl max-w-[40ch] font-medium leading-relaxed">
                {" "}
                <br /> Feel free to reach out and let turn your ideas into
                stunning <span className="text-white">digital experiences</span>
                . ✨
              </p>
              <form
                className="flex flex-col justify-center my-8 font-semibold gap-4"
                action={process.env.NEXT_PUBLIC_CONTACT_FORM}
                method="POST"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Your Name</label>
                  <input
                    type="text"
                    className="rounded-full px-4 py-2 outline-none bg-gray-800"
                    placeholder="John Doe"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-fucsia-500">Your Email</label>
                  <input
                    type="email"
                    className="rounded-full px-4 py-2 outline-none bg-gray-800"
                    placeholder="youremail@hotmail.com"
                    content="asdasd"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Your Message</label>
                  <textarea
                    className="resize-none px-5 py-3 rounded-xl bg-gray-800 outline-none"
                    cols={30}
                    rows={10}
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  className="px-8 py-2 rounded-full text-lg font-semibold shadow-lg focus:scale-105 transition-all spacing tracking-widest border-2"
                  type="submit"
                >
                  Send
                </button>
              </form>
              <div className="flex gap-8 list-none underline underline-offset-4">
                <a
                  href="https://www.linkedin.com/in/victoriocaccioppoli/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a href="https://www.instagram.com/vicctorioo/" target="_blank">
                  Instagram
                </a>
                <a href="mailto:victoriocaccioppoli@gmail.com">Email</a>
              </div>
              <Gradient />
            </div>
          </>
        </Contact>
        <Footer></Footer>
      </main>
    </>
  );
}
