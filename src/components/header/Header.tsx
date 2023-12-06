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
  console.log(menu);
  return (
    <motion.header
      className="flex justify-between items-center h-24 px-14 fixed w-full z-40 sm:w-[90%]"
      style={{ padding: direction ? "0 5.5rem" : "0 2.5rem" }}
      animate={{
        backdropFilter: direction ? "blur(10px)" : "0",
      }}
      transition={{ duration: 2 }}
    >
      <motion.h1 layout transition={{ duration: 0.9, ease: "easeOut" }}>
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
          <motion.button
            className="text-white relative"
            onClick={() => setMenu(!menu)}
          >
            <motion.span
              className="absolute h-[2px] w-[40px] bg-white first-letter:top-1/2 left-1/3"
              animate={{ rotate: menu ? 45 : 0 }}
            ></motion.span>
            <motion.span
              className="absolute h-[2px] w-[40px] bg-white ease-in-out top-1/2 left-1/3"
              animate={{ rotate: menu ? 135 : 0, top: menu ? 0 : 10}}
            ></motion.span>
          </motion.button>
        </motion.ul>
      </nav>
    </motion.header>
  );
}

export default Header;
