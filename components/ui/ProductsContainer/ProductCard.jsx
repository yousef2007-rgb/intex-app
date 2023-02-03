import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductCard({
  label,
  discription,
  image,
  price,
  cagotary,
  nid,
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Loading visablilty={isLoading} />
      <Link
        onClick={() => setIsLoading(true)}
        href={`/Product/${nid}`}
        className=" z-0 flex w-full max-w-xs flex-col items-center justify-center p-5 text-center shadow-lg transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl"
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
    </>
  );
}

const Loading = ({ visablilty }) => {
  return (
    <div
      className=" fixed top-0 left-0 z-30  h-screen w-screen items-center justify-center bg-white"
      style={{ display: visablilty ? "flex" : "none" }}
    >
      <img
        className=" mx-auto w-12"
        src="/Assets/GIF/Loading_icon.gif"
        alt="loading gif"
      />
    </div>
  );
};
