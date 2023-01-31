import React, { useState } from "react";
import Search from "../../../public/Assets/icons/Search";
import SearchBody from "../SearchBody/SearchBody";
import Close from "../../../public/Assets/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { tougle } from "../../../slices/searchVisabilitySlice";

export default function Searching() {
  const searchVisability = useSelector((state) => state.searchVisability);
  const dispatch = useDispatch();
  return (
    <div className="hover:border-secondery mx-2 flex h-28 w-6 cursor-pointer items-center border-t-4 border-transparent ">
      <SearchBody visability={searchVisability} />
      <button
        style={{
          position: searchVisability == "none" ? "relative" : "absolute",
          right: "25%",
        }}
        className={` z-[${searchVisability == "none" ? 0 : 50}] w-6`}
        onClick={() => dispatch(tougle())}
      >
        {searchVisability == "none" ? <Search /> : <Close />}
      </button>
    </div>
  );
}
