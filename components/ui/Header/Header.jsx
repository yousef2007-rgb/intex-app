import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" z-50 fixed w-full bg-white top-0 ">
      <div className=" max-w-7xl mx-auto h-28 flex items-center">
        <Link href={"/"}>
          <img className=" w-44" src="/Assets/images/logo.png" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
