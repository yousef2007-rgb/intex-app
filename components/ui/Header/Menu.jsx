import React from "react";

export default function Menu({ data }) {
  console.log(data);
  return (
    <div className=" absolute top-full right-1/2 translate-x-1/2  w-fit   mx-auto flex bg-white border-t-4 border-secondery min-w-fit ">
      {data.map((item, index) => (
        <section className=" flex flex-col text-left w-full px-3">
          <h1>{item.title}</h1>
          <ul>
            {item.items.map((element, index) => (
              <li className=" font-normal capitalize hover:bg-secondery w-full hover:text-white">
                <a href={element.link}>{element.text}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
