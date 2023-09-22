"use client";

import { basicType } from "@/data";
import React from "react";

export default function Hero({data}:{data: basicType}) {
  return (
    <div
      id="home__section"
      className="bg-no-repeat bg-center bg-cover w-full h-screen flex flex-col justify-center opacity-0"
    >
      <h1
        className="text-center font-playfair font-bold text-[2.8rem] mb-8 text-black"
        id="hero__title1"
      >
        Hi!
        <br />I am {data.firstName}
      </h1>
      <h1
        className="text-center font-playfair font-bold text-[2.8rem] mb-8 text-black"
        id="hero__title2"
      >
        I am
        <br />a {data.job}
      </h1>
      <h2
        className="text-center font-quicksand font-light text-[1.8rem] text-black"
        id="hero__description"
      >
        {data.eduTitle}
      </h2>
    </div>
  );
}
