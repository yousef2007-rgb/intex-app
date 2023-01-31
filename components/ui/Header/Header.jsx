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
    <header className=" fixed top-0 z-50 w-full bg-white shadow-lg ">
      <div
        className=" mx-auto flex h-28 max-w-5xl items-center"
        style={{
          flexDirection: language == "arabic" ? "row-reverse" : "row",
        }}
      >
        <Link href={"/"}>
          <img className=" mx-3 w-44" src="/Assets/images/logo.png" />
        </Link>
        <Navigation />
        <button
          className=" flex font-bold capitalize tablet:mx-3"
          style={{
            flexDirection: language == "arabic" ? "row-reverse" : "row",
            marginLeft: language == "english" ? "auto" : "unset",
            marginRight: language == "arabic" ? "auto" : "unset",
          }}
          onClick={() => dispatch(tougleLanguage())}
        >
          {language == "arabic" ? "EN" : "AR"}
        </button>
        <Cart />
        <Search />
      </div>
    </header>
  );
}
