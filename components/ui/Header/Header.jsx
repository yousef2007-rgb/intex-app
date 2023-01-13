import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className=" max-w-6xl mx-auto h-28 flex items-center">
      <img className=" w-44" src="/Assets/images/logo.png" />
      <Navigation />
    </header>
  );
}
