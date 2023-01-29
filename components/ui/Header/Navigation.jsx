import React from "react";
import data from "../../../data/Header.json";
import Buttons from "./Button";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Navigation() {
  const language = useSelector((state) => state.language);
  const uiData = language == "english" ? data.english : data.arabic;

  return (
    <nav
      className=" ml-auto hidden tablet:flex"
      style={{
        flexDirection: language == "arabic" ? "row-reverse" : "row",
      }}
    >
      {uiData.navigation.map((item, index) => (
        <Buttons
          key={index}
          text={item.title}
          link={item.link}
          menu={item.menu}
        />
      ))}
    </nav>
  );
}
