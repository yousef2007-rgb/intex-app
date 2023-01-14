import React from "react";

export default function Intro() {
  return (
    <div className=" relative">
      <img
        src="/Assets/images/intro/hero1.jpg"
        alt=""
        className="w-full aspect-video object-cover"
      />
      <article className=" absolute bottom-1/3 right-10 ">
        <h1 className=" text-white font-bold text-8xl">
          Welcome To <br /> IntexJo
        </h1>
      </article>
    </div>
  );
}
