import React from "react";
import ProductsContainer from "./ProductsContainer";

export default function ProductsContainerBody() {
  const data = [
    { title: "inflated products", number: "1515" },
    { title: "inflated pools", number: "342" },
    { title: "pools", number: "343" },
    { title: "furniture", number: "1944" },
    { title: "pool equipment", number: "345" },
    { title: "accessories", number: "344" },
    { title: "inflated boats", number: "1514" },
    { title: "blower", number: "346" },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <ProductsContainer
          key={index}
          title={item.title}
          number={item.number}
          limit={5}
        />
      ))}
    </div>
  );
}
