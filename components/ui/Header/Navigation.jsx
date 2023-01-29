import React from "react";
import data from "./data.json";
import Buttons from "./Button";
export default function Navigation() {
  return (
    <nav className=" ml-auto hidden tablet:flex">
      {data.navigation.map((item, index) => (
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
