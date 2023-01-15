import Link from "next/link";
import React from "react";

export default function Menu({ data }) {
  console.log(data);
  return (
    <div className=" absolute top-full right-1/2 translate-x-1/2  w-full   mx-auto flex bg-white border-t-4 border-secondery min-w-fit ">
      {data.map((item, index) => (
        <section className=" flex flex-col w-full">
          <img src={item.image} alt="" />
          <ul>
            {item.items.map((element, index) => (
              <li className="font-bold capitalize hover:bg-secondery w-full hover:text-white">
                <Link className="w-full h-full p-1" href={element.link}>
                  {element.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
