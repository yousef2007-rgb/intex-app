import React, { useState, useRef } from "react";
import Search from "../../../public/Assets/icons/Search";
import useData from "../../../Hooks/useData";
import ProductCard from "../ProductsContainer/ProductCard";
import Link from "next/link";
import Close from "../../../public/Assets/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { tougle } from "../../../slices/searchVisabilitySlice";

export default function SearchBody({ visability }) {
  const input = useRef(null);
  const text = "Hello World".toLowerCase();
  const [textValue, setTextValue] = useState(undefined);
  const [data, isLoading] = useData(
    "https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=en&username=28&field_subcategory=151",
    "data"
  );
  const searchVisability = useSelector((state) => state.searchVisability);
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: searchVisability }}
      className=" absolute flex items-start overflow-y-scroll overflow-x-hidden justify-center top-0 left-0 w-screen h-fit bg-white  p-5"
    >
      <div className=" bg-white flex flex-col items-center h-screen w-full rounded-lg  p-5">
        <div className=" max-w-2xl my-20 bg-white flex flex-nowrap w-full justify-center items-center border rounded-lg  border-secondery px-5 py-2 ">
          <input
            ref={input}
            placeholder="Search for product"
            className=" text-black font-bold fex-1 w-full outline-none h-full"
            onChange={() => setTextValue(input.current.value)}
          />
        </div>
        <div
          onClick={() => dispatch(tougle())}
          className="w-full gap-20 max-h-[50vh] flex flex-row justify-evenly flex-wrap"
        >
          {textValue != ""
            ? data &&
              data.data.res
                .filter(
                  (x) =>
                    x.label.toLowerCase().includes(textValue) ||
                    x.field_item_name.toLowerCase().includes(textValue)
                )
                .map((product, index) => (
                  <ProductCard
                    key={index}
                    label={product.label}
                    discription={product.field_item_name}
                    image={product.image}
                    price={product.field_wholesale_price}
                  />
                ))
            : ""}
        </div>
      </div>
    </div>
  );
}
