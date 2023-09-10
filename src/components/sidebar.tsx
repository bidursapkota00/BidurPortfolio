import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function Sidebar({ data }: any) {
  const links = [
    'home',
    'about',
    'services',
    'skills',
    'education',
    'experience',
    'work',
    'blog',
    'contact',
  ];
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    links.forEach((l) => {
      ScrollTrigger.create({
        trigger: `#${l}__section`,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) =>
          self.isActive
            ? gsap.set(`#${l}`, {
                className: 'sidebar__link__active',
              })
            : gsap.set(`#${l}`, {
                className: 'sidebar__link',
              }),
      });
    });
  }, []);
  return (
    <>
      <div className="mt-[60px] flex flex-col justify-center items-center">
        <Image
          width={150}
          height={150}
          src="/about.jpg"
          alt="Profile"
          className="rounded-full mb-[30px] w-[150px] h-[150px] object-cover"
        />
        <h2 className="font-playfair text-[2.2rem] font-bold text-black mb-3 capitalize">
          {data.name}
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
        &copy; Copyright &copy;{new Date().getFullYear()} All rights reserved |
        This template is made with &#x2764; by Bidur
      </p>
    </>
  );
}
