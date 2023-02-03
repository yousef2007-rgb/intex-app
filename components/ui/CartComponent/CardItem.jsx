import React from "react";
import Trash from "../../../public/Assets/icons/Trash";
import { removeCartItem } from "../../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { tougleCart } from "../../../slices/cartVisabilitySlice";

export default function CardItem({ item, quantity }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  return (
    <div className=" flex items-center  p-5 font-bold">
      <Link
        onClick={() => {
          dispatch(tougleCart());
        }}
        className=" flex flex-1 items-center"
        href={`/Product/${item.label}`}
      >
        <img
          className=" aspect-square h-12 w-12 rounded-xl object-cover "
          src={item.image}
          alt={item.discription}
        />
        <section className="mx-5 flex-1">
          <h1 className="text-blue_gray">{item.discription}</h1>
          <h2 className=" text-black">
            {item.price}JOD x {quantity} = {item.price * quantity}JOD
          </h2>
        </section>
      </Link>
      <div
        onClick={() => dispatch(removeCartItem(item.label))}
        className=" h-6 w-6 fill-blue-300 transition-all hover:fill-red-600"
      >
        <Trash />
      </div>
    </div>
  );
}
