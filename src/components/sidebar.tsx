"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { basicType } from "@/data";

export default function Sidebar({ data }: {data: basicType}) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const links = [
    "home",
    "about",
    "services",
    "skills",
    "education",
    "experience",
    "work",
    "blog",
    "contact",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    links.forEach((l) => {
      ScrollTrigger.create({
        trigger: `#${l}__section`,
        start: "top center",
        end: "bottom center",
        onToggle: (self) =>
          self.isActive
            ? gsap.set(`#${l}`, {
                className: "sidebar__link__active",
              })
            : gsap.set(`#${l}`, {
                className: "sidebar__link",
              }),
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (windowWidth < 1024 && isSideNavOpen) {
        setIsSideNavOpen(false);
      }
    };
    
    document.addEventListener("scroll", handleScroll);
    
    isSideNavOpen
      ? gsap.set("#HomePage", { className: "w-[100%] transition-all duration-500 ml-[300px] lg:pl-[300px] lg:ml-0" })
      : gsap.set("#HomePage", { className: "w-[100%] transition-all duration-500 ml-[0px] lg:pl-[300px] lg:ml-0" });
      
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isSideNavOpen]);

  return (
    <>
      <div
        className={`fixed left-0 top-0 py-12 px-6 lg:hidden z-50 duration-500 ${
          isSideNavOpen ? "translate-x-[300px]" : ""
        }`}
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="flex flex-col justify-between cursor-pointer w-12 h-6 group relative">
          <div
            className={`w-12 h-[2px] duration-200 absolute top-0 bg-black ${
              isSideNavOpen
                ? "rotate-45 top-1/2 -translate-y-1/2"
                : "group-hover:-top-1"
            }`}
          ></div>
          <div
            className={`w-12 h-[2px] duration-200 absolute top-1/2 -translate-y-1/2 bg-black ${
              isSideNavOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-12 h-[2px] duration-200 absolute bottom-0 bg-black ${
              isSideNavOpen
                ? "-rotate-45 top-1/2 -translate-y-1/2"
                : "group-hover:-bottom-1"
            }`}
          ></div>
        </div>
      </div>

      <div
        className={`w-[300px] z-40 h-screen overflow-y-scroll bg-[#f2f3f7] fixed top-0 transition-all duration-500 ${
          isSideNavOpen ? "left-0" : "left-[-300px]"
        } lg:left-0 navlg:left-[calc((100%-1170px)/2)]`}
      >
        <div className="mt-[60px] flex flex-col justify-center items-center">
          <Image
            width={150}
            height={150}
            src="/about.jpg"
            alt="Profile"
            className="rounded-full mb-[30px] w-[150px] h-[150px] object-cover"
          />
          <h2 className="font-playfair text-[2.2rem] font-bold text-black mb-3 capitalize">
            {`${data.firstName} ${data.middleName} ${data.lastName}`}
          </h2>
          <h3 className="font-quicksand text-xl text-[#2c98f0] uppercase">
            {data.job}
            <span className="text-[rgba(0,0,0,0.7)]">
              &nbsp;in&nbsp;{data.country}
            </span>
          </h3>
        </div>

        <ul className="font-quicksand text-xl uppercase text-center mt-12 mb-24">
          {links.map((l) => (
            <li
              className="py-[1px] mb-4 text-[rgba(0,0,0,0.7)] tracking-[1px] cursor-pointer"
              key={l}
            >
              <span id={l} className="sidebar__link">
                {l}
              </span>
            </li>
          ))}
        </ul>

        <p className="px-8 mb-12 text-[rgba(0,0,0,0.5)] text-center">
          &copy; Copyright &copy;{new Date().getFullYear()} All rights reserved
          | This template is made with &#x2764; by Bidur
        </p>
      </div>
    </>
  );
}
