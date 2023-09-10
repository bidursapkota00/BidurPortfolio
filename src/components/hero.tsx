import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    tl.set('#home__section', {
      opacity: 0,
      backgroundImage: 'url("/img_bg_1.jpg")',
    });
    tl.set('#hero__title1', { y: 100, display: 'block' }, '<');
    tl.set('#hero__title2', { display: 'none' }, '<');
    tl.set('#hero__description', { y: 100 }, '<');
    tl.to('#home__section', { opacity: 1, duration: 1 }, '>');
    tl.to('#hero__title1', { y: 0, opacity: 1, duration: 1 }, '<');
    tl.to('#hero__description', { y: 0, opacity: 1, duration: 1 }, '<');
    tl.set(
      '#home__section',
      { backgroundImage: 'url("/img_bg_2.jpg")', opacity: 0 },
      '+=2'
    );
    tl.set('#hero__title1', { display: 'none' }, '<');
    tl.set('#hero__title2', { y: 100, display: 'block' }, '<');
    tl.set('#hero__description', { y: 100 }, '<');
    tl.to('#home__section', { opacity: 1, duration: 1 }, '>');
    tl.to('#hero__title2', { y: 0, opacity: 1, duration: 1 }, '<');
    tl.to('#hero__description', { y: 0, opacity: 1, duration: 1 }, '<');
    tl.play();
  }, []);
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
        <br />I am Bidur
      </h1>
      <h1
        className="text-center font-playfair font-bold text-[2.8rem] mb-8 text-black"
        id="hero__title2"
      >
        I am
        <br />a Developer
      </h1>
      <h2
        className="text-center font-quicksand font-light text-[1.8rem] text-black"
        id="hero__description"
      >
        Electronics, communication and Information Engineer
      </h2>
    </div>
  );
}
