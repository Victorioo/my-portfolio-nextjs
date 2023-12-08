import React from "react";
import Gradient from "./Gradient";
function Contact() {
  return (
    <>
      <section className="relative bg-zinc-950 w-screen flex items-center justify-center md:flex-col p-4 py-8 overflow-hidden">
        <div className=" flex flex-col items-center justify-center gap-3 p-8 rounded-2xl">
          <h1 className="text-5xl md:text-4xl text-transparent bg-clip-text font-black bg-gradient-to-tr from-purple-300 to-indigo-500">
            <span className="text-white">#</span>LetsWorkTogether
          </h1>
          <h2 className="text-2xl font-bold text-gray-200 md:text-xl">
            & build something extraordinary.
          </h2>
          <p className="text-gray-400 text-xl max-w-[40ch] font-medium leading-relaxed">
            {" "}
            <br /> Feel free to reach out and let turn your ideas into stunning{" "}
            <span className="text-white">digital experiences</span>. ✨
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
          <Gradient />
        </div>
      </section>
    </>
  );
}

export default Contact;
