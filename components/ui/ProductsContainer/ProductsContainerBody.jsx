import React from "react";
import ProductsContainer from "./ProductsContainer";
import data from "../../../data/ProducsContainerBody.json";
import { useSelector } from "react-redux";

export default function ProductsContainerBody() {
  const language = useSelector((state) => state.language);
  const uiData = language == "arabic" ? data.arabic : data.english;
  return (
    <div>
      {uiData.map((item, index) => (
        <ProductsContainer
          key={index}
          title={item.title}
          number={item.number}
          limit={3}
        />
      ))}
    </div>
  );
}
