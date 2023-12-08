import React from "react";
function Footer({ children }: { children?: JSX.Element }) {
  return (
    <footer className="bg-gradient-to-t from-black to-zinc-950 w-screen flex justify-around items-start py-14 md:flex-col md:gap-5 md:items-center px-6">
      <h1 className="text-lg font-bold">Crafting ideas</h1>
      <p className="self-end">
        Copyright © 2024 by Victorio Caccioppoli - All the rights reserved
      </p>
      <h2 className="font-semibold hover:pointer">
        <a href="#">Go to top ☝🏼</a>
      </h2>
      {children}
    </footer>
  );
}

export default Footer;
