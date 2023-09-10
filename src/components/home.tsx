'use client';

import React, { useEffect, useState } from 'react';
import Hero from './hero';
import Sidebar from './sidebar';
import Skill from './skill';

const HomePage = ({ data }: any) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

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

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isSideNavOpen]);

  return (
    <div>
      <div
        className={`fixed left-0 top-0 py-12 px-6 lg:hidden z-50 duration-500 ${
          isSideNavOpen ? 'translate-x-[300px]' : ''
        }`}
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="flex flex-col justify-between cursor-pointer w-12 h-6 group relative">
          <div
            className={`w-12 h-[2px] duration-200 absolute top-0 bg-black ${
              isSideNavOpen
                ? 'rotate-45 top-1/2 -translate-y-1/2'
                : 'group-hover:-top-1'
            }`}
          ></div>
          <div
            className={`w-12 h-[2px] duration-200 absolute top-1/2 -translate-y-1/2 bg-black ${
              isSideNavOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-12 h-[2px] duration-200 absolute bottom-0 bg-black ${
              isSideNavOpen
                ? '-rotate-45 top-1/2 -translate-y-1/2'
                : 'group-hover:-bottom-1'
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`w-[300px] z-40 h-screen overflow-y-scroll bg-[#f2f3f7] fixed top-0 transition-all duration-500 ${
          isSideNavOpen ? 'left-0' : 'left-[-300px]'
        } lg:left-0 navlg:left-[calc((100%-1170px)/2)]`}
      >
        <Sidebar data={data} />
      </div>
      <div className="max-w-[1170px] mx-auto overflow-x-hidden relative">
        <div
          className={`w-[100%] transition-all duration-500  ${
            isSideNavOpen ? 'ml-[300px]' : 'ml-0'
          } lg:pl-[300px] lg:ml-0`}
        >
          <Hero />
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
