"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, scroll } from "framer-motion";

function Header() {
  type WeatherData = {
    current: {
      temperature_2m: String;
    };
  };

  const [weather, setWeather] = useState<WeatherData>(null!);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m&hourly=temperature_2m&timezone=America%2FSao_Paulo"
    )
      .then((res) => res.json())
      .then((res) => setWeather(res));
  }, []);

  let date = new Date();
  // Depending the month returns a different month
  let month = () => {
    switch (date.getMonth() + 1) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return ""; // Manejo de caso por defecto
    }
  };

  let year = date.getFullYear();
  const currentWeather = weather?.current
    ? weather.current.temperature_2m.toString().slice(0, 2)
    : "";

  function formatDate(dateISO: Date) {
    // Create a object date with the dateISO
    let date = new Date(dateISO);

    // Format the date on format HH:MM AM/PM on the Argentinian schedule
    let hour = date.toLocaleTimeString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    });

    let minutes = date.getMinutes();
    //
    const formattedHour = hour.slice(0, 2);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const dayPeriod = Number(hour) >= 12 ? "PM" : "AM";

    return `${formattedHour}:${formattedMinutes} ${dayPeriod}`;
  }
  // Obtains the Argentina date.
  const argentinaDate = formatDate(date);

  const [direction, setDirection] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      scroll((progress) => {
        if (progress > 0) setDirection(true);
        else setDirection(false);
      });
    }
  }, []);

  const [menu, setMenu] = useState(false);
  return (
    <>
      <motion.header
        className="flex justify-between items-center h-24 px-14 fixed w-full z-40"
        style={{ padding: direction ? "0 3.5rem" : "0 2.5rem" }}
        animate={{
          backdropFilter: direction ? "blur(4px)" : "0",
        }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="fixed bg-slate-800 top-0 left-0 bottom-0 right-0 z-40 flex items-center justify-center rounded-tl-full"
          animate={{
            width: menu ? "140vw" : "0px",
            height: menu ? "200vh" : "0px",
            opacity: menu ? 1 : 0
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center fixed h-screen w-screen top-0 left-0">
            <ul className="flex flex-col gap-14">
              <li>
                <a href="#" className="text-4xl font-bold uppercase text-gray-400">Home </a></li>
              <li>
                <a href="#" className="text-4xl font-bold uppercase text-gray-400">About </a>
              </li>
              <li>
                <a href="#" className="text-4xl font-bold uppercase text-gray-400">Work </a>
              </li>
              <li>
                <a href="#" className="text-4xl font-bold uppercase text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.h1
          layout
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:hidden sm:block"
        >
          Victorio
        </motion.h1>
        <nav>
          <motion.ul
            layout
            className={`text-sm uppercase flex items-start gap-14`}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <li className="flex items-center gap-2 md:hidden">
              <span>{`${currentWeather}°C`}</span>
              <Image
                src={"/cloudy.png"}
                alt="weather logo"
                width={50}
                height={50}
                className="w-5 h-5 object-contain"
              ></Image>
              <span className="font-bold">Argentina {argentinaDate}</span>
            </li>
            <li className="flex items-center justify-center gap-1 md:hidden">
              <div className="bg-green-300 h-2 w-2 rounded-full"></div>
              <span className="uppercase">
                Available{" "}
                <b className="font-bold">
                  {month()} {year}
                </b>
              </span>
            </li>
            <li className="md:hidden">
              <a href="#" className="underline underline-offset-4">
                victoriocaccioppoli@gmail.com
              </a>
            </li>
            <motion.label
              className="hamburger hidden sm:block z-[999]"
              onClick={() => setMenu(!menu)}
            >
              <input type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </motion.label>
          </motion.ul>
        </nav>
      </motion.header>
    </>
  );
}

export default Header;
