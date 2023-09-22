import React from "react";
import { data as d, dataType } from "../data";

import HomePage from "@/components/home";

async function getData() {
  // const res = await fetch('https://api.example.com/...')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(d);
    }, 2000);
  });
}

export default async function Home() {
  const data = await getData();

  return <HomePage data={data as dataType} />;
}
