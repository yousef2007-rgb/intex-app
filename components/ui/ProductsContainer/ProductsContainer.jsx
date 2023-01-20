import React from "react";
import { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import ProductCard from "./ProductCard";
import Link from "next/link";
import useData from "../../../Hooks/useData";

export default function ProductsContainer({ title, number, limit }) {
  const [data, isLoading] = useData(
    "https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=en&username=28&field_subcategory=151",
    "data"
  );
  return isLoading ? (
    <div className="flex items-center justify-center h-full h-1/2">
      <img src="/Assets/GIF/Loading.gif" width={"100%"} />
    </div>
  ) : (
    <div className="my-12 flex flex-col items-center">
      <h1 className=" text-primary my-5 mx-auto w-fit text-3xl capitalize font-bold  ">
        {title}
      </h1>
      <div className="flex flex-wrap gap-10 justify-center items-center text-center ">
        {data &&
          data.data.res
            .filter((x) => x.field_subcategory == number)
            .filter((x, index) => index < limit)
            .map((product, i) => (
              <ProductCard
                label={product.label}
                discription={product.field_item_name}
                image={product.image}
                price={product.field_wholesale_price}
              />
            ))}
      </div>
      {limit <= 5 ? (
        <Link
          href={`/Products/${number}?title=${title}`}
          className=" bg-primary text-white mx-auto px-5 py-2 font-bold my-10"
        >
          View All
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
