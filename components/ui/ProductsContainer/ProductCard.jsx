import React from "react";
import Link from "next/link";

export default function ProductCard({
  label,
  discription,
  image,
  price,
  cagotary,
  nid,
}) {
  return (
    <Link
      href={`/Product/${nid}`}
      className=" flex w-full max-w-xs flex-col items-center justify-center p-5 text-center shadow-lg transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl"
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="image" content={image} />
      <img
        src={image}
        alt={discription + label}
        className="aspect-square w-full object-cover"
        loading="lazy"
      />
      <h1 className=" my-2 w-fit font-bold text-primary">{discription}</h1>
      <h2 className=" w-fit font-bold text-secondery">{label}</h2>
      <h3 className=" my-2 w-fit font-bold">{price * 1.5}JOD</h3>
    </Link>
  );
}
