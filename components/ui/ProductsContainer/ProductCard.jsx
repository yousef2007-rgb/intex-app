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
      className=" transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl p-5 text-center max-w-xs w-full flex flex-col items-center justify-center shadow-lg"
    >
      <img
        src={image}
        alt={discription + label}
        className="w-full aspect-square object-cover"
      />
      <h1 className=" font-bold text-primary my-2 w-fit">{discription}</h1>
      <h2 className=" font-bold text-secondery w-fit">{label}</h2>
      <h3 className=" font-bold my-2 w-fit">{price * 1.5}JOD</h3>
    </Link>
  );
}
