import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Marquee from "../components/hero/Marquee";
import About from "../components/about/about";
import Work from "../components/work/work";
import Contact from "@/components/contact/Contact";
export default function Home() {
  return (
    <>
      <main className="relative bg-slate-900 z-10">
        <Header></Header>
        {/* ------------------ HERO ----------------------- */}
        <section className="flex flex-col items-center justify-center h-screen">
          <Hero>
            <p></p>
          </Hero>
          <Marquee/>
        </section>
        {/* ------------------ HERO ----------------------- */}
      </main>
      <main className="flex flex-col bg-slate-900 pt-14 items-start justify-center">
        <About>
          <div className="flex flex-col my-4 gap-8 w-3/4 items-center justify-center max-w-[70ch] font-medium">
            <p className="text-md leading-10">
              A passionate Junior Frontend Developer with a knack for crafting
              engaging and user-friendly digital experiences. With two years in
              the dynamic world of web development, I&apos;ve honed my skills in
              turning creative ideas into functional, visually appealing
              websites.
            </p>
            <p className="text-md leading-10">
              As I embark on the next phase of my career, I am excited to
              continue growing as a frontend developer. I am eager to contribute
              my skills to innovative projects, collaborate with talented
              professionals, and make meaningful contributions to the
              ever-evolving landscape of web development.
            </p>
            <p className="text-md leading-10">
              Every project comes with its unique set of challenges, and I
              thrive on solving them. Whether it&apos;s troubleshooting code,
              optimizing performance, or enhancing user interactions, I approach
              problem-solving with creativity and a determination to deliver
              solutions that exceed expectations.
            </p>
          </div>
        </About>
        <Work />
        <Contact>

        </Contact>
      </main>
    </>
  );
}
