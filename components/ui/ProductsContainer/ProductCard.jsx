import React from "react";
import Link from "next/link";

export default function ProductCard({
  label,
  discription,
  image,
  price,
  cagotary,
}) {
  return (
    <Link
      href={`/Product/${label}`}
      className=" p-5 text-center max-w-xs w-full flex flex-col items-center justify-center shadow-lg"
    >
      <img src={image} className="w-full aspect-square object-cover" />
      <h1 className=" font-bold text-primary my-2 w-fit">{discription}</h1>
      <h2 className=" font-bold text-secondery w-fit">{label}</h2>
      <h3 className=" font-bold my-2 w-fit">{price * 1.5}JOD</h3>
      <button className=" border-transparent bg-primary text-white mx-auto px-5 py-2 font-bold my-10 hover:bg-white hover:text-primary hover:border-primary border-2">
        Add to Cart
      </button>
    </Link>
  );
}
