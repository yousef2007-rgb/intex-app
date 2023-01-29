import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import Cart from "./Cart";
import Search from "./Searching";
import { tougleLanguage } from "../../../slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  return (
    <header className=" z-50 fixed shadow-lg w-full bg-white top-0 ">
      <div
        className=" max-w-5xl mx-auto h-28 flex items-center"
        style={{
          flexDirection: language == "arabic" ? "row-reverse" : "row",
        }}
      >
        <Link href={"/"}>
          <img className=" w-44 mx-3" src="/Assets/images/logo.png" />
        </Link>
        <Navigation />
        <button className=" mx-2" onClick={() => dispatch(tougleLanguage())}>
          🌐
        </button>
        <Cart />
        <Search />
      </div>
    </header>
  );
}
