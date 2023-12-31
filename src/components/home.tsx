import React from "react";
import Hero from "./hero";
import Sidebar from "./sidebar";
import Skill from "./skill";
import About from "./about";
import { dataType } from "@/data";

const HomePage = ({ data }: { data: dataType }) => {
  return (
    <div>
      <Sidebar data={data.basic} />
      <div className="max-w-[1170px] mx-auto overflow-x-hidden relative">
        <div
          id="HomePage"
          className="w-[100%] transition-all duration-500 ml-[0px] lg:pl-[300px] lg:ml-0"
        >
          <Hero data={data.basic}/>
          <About data={data.basic}/>
          {/* <Skill /> */}
          <div id="services__section"></div>
          <div id="skills__section"></div>
          <div id="education__section"></div>
          <div id="experience__section"></div>
          <div id="work__section"></div>
          <div id="blog__section"></div>
          <div id="contact__section"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
