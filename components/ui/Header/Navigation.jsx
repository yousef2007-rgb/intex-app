import React from "react";
import data from "./data.json";
import Buttons from "./Button";
import Cart from "./Cart";
import Authantication from "./Authantication";
import Searching from "./Searching";
export default function Navigation() {
  return (
    <nav className=" ml-auto flex">
      {data.navigation.map((item, index) => (
        <Buttons key={index} text={item.title} menu={item.menu} />
      ))}
      <Cart />
      <Authantication />
      <Searching />
    </nav>
  );
}
