import React from "react";
import Hero from "./hero";
import Sidebar from "./sidebar";
import Skill from "./skill";

const HomePage = ({ data }: any) => {
  return (
    <div>
      <Sidebar data={data} />
      <div className="max-w-[1170px] mx-auto overflow-x-hidden relative">
        <div id="HomePage">
          <Hero />
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
