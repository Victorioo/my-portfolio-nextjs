import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/hero/Marquee";
import About from "@/components/about/about";
import Work from "@/components/work/work";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Gradient from "@/components/contact/Gradient";

import { data } from "@/components/work/SpanishProjects";

export default function Home() {
  return (
    <>
      <main className="relative bg-slate-900 z-10">
        <Header lang="es">

        </Header>
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
        <Work data={data}>
          <>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold flex items-center">
              ✨ Proyectos
            </span>
            <h1 className="font-medium text-4xl">
              Algunos proyectos que hice...
            </h1>
            <p className="text-gray-400 mt-3 text-lg max-w-[60ch]">
              Yo creo en el poder de la practica y la consistencia codeando -
              donde cada linea escrita, es un paso más para aprender
            </p>
          </>
        </Work>
        <Contact>
          <>
            <div className=" flex flex-col items-center justify-center gap-3 p-8 rounded-2xl">
              <h1 className="text-5xl md:text-4xl text-transparent bg-clip-text font-black bg-gradient-to-tr from-purple-300 to-indigo-500">
                <span className="text-white">#</span>TrabajemosJuntos
              </h1>
              <h2 className="text-2xl font-bold text-gray-200 md:text-xl">
                y construyamos algo impresionante.
              </h2>
              <p className="text-gray-400 text-xl max-w-[40ch] font-medium leading-relaxed">
                {" "}
                <br /> Siéntete libre de hablarme para convertir tus ideas en
                asombrosas{" "}
                <span className="text-white">experiencias digitales</span>. ✨
              </p>
              <form
                className="flex flex-col justify-center my-8 font-semibold gap-4"
                action={process.env.NEXT_PUBLIC_CONTACT_FORM}
                method="POST"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Tu nombre</label>
                  <input
                    type="text"
                    className="rounded-full px-4 py-2 outline-none bg-gray-800"
                    placeholder="John Doe"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-fucsia-500">Tu email</label>
                  <input
                    type="email"
                    className="rounded-full px-4 py-2 outline-none bg-gray-800"
                    placeholder="tuemail@hotmail.com"
                    content="asdasd"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300">Tu mensaje</label>
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
