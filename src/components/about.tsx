import { basicType } from "@/data";
import React from "react";

export default function About({ data }: { data: basicType }) {
  return (
    <div id="about__section" className="my-[100px] px-[15px]">
      <p className="text-base mb-[15px] text-[#999999] font-medium tracking-[5px] font-quicksand">
        ABOUT US
      </p>
      <h1 className="font-playfair text-[18px] mb-[30px] text-black tracking-[5px] font-bold">
        WHO AM I ?
      </h1>
      <p className="">
        <span className="">
          Hi I'm {`${data.firstName} ${data.middleName} ${data.lastName}`}
        </span>
        ,&nbsp;
        {data.about}
      </p>
    </div>
  );
}
