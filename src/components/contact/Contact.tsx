import React from "react";
import Gradient from "./Gradient";
function Contact({children} : {children: JSX.Element}) {
  return (
    <>
      <section className="relative bg-zinc-950 w-screen flex items-center justify-center md:flex-col p-4 py-8 overflow-hidden" id="contact">
        <div className=" flex flex-col items-center justify-center gap-3 p-8 rounded-2xl">
          {children}
          <Gradient />
        </div>
      </section>
    </>
  );
}

export default Contact;
