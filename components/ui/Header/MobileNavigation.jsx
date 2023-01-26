import React from "react";
import MenuICon from "../../../public/Assets/icons/MenuICon";

export default function MobileNavigation() {
  return (
    <div>
      <button className="w-8 h-fit flex tablet:hidden">
        <MenuICon />
      </button>
    </div>
  );
}
