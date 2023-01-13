import React from "react";
import Chevron from "../../../public/Assets/icons/chevron";
import Menu from "./Menu";
export default function Button({ text, menu }) {
  return (
    <div>
      <button className=" uppercase hover:border-secondery border-transparent border-t-4 relative  font-extrabold mx-3 flex items-center h-28 [&>svg]:hover:rotate-180">
        {text}
        {menu ? (
          <div className=" w-3 h-3 mx-2">
            <Chevron />
          </div>
        ) : (
          ""
        )}
        {menu ? <Menu data={menu} /> : ""}
      </button>
    </div>
  );
}
