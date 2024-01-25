import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/hero/Marquee";
import About from "@/components/about/about";
import Work from "@/components/work/work";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative bg-slate-900 z-10">
        <Header></Header>
        {/* ------------------ HERO ----------------------- */}
        <section className="flex flex-col items-center justify-center h-screen">
          <Hero>
            <p className="sm:text-2xl sm:leading-relaxed text-4xl text-gray-200 leading-relaxed max-w-xl font-medium tracking-tighter">
              Soy un desarrollador con más de 2{" "}
              <a href="#" className="underline">
                años de experiencia
              </a>
              , viviendo en Córdoba, Argentina.
            </p>
          </Hero>
          <Marquee />
        </section>
        {/* ------------------ HERO ----------------------- */}
      </main>
      <main className="flex flex-col bg-slate-900 pt-14 items-start justify-center w-screen">
        <About>
          <>
            <h1 className="font-bold text-4xl">Acerca de mí</h1>
            <div className="flex flex-col my-4 gap-8 w-3/4 items-center justify-center max-w-[70ch] font-medium text-lg text-gray-400">
              <p className="text-md leading-10">
                Un{" "}
                <span className="text-slate-200 font-semibold">
                  Frontend Developer
                </span>{" "}
                con una habilidad especial para crear
                <span className="text-slate-200 font-semibold">
                  {" "}
                  experiencias digitales{" "}
                </span>
                atractivas. Perfeccioné mis habilidades para convertir tus
                ideas, en sitios web funcionales y atractivos visualmente.
              </p>
              <p className="text-md leading-10">
                Estoy emocionado por seguir creciendo como desarrollador. Y me
                encantaría contribuir mis habilidades a proyectos innovadores,
                colaborar con profesionales talentosos y
                <br />{" "}
                <span className="text-slate-200 font-semibold">
                  hacer aportes significativos.
                </span>
              </p>
              <p className="text-md leading-10">
                Cada proyecto viene con un conjunto de desafíos que me gustan
                aceptar, ya sea que se trate de{" "}
                <span className="text-slate-200 font-semibold">
                  solucionar problemas de código, optimizar el rendimiento
                </span>{" "}
                me encanta abordar la resolución de problemas con creatividad y
                determinación para ofrecer soluciones que superen las
                expectativas.
              </p>
            </div>
          </>
        </About>
        <Work />
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}
