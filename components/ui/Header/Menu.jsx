import Link from "next/link";
import React from "react";

export default function Menu({ data }) {
  return (
    <div className=" absolute top-full right-1/2 translate-x-1/2  w-full   mx-auto flex bg-white border-t-4 border-secondery min-w-fit ">
      {data.map((item, index) => (
        <section key={index} className=" flex flex-col w-60">
          <img src={item.image} alt="" />
          <div className=" flex flex-col">
            {item.items.map((element, index) => (
              <Link
                key={index}
                className="font-bold p-3 capitalize transition-all hover:bg-secondery w-full hover:text-white"
                href={element.link}
              >
                {element.text}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
