import React from "react";

export default function Intro({ link }) {
  return (
    <div className=" relative">
      <img src={link} alt="" className="w-full " />
      {/* <article className=" absolute bottom-1/3 right-10 ">
        <h1 className=" text-white font-bold text-8xl">
          Welcome To <br /> IntexJo
        </h1>
      </article> */}
    </div>
  );
}
