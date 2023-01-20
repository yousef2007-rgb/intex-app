import React, { createRef, useState } from "react";
import Chevron from "../../../public/Assets/icons/chevron";
import Menu from "./Menu";
export default function Button({ text, menu }) {
  const [menuVisablity, setMenuVisablity] = useState("none");
  return (
    <div>
      <button
        onMouseEnter={() => setMenuVisablity("flex")}
        onMouseLeave={() => setMenuVisablity("none")}
        className=" relative uppercase hover:border-secondery border-transparent border-t-4   font-extrabold mx-3 flex items-center h-28 [&>span]:hover:rotate-180"
      >
        {text}
        {menu ? (
          <span className=" w-3 h-3 mx-2">
            <Chevron />
          </span>
        ) : (
          ""
        )}
        <div
          style={{
            display: menuVisablity,
          }}
        >
          {menu ? <Menu data={menu} /> : ""}
        </div>
      </button>
    </div>
  );
}
