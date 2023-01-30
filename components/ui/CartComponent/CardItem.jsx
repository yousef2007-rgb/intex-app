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
        onClick={() => dispatch(tougleCart())}
        className=" flex item-center flex-1"
        href={`/Product/${item.label}`}
      >
        <img
          className=" w-12 h-12  aspect-square rounded-xl"
          src={item.image}
          alt={item.discription}
        />
        <section className="flex-1 mx-5">
          <h1 className="text-blue-gray">{item.discription}</h1>
          <h2 className=" text-black">
            {item.price}JOD x {quantity} = {item.price * quantity}JOD
          </h2>
        </section>
      </Link>
      <div
        onClick={() => dispatch(removeCartItem(item.label))}
        className=" w-6 fill-blue-300 hover:fill-red-600 h-6 transition-all"
      >
        <Trash />
      </div>
    </div>
  );
}
