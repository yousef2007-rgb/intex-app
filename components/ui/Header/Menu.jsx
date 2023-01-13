import React from "react";

export default function Menu({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <>
          {item.image ? (
            <img
              src={
                "/Assets/images/navigation/2021_04_12_agp_cropped__34790.original"
              }
            />
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
}
