import React, { useState } from "react";
import Search from "../../../public/Assets/icons/Search";
import SearchBody from "../SearchBody/SearchBody";
import Close from "../../../public/Assets/icons/Close";

export default function Searching() {
  const [visability, setVisability] = useState("none");
  return (
    <div className="mx-4 w-6 h-28 flex items-center hover:border-secondery border-transparent border-t-4 cursor-pointer ">
      <SearchBody visability={visability} />
      <button
        style={{
          position: visability == "none" ? "relative" : "absolute",
          right: "25%",
        }}
        className=" z-50 w-6"
        onClick={() =>
          visability == "none" ? setVisability("flex") : setVisability("none")
        }
      >
        {visability == "none" ? <Search /> : <Close />}
      </button>
    </div>
  );
}
