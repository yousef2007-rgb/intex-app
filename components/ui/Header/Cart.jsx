import React from "react";
import Cart from "../../../public/Assets/icons/Cart";

export default function Cart2() {
  return (
    <div className=" mx-4 w-8 h-28 flex items-center hover:border-secondery border-transparent border-t-4 cursor-pointer ">
      <div className="relative">
        {/* <span className=" absolute bottom-4 left-4 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span> */}
        <Cart />
      </div>
    </div>
  );
}
