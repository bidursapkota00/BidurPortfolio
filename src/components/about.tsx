import { basicType } from "@/data";
import React from "react";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";

export default function About({ data }: { data: basicType }) {
  const colors = ["#2c98f0", "#ec5453", "#f9bf3f", "#a84cb8"];
  const style = {
    fontSize: "30px",
    marginBottom: "20px",
  };
  return (
    <div id="about__section" className="my-[100px] px-[15px]">
      <p className="text-base mb-[15px] text-[#999999] font-medium tracking-[5px] font-quicksand">
        ABOUT US
      </p>
      <h1 className="font-playfair text-[18px] mb-[30px] text-black tracking-[5px] font-bold">
        WHO AM I ?
      </h1>
      <p className="mb-[20px]">
        <span className="font-bold capitalize">
          Hi I'm {`${data.firstName} ${data.middleName} ${data.lastName}`}
        </span>
        ,&nbsp;
        {data.about}
      </p>

      <div className="">
        {data.expertise.map((e, i) => (
          <div
            className="mb-[20px] p-[20px] border-b-2 shadow-[0px_0px_56px_-8px_rgba(0,0,0,0.17)]"
            style={{borderColor: colors[i]}}
          >
            {e == "graphic design" ? (
              <EmojiObjectsOutlinedIcon sx={[style, { color: colors[i] }]} />
            ) : e == "web design" ? (
              <LanguageIcon sx={[style, { color: colors[i] }]} />
            ) : e == "software" ? (
              <StorageIcon sx={[style, { color: colors[i] }]} />
            ) : (
              <PhoneAndroidIcon sx={[style, { color: colors[i] }]} />
            )}
            <h3 className="font-quicksand font-[500] text-black mb-[30px] capitalize">
              {e}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
